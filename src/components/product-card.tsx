import { Link } from 'react-router-dom';
import { Star, Heart, ShoppingCart } from 'lucide-react';
import { Button } from './ui/button';

interface ProductCardProps {
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

const ProductCard = ({
  id,
  name,
  price,
  originalPrice,
  rating,
  reviews,
  image,
  inStock,
  isNew,
  discount
}: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden group">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {discount && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
            -{discount}%
          </div>
        )}
        {isNew && (
          <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">
            NEW
          </div>
        )}
        {!inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold">
              Out of Stock
            </span>
          </div>
        )}
        <Button
          className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-red-50 transition opacity-0 group-hover:opacity-100"
          size="normal"
          variant="normal"
        >
          <Heart size={18} className="text-gray-700" />
        </Button>
      </div>

      <div className="p-4">
        <Link to={`/products/${id}`}>
          <h3 className="font-semibold text-gray-900 mb-2 hover:text-blue-600 transition">
            {name}
          </h3>
        </Link>
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={
                i < Math.floor(rating)
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'text-gray-300'
              }
            />
          ))}
          <span className="text-sm text-gray-600 ml-1">({reviews})</span>
        </div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xl font-bold text-blue-600">
            UGX {price.toLocaleString()}
          </span>
          {originalPrice && (
            <span className="text-gray-400 line-through text-sm">
              UGX {originalPrice.toLocaleString()}
            </span>
          )}
        </div>
        <div className="flex gap-2">
          <Link
            to={`/products/${id}`}
            className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition text-center text-sm font-medium"
          >
            View Details
          </Link>
          <Button
            variant="normal"
            size="normal"
            disabled={!inStock}
            className="bg-gray-900 text-white p-2 rounded-lg hover:bg-gray-800 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            <ShoppingCart size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
