import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

const HeroSection = ({
  title,
  subtitle,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink
}: HeroSectionProps) => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white lg:ps-20">
      <div className="container mx-auto px-4 py-10 lg:py-20">
        <div className="max-w-3xl">
          <h1 className="text-xl md:text-2xl lg:text-5xl font-bold lg:mb-6">{title}</h1>
          <p className="text-sm lg:text-xl mb-8 text-blue-100">{subtitle}</p>
          {primaryButtonText && secondaryButtonText ? (
            <div className="flex gap-4 flex-wrap">
              <Link
                to={primaryButtonLink ?? '/'}
                className="bg-white text-blue-600 py-1 px-8 md:py-3 rounded-lg font-semibold hover:bg-gray-100 transition flex items-center gap-2"
              >
                {primaryButtonText} <ArrowRight size={20} />
              </Link>
              <Link
                to={secondaryButtonLink ?? '/'}
                className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
              >
                {secondaryButtonText}
              </Link>
            </div>
          ) : null
          }
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
