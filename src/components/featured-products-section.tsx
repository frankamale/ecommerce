import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp } from 'lucide-react';
import ProductCard from './product-card';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  inStock: boolean;
  isNew?: boolean;
  discount?: number;
}

interface FeaturedProductsSectionProps {
  products: Product[];
  title?: string;
  subtitle?: string;
}

const FeaturedProductsSection = ({
  products,
  title = 'Trending Products',
  subtitle = 'Check out our most popular items'
}: FeaturedProductsSectionProps) => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
              <TrendingUp className="text-blue-600" /> {title}
            </h2>
            <p className="text-gray-600 mt-2">{subtitle}</p>
          </div>
          <Link
            to="/products"
            className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1"
          >
            View All <ArrowRight size={18} />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;
