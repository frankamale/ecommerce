import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/nav-bar';
import Footer from '../components/footer';
import ProductCard from '../components/product-card';
import SidebarFilter from '../components/sidebar-filter';
import ProductToolbar from '../components/product-toolbar';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  inStock: boolean;
  isNew?: boolean;
  discount?: number;
}

const Products = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 5000000]);
  const [showFilters, setShowFilters] = useState(true);

  // Sample products data
  const products: Product[] = [
    {
      id: 1,
      name: 'Wireless Bluetooth Headphones',
      price: 320000,
      originalPrice: 450000,
      rating: 4.5,
      reviews: 128,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
      category: 'electronics',
      inStock: true,
      discount: 29
    },
    {
      id: 2,
      name: 'Smart Watch Series 6',
      price: 750000,
      rating: 4.8,
      reviews: 256,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
      category: 'electronics',
      inStock: true,
      isNew: true
    },
    {
      id: 3,
      name: 'Premium Laptop Bag',
      price: 185000,
      originalPrice: 220000,
      rating: 4.3,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
      category: 'fashion',
      inStock: true,
      discount: 16
    },
    {
      id: 4,
      name: 'Coffee Maker Machine',
      price: 295000,
      rating: 4.6,
      reviews: 142,
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400',
      category: 'home',
      inStock: true
    },
    {
      id: 5,
      name: 'Running Shoes',
      price: 420000,
      originalPrice: 550000,
      rating: 4.7,
      reviews: 203,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
      category: 'sports',
      inStock: true,
      discount: 24
    },
    {
      id: 6,
      name: 'Leather Wallet',
      price: 85000,
      rating: 4.4,
      reviews: 67,
      image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=400',
      category: 'fashion',
      inStock: false
    },
    {
      id: 7,
      name: 'Bluetooth Speaker',
      price: 280000,
      rating: 4.5,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400',
      category: 'electronics',
      inStock: true,
      isNew: true
    },
    {
      id: 8,
      name: 'Yoga Mat Premium',
      price: 95000,
      rating: 4.2,
      reviews: 78,
      image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400',
      category: 'sports',
      inStock: true
    },
  ];

  const categories = [
    { id: 'all', name: 'All Products', count: products.length },
    { id: 'electronics', name: 'Electronics', count: products.filter(p => p.category === 'electronics').length },
    { id: 'fashion', name: 'Fashion', count: products.filter(p => p.category === 'fashion').length },
    { id: 'home', name: 'Home & Living', count: products.filter(p => p.category === 'home').length },
    { id: 'sports', name: 'Sports', count: products.filter(p => p.category === 'sports').length },
  ];

  const filteredProducts = products.filter(product => {
    if (selectedCategory !== 'all' && product.category !== selectedCategory) return false;
    if (product.price < priceRange[0] || product.price > priceRange[1]) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Products</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
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
              productCount={filteredProducts.length}
              onToggleFilters={() => setShowFilters(!showFilters)}
            />

            {/* Products Grid */}
            <div className={viewMode === 'grid'
              ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
              : 'grid grid-cols-1 lg:grid-cols-2 gap-4'
            }>
              {filteredProducts.map(product => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex justify-center">
              <div className="flex gap-2">
                <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">Previous</button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">1</button>
                <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">2</button>
                <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">3</button>
                <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Products;