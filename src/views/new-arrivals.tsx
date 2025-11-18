import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/nav-bar';
import Footer from '../components/footer';
import ProductCard from '../components/product-card';
import ProductToolbar from '../components/product-toolbar';
import SidebarFilter from '../components/sidebar-filter';
import { Sparkles, TrendingUp, Package } from 'lucide-react';
import { products as allProducts, categories as allCategories } from '../data/products';

const NewArrivals = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('newest');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 5000000]);
  const [showFilters, setShowFilters] = useState(false);

  // Get new products
  const newProducts = allProducts
    .filter(p => p.isNew)
    .map(p => ({
      id: p.id,
      name: p.name,
      price: p.price,
      originalPrice: p.originalPrice,
      rating: p.rating,
      reviews: p.reviews,
      image: p.images[0],
      category: p.category,
      inStock: p.inStock,
      isNew: p.isNew,
      discount: p.discount
    }));

  // Filter products
  const filteredProducts = newProducts.filter(product => {
    if (selectedCategory !== 'all' && product.category !== selectedCategory) return false;
    if (product.price < priceRange[0] || product.price > priceRange[1]) return false;
    return true;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return b.id - a.id;
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  // Get categories with counts
  const categories = allCategories.map(cat => ({
    id: cat.slug,
    name: cat.name,
    count: newProducts.filter(p => p.category === cat.slug).length
  }));

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />

      {/* Breadcrumb */}
      <div className="bg-white border-b px-4 md:px-10 lg:px-20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">New Arrivals</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-12 px-4 md:px-10 lg:px-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles size={48} />
            <h1 className="text-4xl font-bold">New Arrivals</h1>
          </div>
          <p className="text-xl text-purple-100 mb-6">
            Discover the latest products just added to our collection
          </p>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="flex items-center gap-3">
                <Package size={32} />
                <div>
                  <p className="text-3xl font-bold">{newProducts.length}</p>
                  <p className="text-purple-100 text-sm">New Products</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="flex items-center gap-3">
                <TrendingUp size={32} />
                <div>
                  <p className="text-3xl font-bold">{categories.filter(c => c.count > 0).length}</p>
                  <p className="text-purple-100 text-sm">Categories</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="flex items-center gap-3">
                <Sparkles size={32} />
                <div>
                  <p className="text-3xl font-bold">Fresh</p>
                  <p className="text-purple-100 text-sm">Latest Stock</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="container mx-auto py-8 px-4 md:px-10 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className={`lg:w-64 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <SidebarFilter
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              selectedSubCategory={selectedCategory}
              setSelectedSubCategory={setSelectedCategory}
              subCategories={categories}
            />
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            <ProductToolbar
              viewMode={viewMode}
              setViewMode={setViewMode}
              sortBy={sortBy}
              setSortBy={setSortBy}
              productCount={sortedProducts.length}
              onToggleFilters={() => setShowFilters(!showFilters)}
            />

            {/* Products Grid */}
            {sortedProducts.length > 0 ? (
              <div className={viewMode === 'grid'
                ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'
                : 'grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6'
              }>
                {sortedProducts.map(product => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <Sparkles size={64} className="mx-auto text-gray-400 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No New Arrivals</h3>
                <p className="text-gray-600">Check back soon for fresh products!</p>
              </div>
            )}
          </div>
        </div>

        {/* Info Banner */}
        <div className="mt-12 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-8 border border-purple-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Sparkles size={32} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  Be the First to Shop New Products
                </h3>
                <p className="text-gray-600">
                  Sign up for notifications and never miss our latest arrivals.
                </p>
              </div>
            </div>
            <Link
              to="/register"
              className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition font-semibold whitespace-nowrap"
            >
              Get Notified
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NewArrivals;
