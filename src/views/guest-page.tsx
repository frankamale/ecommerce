import NavBar from '../components/nav-bar';
import Footer from '../components/footer';
import HeroSection from '../components/hero-section';
import BenefitsSection from '../components/benefits-section';
import FeaturedCategoriesSection from '../components/featured-categories-section';
import FeaturedProductsSection from '../components/featured-products-section';
import CTASection from '../components/cta-section';
import NewsletterSection from '../components/newsletter-section';
import { ShoppingBag, Truck, Shield, CreditCard } from 'lucide-react';

const GuestPage = () => {
  const featuredCategories = [
    { name: 'Electronics', image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400', link: '/categories/electronics' },
    { name: 'Fashion', image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400', link: '/categories/fashion' },
    { name: 'Home & Living', image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400', link: '/categories/home' },
    { name: 'Beauty', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400', link: '/categories/beauty' },
  ];

  const featuredProducts = [
    { id: 1, name: 'Wireless Headphones', price: 320000, rating: 4.5, reviews: 128, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400', inStock: true, discount: 29 },
    { id: 2, name: 'Smart Watch', price: 750000, rating: 4.8, reviews: 256, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400', inStock: true, isNew: true },
    { id: 3, name: 'Laptop Bag', price: 185000, rating: 4.3, reviews: 89, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400', inStock: true, originalPrice: 220000, discount: 16 },
    { id: 4, name: 'Coffee Maker', price: 295000, rating: 4.6, reviews: 142, image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400', inStock: true },
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

      <HeroSection
        title="Shop Quality Products at the Best Prices in Uganda"
        subtitle="Browse thousands of products across multiple categories. Fast delivery to Kampala, Entebbe, Mbarara, and nationwide."
        primaryButtonText="Get Started"
        primaryButtonLink="/register"
        secondaryButtonText="Browse Products"
        secondaryButtonLink="/products"
      />

      <BenefitsSection benefits={benefits} />

      <FeaturedCategoriesSection categories={featuredCategories} />

      <FeaturedProductsSection products={featuredProducts} />

      <CTASection
        title="Ready to Start Shopping?"
        subtitle="Join thousands of Ugandan shoppers and get exclusive deals delivered to your doorstep"
        primaryButtonText="Create Account"
        primaryButtonLink="/register"
        secondaryButtonText="Sign In"
        secondaryButtonLink="/login"
      />

      <NewsletterSection />

      <Footer />
    </div>
  );
};

export default GuestPage;