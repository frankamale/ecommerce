import { Link } from 'react-router-dom';
import NavBar from '../components/nav-bar';
import Footer from '../components/footer';
import {
  ShoppingBag,
  Truck,
  Shield,
  CreditCard,
  ArrowRight,
  Star,
  TrendingUp
} from 'lucide-react';

const GuestPage = () => {
  // Sample data - replace with actual data from your backend
  const featuredCategories = [
    { name: 'Electronics', image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400', link: '/categories/electronics' },
    { name: 'Fashion', image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400', link: '/categories/fashion' },
    { name: 'Home & Living', image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400', link: '/categories/home' },
    { name: 'Beauty', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400', link: '/categories/beauty' },
  ];

  const featuredProducts = [
    { id: 1, name: 'Wireless Headphones', price: 320000, rating: 4.5, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400' },
    { id: 2, name: 'Smart Watch', price: 750000, rating: 4.8, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400' },
    { id: 3, name: 'Laptop Bag', price: 185000, rating: 4.3, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400' },
    { id: 4, name: 'Coffee Maker', price: 295000, rating: 4.6, image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400' },
  ];

  const benefits = [
    { icon: Truck, title: 'Free Delivery', description: 'On orders over UGX 200,000' },
    { icon: Shield, title: 'Secure Payment', description: 'Mobile Money & Card accepted' },
    { icon: CreditCard, title: 'Easy Returns', description: '30-day return policy' },
    { icon: ShoppingBag, title: 'Quality Products', description: 'Verified sellers only' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white ps-20">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Shop Quality Products at the Best Prices in Uganda
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Browse thousands of products across multiple categories. Fast delivery to Kampala, Entebbe, Mbarara, and nationwide.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link
                to="/register"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition flex items-center gap-2"
              >
                Get Started <ArrowRight size={20} />
              </Link>
              <Link
                to="/products"
                className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
              >
                Browse Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:px-20">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <benefit.icon className="text-blue-600" size={32} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Shop by Category</h2>
            <Link to="/categories" className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
              View All <ArrowRight size={18} />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 ">
            {featuredCategories.map((category, index) => (
              <Link
                key={index}
                to={category.link}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-square">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <h3 className="text-white font-semibold text-xl p-4 w-full">
                      {category.name}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
                <TrendingUp className="text-blue-600" /> Trending Products
              </h2>
              <p className="text-gray-600 mt-2">Check out our most popular items</p>
            </div>
            <Link to="/products" className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
              View All <ArrowRight size={18} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                    HOT
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                      />
                    ))}
                    <span className="text-sm text-gray-600 ml-1">({product.rating})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-blue-600">
                      UGX {product.price.toLocaleString()}
                    </span>
                    <Link
                      to={`/products/${product.id}`}
                      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-sm font-medium"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Shopping?</h2>
          <p className="text-xl mb-8 text-purple-100">
            Join thousands of Ugandan shoppers and get exclusive deals delivered to your doorstep
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              to="/register"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Create Account
            </Link>
            <Link
              to="/login"
              className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition"
            >
              Sign In
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-blue-950 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated with Latest Deals</h2>
            <p className="text-gray-400 mb-6">
              Subscribe to our newsletter and get exclusive deals, flash sales, and new arrivals sent straight to your inbox!
            </p>
            <form className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GuestPage;