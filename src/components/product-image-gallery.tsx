import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface ProductImageGalleryProps {
  images: string[];
  productName: string;
}

const ProductImageGallery = ({
  images,
  productName,
}: ProductImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(0);

  const handleSelectImageSlider = (num: number) => {
    setSelectedImage((prev) => {
      if (prev <= 0 && num < 0) return 0;
      if (prev >= images.length - 1 && num > 0) return images.length - 1;

      return prev + num;
    });
  };

  return (
    <div className="space-y-4 h-fit">
      <div className="sm:w-[clamp(12.5rem,5.6338rem+21.9718vw,32rem)] w-full">
        {/* Main Image */}
        <div className="relative sm:w-[clamp(12.5rem,5.6338rem+21.9718vw,32rem)] w-full aspect-square rounded-lg overflow-hidden bg-gray-100">
          <img
            loading="lazy"
            src={images[selectedImage]}
            alt={`${productName} - Image ${selectedImage + 1}`}
            className="w-full h-full object-cover"
          />
          <button
            className={cn(
              "absolute top-1/2 -translate-y-1/2 left-3",
              "h-10 w-10 flex items-center justify-center",
              "rounded-full bg-black/40 backdrop-blur-sm border border-white/30",
              "text-white shadow-lg transition-all",
              "hover:bg-black/60 hover:scale-105 active:scale-95",
              selectedImage === 0 &&
                "opacity-50 cursor-not-allowed hover:scale-100 hover:bg-black/40"
            )}
            onClick={() => handleSelectImageSlider(-1)}
            disabled={selectedImage === 0}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            className={cn(
              "absolute top-1/2 -translate-y-1/2 right-3",
              "h-10 w-10 flex items-center justify-center",
              "rounded-full bg-black/40 backdrop-blur-sm border border-white/30",
              "text-white shadow-lg transition-all",
              "hover:bg-black/60 hover:scale-105 active:scale-95",
              selectedImage === images.length - 1 &&
                "opacity-50 cursor-not-allowed hover:scale-100 hover:bg-black/40"
            )}
            onClick={() => handleSelectImageSlider(1)}
            disabled={selectedImage === images.length - 1}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Thumbnail Images */}
        <div className="flex items-center relative max-w-[32rem] overflow-x-scroll mt-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`min-w-[5rem] max-w-[6rem] w-full aspect-square rounded-lg overflow-hidden border-2 transition ${
                selectedImage === index
                  ? "border-blue-600"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <img
                src={image}
                alt={`${productName} thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductImageGallery;
