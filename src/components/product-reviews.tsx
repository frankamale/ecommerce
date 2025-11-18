import { Star } from 'lucide-react';

interface Review {
  id: number;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

interface ProductReviewsProps {
  reviews: Review[];
  averageRating: number;
  totalReviews: number;
}

const ProductReviews = ({ reviews, averageRating, totalReviews }: ProductReviewsProps) => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-gray-900">Customer Reviews</h2>

      {/* Rating Summary */}
      <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6">

          {/* Average Rating */}
          <div className="flex flex-col items-center md:items-start">
            <span className="text-5xl font-bold text-gray-900 leading-none">
              {averageRating.toFixed(1)}
            </span>

            {/* Stars */}
            <div className="flex items-center gap-1 mt-2">
              {[...Array(5)].map((_, i) => {
                const filled = i < Math.floor(averageRating);
                const half =
                  !filled &&
                  i < averageRating &&
                  averageRating % 1 !== 0;

                return (
                  <Star
                    key={i}
                    size={24}
                    className={
                      filled
                        ? 'fill-yellow-400 text-yellow-400'
                        : half
                        ? 'text-yellow-400'
                        : 'text-gray-300'
                    }
                  />
                );
              })}
            </div>

            <p className="text-gray-600 mt-2 text-sm">
              Based on {totalReviews} review{totalReviews !== 1 && 's'}
            </p>
          </div>

        </div>
      </div>

      {/* Individual Reviews */}
      <div className="space-y-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="border-b border-gray-200 pb-6 last:border-none"
          >
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-semibold text-gray-900">
                  {review.userName}
                </h4>

                <div className="flex items-center gap-3 mt-1">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={
                          i < Math.floor(review.rating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500">{review.date}</span>
                </div>
              </div>
            </div>

            <p className="text-gray-700 mt-2">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductReviews;
