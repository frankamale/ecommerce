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

interface RelatedProductsSectionProps {
  products: Product[];
  title?: string;
}

const RelatedProductsSection = ({
  products,
  title = 'Related Products'
}: RelatedProductsSectionProps) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProductsSection;
