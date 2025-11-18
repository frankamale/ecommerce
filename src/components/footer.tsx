import { Link } from 'react-router-dom';
import {
  ShoppingBag,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Clock,
 
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <ShoppingBag size={32} className="text-blue-500" />
              <span className="text-2xl font-bold text-white">Nvuma Shoppers</span>
            </div>
            <p className="text-gray-400 mb-4">
              Uganda's trusted online marketplace for quality products at affordable prices. Shop from thousands of products delivered nationwide.
            </p>
            <div className="flex gap-4">
              <Link
                to="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition"
              >
                <Facebook size={20} />
              </Link>
              <Link
                to="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-blue-400 transition"
              >
                <Twitter size={20} />
              </Link>
              <Link
                to="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-pink-600 transition"
              >
                <Instagram size={20} />
              </Link>
              <Link
                to="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-blue-700 transition"
              >
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition">
                  Shop Products
                </Link>
              </li>
              <li>
                <Link to="/deals" className="hover:text-white transition">
                  Today's Deals
                </Link>
              </li>
              <li>
                <Link to="/categories" className="hover:text-white transition">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/new-arrivals" className="hover:text-white transition">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/track-order" className="hover:text-white transition">
                  Track Order
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/help" className="hover:text-white transition">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="hover:text-white transition">
                  Shipping Information
                </Link>
              </li>
              <li>
                <Link to="/returns" className="hover:text-white transition">
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-white transition">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin size={20} className="mt-1 flex-shrink-0 text-blue-500" />
                <span>
                  Plot 123, Kampala Road<br />
                  Kampala, Uganda
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={20} className="flex-shrink-0 text-blue-500" />
                <a href="tel:+256700123456" className="hover:text-white transition">
                  +256 700 123 456
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={20} className="flex-shrink-0 text-blue-500" />
                <a href="tel:+256750987654" className="hover:text-white transition">
                  +256 750 987 654
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={20} className="flex-shrink-0 text-blue-500" />
                <a href="mailto:support@nvumashoppers.ug" className="hover:text-white transition">
                  support@nvumashoppers.ug
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={20} className="mt-1 flex-shrink-0 text-blue-500" />
                <span>
                  Mon - Sat: 8:00 AM - 8:00 PM<br />
                  Sunday: 10:00 AM - 6:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment & Features */}
        
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; {currentYear} Nvuma Shoppers. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/privacy" className="hover:text-white transition">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white transition">
                Terms of Service
              </Link>
              <Link to="/cookies" className="hover:text-white transition">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
