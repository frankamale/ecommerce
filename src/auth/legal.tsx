import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
// import NavBar from '../components/nav-bar';
import Footer from '../components/footer';
import { Shield, FileText, ScrollText } from 'lucide-react';

const Legal = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* <NavBar /> */}

      {/* Breadcrumb */}
      <div className="bg-white border-b px-4 md:px-10 lg:px-20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Legal</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12 px-4 md:px-10 lg:px-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Shield size={40} />
            <h1 className="text-4xl font-bold">Legal Information</h1>
          </div>
          <p className="text-xl text-blue-100">
            Our Terms and Conditions & Privacy Policy
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12  md:px-10 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h3 className="font-bold text-lg mb-4 text-gray-900">Quick Navigation</h3>
              <nav className="space-y-2">
                <a
                  href="#terms"
                  className="flex items-center gap-2 text-gray-700 hover:text-blue-600 py-2 px-3 rounded hover:bg-blue-50 transition"
                >
                  <FileText size={18} />
                  Terms & Conditions
                </a>
                <a
                  href="#privacy"
                  className="flex items-center gap-2 text-gray-700 hover:text-blue-600 py-2 px-3 rounded hover:bg-blue-50 transition"
                >
                  <ScrollText size={18} />
                  Privacy Policy
                </a>
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12">
            {/* Terms and Conditions */}
            <section id="terms" className="bg-white rounded-lg shadow-md p-8 scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <FileText size={32} className="text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">Terms and Conditions</h2>
              </div>

              <div className="prose max-w-none space-y-6 text-gray-700">
                <p className="text-sm text-gray-500">Last updated: November 18, 2025</p>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Acceptance of Terms</h3>
                  <p>
                    By accessing and using Nvuma Shoppers' website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Use of Service</h3>
                  <p>
                    You must be at least 18 years old to use this service. You agree to use the service only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the website.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Product Information</h3>
                  <p>
                    We strive to provide accurate product descriptions and pricing information. However, we do not warrant that product descriptions, pricing, or other content is accurate, complete, reliable, current, or error-free. If a product offered by Nvuma Shoppers is not as described, your sole remedy is to return it in unused condition.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">4. Pricing and Payment</h3>
                  <p>
                    All prices are listed in Ugandan Shillings (UGX) and are subject to change without notice. We accept payment through MTN Mobile Money, Airtel Money, Visa, Mastercard, and cash on delivery. Payment must be received before shipment of products.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">5. Shipping and Delivery</h3>
                  <p>
                    We deliver to all regions of Uganda. Delivery times vary depending on location:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Kampala and Entebbe: 1-2 business days</li>
                    <li>Other major cities: 2-3 business days</li>
                    <li>Remote areas: 3-5 business days</li>
                  </ul>
                  <p className="mt-3">
                    Free delivery is available for orders over UGX 200,000 within Kampala.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">6. Returns and Refunds</h3>
                  <p>
                    We offer a 30-day return policy for most items. Products must be returned in their original condition with all tags and packaging intact. Refunds will be processed within 7-10 business days after receiving the returned item.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">7. Warranty</h3>
                  <p>
                    All electronics and appliances come with manufacturer warranty. The warranty period varies by product and is clearly stated on each product page. Warranty claims must be made directly with the manufacturer.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">8. Limitation of Liability</h3>
                  <p>
                    Nvuma Shoppers shall not be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">9. Changes to Terms</h3>
                  <p>
                    We reserve the right to modify these terms at any time. Your continued use of the service after any such changes constitutes your acceptance of the new Terms and Conditions.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">10. Contact Information</h3>
                  <p>
                    If you have any questions about these Terms and Conditions, please contact us at:
                  </p>
                  <ul className="list-none space-y-1 mt-2">
                    <li>Email: support@nvumashoppers.ug</li>
                    <li>Phone: +256 700 123 456</li>
                    <li>Address: Nvuma Shoppers, Kitooro Road, Entebbe, Uganda</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Privacy Policy */}
            <section id="privacy" className="bg-white rounded-lg shadow-md p-8 scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <ScrollText size={32} className="text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">Privacy Policy</h2>
              </div>

              <div className="prose max-w-none space-y-6 text-gray-700">
                <p className="text-sm text-gray-500">Last updated: November 18, 2025</p>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Information We Collect</h3>
                  <p>
                    We collect information you provide directly to us, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Personal information (name, email address, phone number, shipping address)</li>
                    <li>Payment information (processed securely through our payment partners)</li>
                    <li>Account credentials (username and password)</li>
                    <li>Purchase history and preferences</li>
                    <li>Communications with our customer service team</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">2. How We Use Your Information</h3>
                  <p>
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Process and fulfill your orders</li>
                    <li>Send order confirmations and shipping updates</li>
                    <li>Provide customer support</li>
                    <li>Send promotional emails (you can opt-out anytime)</li>
                    <li>Improve our services and user experience</li>
                    <li>Detect and prevent fraud</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Information Sharing</h3>
                  <p>
                    We do not sell or rent your personal information to third parties. We may share your information with:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Delivery partners to ship your orders</li>
                    <li>Payment processors to handle transactions</li>
                    <li>Service providers who help us operate our business</li>
                    <li>Law enforcement when required by law</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">4. Data Security</h3>
                  <p>
                    We implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing, accidental loss, destruction, or damage. All payment transactions are encrypted using SSL technology.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">5. Cookies</h3>
                  <p>
                    We use cookies and similar tracking technologies to track activity on our service and hold certain information. Cookies help us improve your browsing experience and analyze site traffic. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">6. Your Rights</h3>
                  <p>
                    You have the right to:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Access your personal information</li>
                    <li>Correct inaccurate or incomplete information</li>
                    <li>Request deletion of your information</li>
                    <li>Object to processing of your information</li>
                    <li>Withdraw consent at any time</li>
                    <li>Opt-out of marketing communications</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">7. Children's Privacy</h3>
                  <p>
                    Our service is not intended for children under 18 years of age. We do not knowingly collect personal information from children under 18. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">8. Changes to Privacy Policy</h3>
                  <p>
                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">9. Contact Us</h3>
                  <p>
                    If you have any questions about this Privacy Policy, please contact us:
                  </p>
                  <ul className="list-none space-y-1 mt-2">
                    <li>Email: privacy@nvumashoppers.ug</li>
                    <li>Phone: +256 700 123 456</li>
                    <li>Address: Nvuma Shoppers, Kitooro Road, Entebbe, Uganda</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Legal;
