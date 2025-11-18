import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface CategoryCardProps {
  name: string;
  image: string;
  link: string;
  productCount: number;
  description?: string;
}

const CategoryCard = ({
  name,
  image,
  link,
  productCount,
  description
}: CategoryCardProps) => {
  return (
    <Link
      to={link}
      className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      <div className="relative overflow-hidden h-48">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white font-bold text-2xl mb-1">{name}</h3>
          <p className="text-gray-200 text-sm">{productCount} Products</p>
        </div>
      </div>

      {description && (
        <div className="p-4">
          <p className="text-gray-600 text-sm mb-3">{description}</p>
          <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
            <span>Browse Category</span>
            <ChevronRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      )}
    </Link>
  );
};

export default CategoryCard;
