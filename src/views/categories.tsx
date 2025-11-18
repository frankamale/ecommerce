import { Link } from 'react-router-dom';
import NavBar from '../components/nav-bar';
import Footer from '../components/footer';
import CategoryCard from '../components/category-card';
import ProductCard from '../components/product-card';
import { ArrowRight } from 'lucide-react';

const Categories = () => {
  const categories = [
    {
      name: 'Electronics',
      image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600',
      link: '/categories/electronics',
      productCount: 245,
      description: 'Discover the latest gadgets, phones, laptops, and electronic accessories'
    },
    {
      name: 'Fashion',
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=600',
      link: '/categories/fashion',
      productCount: 532,
      description: 'Trendy clothing, shoes, and accessories for men and women'
    },
    {
      name: 'Home & Living',
      image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600',
      link: '/categories/home',
      productCount: 178,
      description: 'Furniture, decor, kitchen essentials, and home improvement items'
    },
    {
      name: 'Beauty & Health',
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600',
      link: '/categories/beauty',
      productCount: 324,
      description: 'Cosmetics, skincare, fragrances, and health products'
    },
    {
      name: 'Sports & Fitness',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600',
      link: '/categories/sports',
      productCount: 156,
      description: 'Exercise equipment, sportswear, and outdoor gear'
    },
    {
      name: 'Books & Stationery',
      image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600',
      link: '/categories/books',
      productCount: 289,
      description: 'Books, office supplies, and educational materials'
    },
    {
      name: 'Toys & Games',
      image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=600',
      link: '/categories/toys',
      productCount: 198,
      description: 'Fun and educational toys for kids of all ages'
    },
    {
      name: 'Automotive',
      image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600',
      link: '/categories/automotive',
      productCount: 142,
      description: 'Car accessories, parts, and maintenance products'
    },
  ];

  const featuredProducts = [
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
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Categories</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Shop by Category</h1>
          <p className="text-xl text-blue-100">
            Browse through our wide range of product categories
          </p>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              name={category.name}
              image={category.image}
              link={category.link}
              productCount={category.productCount}
              description={category.description}
            />
          ))}
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
              <p className="text-gray-600 mt-2">Popular items across all categories</p>
            </div>
            <Link
              to="/products"
              className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1"
            >
              View All <ArrowRight size={18} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Categories;
