import NavBar from '../components/nav-bar';
import Footer from '../components/footer';
import HeroSection from '../components/hero-section';
import BenefitsSection from '../components/benefits-section';
import FeaturedCategoriesSection from '../components/featured-categories-section';
import FeaturedProductsSection from '../components/featured-products-section';
import CTASection from '../components/cta-section';
import NewsletterSection from '../components/newsletter-section';
import { ShoppingBag, Truck, Shield, CreditCard } from 'lucide-react';
import { getFeaturedProducts, categories as allCategories } from '../data/products';

const GuestPage = () => {
  // Get featured categories from data file (first 4)
  const featuredCategories = allCategories.slice(0, 4).map(cat => ({
    name: cat.name,
    image: cat.image,
    link: `/categories/${cat.slug}`
  }));

  // Get featured products from data file and map to component format
  const featuredProducts = getFeaturedProducts().slice(0, 4).map(p => ({
    id: p.id,
    name: p.name,
    price: p.price,
    originalPrice: p.originalPrice,
    rating: p.rating,
    reviews: p.reviews,
    image: p.images[0],
    inStock: p.inStock,
    isNew: p.isNew,
    discount: p.discount
  }));

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