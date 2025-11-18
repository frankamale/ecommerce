import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/nav-bar';
import Footer from '../components/footer';
import ProductCard from '../components/product-card';
import ProductToolbar from '../components/product-toolbar';
import { Flame, Tag, TrendingDown } from 'lucide-react';
import { products as allProducts } from '../data/products';

const Deals = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('discount');

  // Get products with discounts
  const dealsProducts = allProducts
    .filter(p => p.discount && p.discount > 0)
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

  // Sort products
  const sortedProducts = [...dealsProducts].sort((a, b) => {
    switch (sortBy) {
      case 'discount':
        return (b.discount || 0) - (a.discount || 0);
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

  // Calculate stats
  const avgDiscount = Math.round(
    dealsProducts.reduce((sum, p) => sum + (p.discount || 0), 0) / dealsProducts.length
  );
  const maxDiscount = Math.max(...dealsProducts.map(p => p.discount || 0));

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />

      {/* Breadcrumb */}
      <div className="bg-white border-b px-4 md:px-10 lg:px-20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Deals</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-12 px-4 md:px-10 lg:px-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Flame size={48} />
            <h1 className="text-4xl font-bold">Hot Deals & Discounts</h1>
          </div>
          <p className="text-xl text-red-100 mb-6">
            Save big on your favorite products with our exclusive deals
          </p>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="flex items-center gap-3">
                <Tag size={32} />
                <div>
                  <p className="text-3xl font-bold">{dealsProducts.length}</p>
                  <p className="text-red-100 text-sm">Products on Sale</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="flex items-center gap-3">
                <TrendingDown size={32} />
                <div>
                  <p className="text-3xl font-bold">{maxDiscount}%</p>
                  <p className="text-red-100 text-sm">Maximum Discount</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="flex items-center gap-3">
                <Flame size={32} />
                <div>
                  <p className="text-3xl font-bold">{avgDiscount}%</p>
                  <p className="text-red-100 text-sm">Average Savings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="container mx-auto py-8 px-4 md:px-10 lg:px-20">
        <ProductToolbar
          viewMode={viewMode}
          setViewMode={setViewMode}
          sortBy={sortBy}
          setSortBy={setSortBy}
          productCount={sortedProducts.length}
          onToggleFilters={() => {}}
        />

        {/* Products Grid */}
        {sortedProducts.length > 0 ? (
          <div className={viewMode === 'grid'
            ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6'
            : 'grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6'
          }>
            {sortedProducts.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Flame size={64} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No Deals Available</h3>
            <p className="text-gray-600">Check back soon for amazing discounts!</p>
          </div>
        )}

        {/* Info Banner */}
        <div className="mt-12 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-8 border border-orange-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Flame size={32} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  Don't Miss Out on These Amazing Deals!
                </h3>
                <p className="text-gray-600">
                  Limited time offers. Prices and availability subject to change.
                </p>
              </div>
            </div>
            <Link
              to="/register"
              className="bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition font-semibold whitespace-nowrap"
            >
              Sign Up for Alerts
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Deals;
