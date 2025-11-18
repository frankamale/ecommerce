import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  ShoppingCart,
  Heart,
  User,
  Menu,
  X,

  ShoppingBag,
  Flame
} from 'lucide-react';
import { Button } from './ui/button';
import { categories } from '../data/products';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const cartItemCount = 3;

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50 ">


      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4 lg:px-10">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-gray-900">
            <ShoppingBag size={32} className="text-blue-600" />
            <span>Nvuma Shoppers</span>
          </Link>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button className="absolute right-0 top-0 bottom-0 px-6 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition h-full">
                <Search size={20} />
              </Button>
            </div>
          </div>

          {/* Navigation Icons */}
          <div className="flex items-center gap-6">
            {/* Wishlist */}
            <Link to="/wishlist" className="relative hover:text-blue-600 transition">
              <Heart size={24} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                2
              </span>
            </Link>

            {/* Cart */}
            <Link to="/cart" className="relative hover:text-blue-600 transition">
              <ShoppingCart size={24} />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>

            {/* User Account */}
            <Link to="/account" className="hidden md:flex items-center gap-2 hover:text-blue-600 transition">
              <User size={24} />
              <div className="text-sm">
                <div className="text-gray-500">Hello, User</div>
                <div className="font-semibold">Account</div>
              </div>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-2xl"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden mt-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button className="absolute right-2 top-2">
              <Search size={20} className="text-gray-500" />
            </Button>
          </div>
        </div>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex items-center justify-center gap-8 py-4 bg-gray-900 text-white w-full border-t border-gray-800">
        <Link to="/" className="hover:text-blue-400 font-medium transition">
          Home
        </Link>
        <Link to="/products" className="hover:text-blue-400 font-medium transition">
          All Products
        </Link>
        <div className="relative group">
          <Link to="/categories" className="hover:text-blue-400 font-medium transition">
            Categories ▾
          </Link>
          {/* Dropdown Menu - Added padding-top to bridge the gap */}
          <div className="absolute left-0 pt-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200">
            <div className="bg-white shadow-lg rounded-lg py-2 min-w-[200px]">
              {categories.map((category) => (
                <Link
                  key={category.slug}
                  to={`/categories/${category.slug}`}
                  className="block px-4 py-2 hover:bg-gray-100 text-gray-900"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <Link to="/deals" className="text-red-400 hover:text-red-300 font-medium transition flex items-center gap-1">
          <Flame size={18} /> Deals
        </Link>
        <Link to="/new-arrivals" className="hover:text-blue-400 font-medium transition">
          New Arrivals
        </Link>
        <Link to="/contact" className="hover:text-blue-400 font-medium transition">
          Contact
        </Link>
      </div>

      {/* Mobile Menu */}
      <div className="container mx-auto px-4">
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-200 space-y-3">
            <Link to="/" className="block text-gray-700 hover:text-blue-600 font-medium py-2">
              Home
            </Link>
            <Link to="/products" className="block text-gray-700 hover:text-blue-600 font-medium py-2">
              All Products
            </Link>
            <Link to="/categories" className="block text-gray-700 hover:text-blue-600 font-medium py-2">
              Categories
            </Link>
            <Link to="/deals" className=" text-red-600 hover:text-red-700 font-medium py-2 flex items-center gap-2">
              <Flame size={18} /> Deals
            </Link>
            <Link to="/new-arrivals" className="block text-gray-700 hover:text-blue-600 font-medium py-2">
              New Arrivals
            </Link>
            <Link to="/contact" className="block text-gray-700 hover:text-blue-600 font-medium py-2">
              Contact
            </Link>
            <Link to="/account" className=" text-gray-700 hover:text-blue-600 font-medium py-2 pt-3 border-t flex items-center gap-2">
              <User size={18} /> My Account
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;