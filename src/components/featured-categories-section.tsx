import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface Category {
  name: string;
  image: string;
  link: string;
}

interface FeaturedCategoriesSectionProps {
  categories: Category[];
}

const FeaturedCategoriesSection = ({ categories }: FeaturedCategoriesSectionProps) => {
  return (
    <section className="py-16 lg:px-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Shop by Category</h2>
          <Link
            to="/categories"
            className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1"
          >
            View All <ArrowRight size={18} />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
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
  );
};

export default FeaturedCategoriesSection;
