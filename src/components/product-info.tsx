import { Star, Heart, Share2, ShoppingCart, Truck, Shield } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

interface ProductInfoProps {
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  inStock: boolean;
  description: string;
  category: string;
  brand?: string;
}

const ProductInfo = ({
  name,
  price,
  originalPrice,
  rating,
  reviews,
  inStock,
  description,
  category,
  brand
}: ProductInfoProps) => {
  const [quantity, setQuantity] = useState(1);
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <div className="space-y-6">
      {/* Category and Brand */}
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <span className="capitalize">{category}</span>
        {brand && (
          <>
            <span>•</span>
            <span>{brand}</span>
          </>
        )}
      </div>

      {/* Product Name */}
      <h1 className="text-3xl font-bold text-gray-900">{name}</h1>

      {/* Rating and Reviews */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={20}
              className={
                i < Math.floor(rating)
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'text-gray-300'
              }
            />
          ))}
        </div>
        <span className="text-gray-600">
          {rating} ({reviews} reviews)
        </span>
      </div>

      {/* Price */}
      <div className="flex items-center gap-4">
        <span className="text-xl md:text-4xl font-bold text-blue-600">
          UGX {price.toLocaleString()}
        </span>
        {originalPrice && (
          <>
            <span className="text-sm md:text-2xl text-gray-400 line-through">
              UGX {originalPrice.toLocaleString()}
            </span>
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Save {discount}%
            </span>
          </>
        )}
      </div>

      {/* Stock Status */}
      <div>
        {inStock ? (
          <span className="text-green-600 font-semibold flex items-center gap-2">
            <span className="w-2 h-2 bg-green-600 rounded-full"></span>
            In Stock
          </span>
        ) : (
          <span className="text-red-600 font-semibold flex items-center gap-2">
            <span className="w-2 h-2 bg-red-600 rounded-full"></span>
            Out of Stock
          </span>
        )}
      </div>

      {/* Description */}
      <div className="border-t pt-6">
        <h3 className="font-semibold text-gray-900 mb-2">Description</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>

      {/* Quantity and Actions */}
      <div className="border-t pt-6 space-y-4">
        <div className="flex items-center gap-4">
          <label className="font-semibold text-gray-900">Quantity:</label>
          <div className="flex items-center border rounded-lg">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-4 py-2 hover:bg-gray-100 transition"
            >
              -
            </button>
            <span className="px-6 py-2 border-x">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-4 py-2 hover:bg-gray-100 transition"
            >
              +
            </button>
          </div>
        </div>

        <div className="flex gap-3">
          <Button
            disabled={!inStock}
            className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <ShoppingCart size={20} />
            Add to Cart
          </Button>
          <Button
            variant="normal"
            className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition flex items-center gap-2"
          >
            <Heart size={20} />
          </Button>
          <Button
            variant="normal"
            className="border-2 border-gray-300 text-gray-600 px-6 py-3 rounded-lg hover:bg-gray-50 transition flex items-center gap-2"
          >
            <Share2 size={20} />
          </Button>
        </div>
      </div>

      {/* Benefits */}
      <div className="border-t pt-6 space-y-3">
        <div className="flex items-center gap-3 text-gray-700">
          <Truck className="text-blue-600" size={20} />
          <span>Free delivery on orders over UGX 200,000</span>
        </div>
        <div className="flex items-center gap-3 text-gray-700">
          <Shield className="text-blue-600" size={20} />
          <span>30-day return policy</span>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
