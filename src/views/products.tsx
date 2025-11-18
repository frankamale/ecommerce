import { Link } from 'react-router-dom';
import NavBar from '../components/nav-bar';
import Footer from '../components/footer';
import {
  Star,
  Filter,
  ChevronDown,
  Grid,
  List,
  Heart,
  ShoppingCart,
  SlidersHorizontal
} from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

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
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <Filter size={20} /> Filters
                </h2>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden"
                >
                  <ChevronDown size={20} />
                </button>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Categories</h3>
                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition ${selectedCategory === category.id
                          ? 'bg-blue-600 text-white'
                          : 'hover:bg-gray-100 text-gray-700'
                        }`}
                    >
                      <div className="flex justify-between items-center">
                        <span>{category.name}</span>
                        <span className="text-sm">({category.count})</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Price Range</h3>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="1000000"
                    step="50000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>UGX 0</span>
                    <span>UGX {priceRange[1].toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Rating Filter */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Rating</h3>
                <div className="space-y-2">
                  {[4, 3, 2, 1].map(rating => (
                    <button
                      key={rating}
                      className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 transition flex items-center gap-2"
                    >
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className={i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">& Up</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Availability</h3>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4" />
                  <span className="text-gray-700">In Stock Only</span>
                </label>
              </div>

              <button className="w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 transition">
                Reset Filters
              </button>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="bg-white rounded-lg shadow-md p-4 mb-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="lg:hidden flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50"
                  >
                    <SlidersHorizontal size={20} />
                    Filters
                  </button>
                  <p className="text-gray-600">
                    Showing <span className="font-semibold">{filteredProducts.length}</span> products
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  {/* Sort Dropdown */}
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                    <option value="newest">Newest</option>
                  </select>

                  {/* View Toggle */}
                  <div className="flex border rounded-lg overflow-hidden">
                    <Button
                      variant={"normal"}
                      size={"normal"}
                      onClick={() => setViewMode('grid')}
                      className={`p-2 ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                    >
                      <Grid size={20} />
                    </Button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                    >
                      <List size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className={viewMode === 'grid'
              ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
              : 'grid grid-cols-1 lg:grid-cols-2 gap-4'
            }>
              {filteredProducts.map(product => (
                <div
                  key={product.id}
                  className={`bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden group ${viewMode === 'list' ? 'flex' : ''
                    }`}
                >
                  <div className={`relative overflow-hidden ${viewMode === 'list' ? 'w-48' : ''}`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className={`w-full object-cover group-hover:scale-105 transition-transform duration-300 ${viewMode === 'list' ? 'h-full' : 'h-64'
                        }`}
                    />
                    {product.discount && (
                      <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                        -{product.discount}%
                      </div>
                    )}
                    {product.isNew && (
                      <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">
                        NEW
                      </div>
                    )}
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <span className="bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold">
                          Out of Stock
                        </span>
                      </div>
                    )}
                    <Button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-red-50 transition opacity-0 group-hover:opacity-100" 
                    size={"normal"}
                    variant={"normal"}
                    >
                      
                      <Heart size={18} className="text-gray-700" />
                    </Button>
                  </div>

                  <div className={`p-4 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                    <Link to={`/products/${product.id}`}>
                      <h3 className="font-semibold text-gray-900 mb-2 hover:text-blue-600 transition">
                        {product.name}
                      </h3>
                    </Link>
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                        />
                      ))}
                      <span className="text-sm text-gray-600 ml-1">({product.reviews})</span>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl font-bold text-blue-600">
                        UGX {product.price.toLocaleString()}
                      </span>
                      {product.originalPrice && (
                        <span className="text-gray-400 line-through text-sm">
                          UGX {product.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <Link
                        to={`/products/${product.id}`}
                        className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition text-center text-sm font-medium"
                      >
                        View Details
                      </Link>
                      <Button
                      variant={"normal"}
                      size={"normal"}
                        disabled={!product.inStock}
                        className="bg-gray-900 text-white p-2 rounded-lg hover:bg-gray-800 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
                      >
                        <ShoppingCart size={18} />
                      </Button>
                    </div>
                  </div>
                </div>
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