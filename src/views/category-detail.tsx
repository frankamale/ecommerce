import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import NavBar from '../components/nav-bar';
import Footer from '../components/footer';
import ProductCard from '../components/product-card';
import SidebarFilter from '../components/sidebar-filter';
import ProductToolbar from '../components/product-toolbar';
import { getCategoryBySlug, getProductsByCategory, products as allProducts } from '../data/products';

const CategoryDetail = () => {
  const { categorySlug } = useParams();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [selectedSubCategory, setSelectedSubCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 2000000]);
  const [showFilters, setShowFilters] = useState(true);

  // Get category data from data file
  const currentCategory = getCategoryBySlug(categorySlug || 'electronics');

  // Get products for this category from data file
  const categoryProducts = getProductsByCategory(categorySlug || 'electronics');

  // Map products to component format
  const products = categoryProducts.map(p => ({
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

  // Prepare sub-categories with product counts
  const subCategoriesWithCounts = currentCategory.subCategories.map(subCat => ({
    id: subCat.slug,
    name: subCat.name,
    count: allProducts.filter(p => p.subCategory === subCat.slug).length
  }));

  const filteredProducts = products.filter(
    (product) => product.price >= priceRange[0] && product.price <= priceRange[1]
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600">
              Home
            </Link>
            <span>/</span>
            <Link to="/categories" className="hover:text-blue-600">
              Categories
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{currentCategory.name}</span>
          </div>
        </div>
      </div>

      {/* Category Header */}
      <div
        className="relative bg-cover bg-center py-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${currentCategory.image})`
        }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {currentCategory.name}
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            {currentCategory.description}
          </p>
        </div>
      </div>

      {/* Products Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className={`lg:w-64 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <SidebarFilter
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              selectedSubCategory={selectedSubCategory}
              setSelectedSubCategory={setSelectedSubCategory}
              subCategories={subCategoriesWithCounts}
            />
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            <ProductToolbar
              viewMode={viewMode}
              setViewMode={setViewMode}
              sortBy={sortBy}
              setSortBy={setSortBy}
              productCount={filteredProducts.length}
              onToggleFilters={() => setShowFilters(!showFilters)}
            />

            {/* Products Grid */}
            <div
              className={
                viewMode === 'grid'
                  ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
                  : 'grid grid-cols-1 lg:grid-cols-2 gap-4'
              }
            >
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex justify-center">
              <div className="flex gap-2">
                <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
                  Previous
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">1</button>
                <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">2</button>
                <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">3</button>
                <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CategoryDetail;
