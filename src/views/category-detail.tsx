import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import NavBar from '../components/nav-bar';
import Footer from '../components/footer';
import ProductCard from '../components/product-card';
import SidebarFilter from '../components/sidebar-filter';
import ProductToolbar from '../components/product-toolbar';

const CategoryDetail = () => {
  const { categorySlug } = useParams();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [selectedSubCategory, setSelectedSubCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 2000000]);
  const [showFilters, setShowFilters] = useState(true);

  // Category data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const categoryData: Record<string, any> = {
    electronics: {
      name: 'Electronics',
      description: 'Discover the latest gadgets, phones, laptops, and electronic accessories',
      image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1200',
      subCategories: [
        { id: 'phones', name: 'Mobile Phones', count: 45 },
        { id: 'laptops', name: 'Laptops & Computers', count: 32 },
        { id: 'audio', name: 'Audio & Headphones', count: 28 },
        { id: 'cameras', name: 'Cameras', count: 18 },
        { id: 'accessories', name: 'Accessories', count: 56 }
      ]
    },
    fashion: {
      name: 'Fashion',
      description: 'Trendy clothing, shoes, and accessories for men and women',
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200',
      subCategories: [
        { id: 'mens', name: "Men's Clothing", count: 124 },
        { id: 'womens', name: "Women's Clothing", count: 186 },
        { id: 'shoes', name: 'Shoes', count: 89 },
        { id: 'accessories', name: 'Accessories', count: 67 },
        { id: 'bags', name: 'Bags & Luggage', count: 45 }
      ]
    },
    home: {
      name: 'Home & Living',
      description: 'Furniture, decor, kitchen essentials, and home improvement items',
      image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=1200',
      subCategories: [
        { id: 'furniture', name: 'Furniture', count: 56 },
        { id: 'decor', name: 'Home Decor', count: 43 },
        { id: 'kitchen', name: 'Kitchen & Dining', count: 38 },
        { id: 'bedding', name: 'Bedding', count: 29 },
        { id: 'storage', name: 'Storage & Organization', count: 34 }
      ]
    },
    beauty: {
      name: 'Beauty & Health',
      description: 'Cosmetics, skincare, fragrances, and health products',
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200',
      subCategories: [
        { id: 'skincare', name: 'Skincare', count: 78 },
        { id: 'makeup', name: 'Makeup', count: 92 },
        { id: 'fragrances', name: 'Fragrances', count: 45 },
        { id: 'hair', name: 'Hair Care', count: 54 },
        { id: 'wellness', name: 'Health & Wellness', count: 67 }
      ]
    },
    sports: {
      name: 'Sports & Fitness',
      description: 'Exercise equipment, sportswear, and outdoor gear',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1200',
      subCategories: [
        { id: 'gym', name: 'Gym Equipment', count: 34 },
        { id: 'sportswear', name: 'Sportswear', count: 56 },
        { id: 'outdoor', name: 'Outdoor & Camping', count: 28 },
        { id: 'cycling', name: 'Cycling', count: 19 },
        { id: 'supplements', name: 'Supplements', count: 23 }
      ]
    }
  };

  const currentCategory = categoryData[categorySlug || 'electronics'] || categoryData.electronics;

  // Sample products
  const products = [
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
      id: 7,
      name: 'Yoga Mat Premium',
      price: 95000,
      rating: 4.2,
      reviews: 78,
      image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400',
      category: 'sports',
      inStock: true
    },
    {
      id: 8,
      name: 'Designer Sunglasses',
      price: 225000,
      rating: 4.6,
      reviews: 134,
      image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400',
      category: 'fashion',
      inStock: false
    },
  ];

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
              subCategories={currentCategory.subCategories}
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
