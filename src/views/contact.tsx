import { Link } from 'react-router-dom';
import NavBar from '../components/nav-bar';
import Footer from '../components/footer';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useForm } from 'react-hook-form';
import { Form } from '@/components/ui/form';
import FormItemInput from '@/components/form/form-item-input';
import FormItemTextarea from '@/components/form/form-item-textarea';
import FormItemSelect from '@/components/form/form-item-select';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const form = useForm<ContactFormData>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    }
  });

  // Store location coordinates
  const latitude = 0.055741418955792356;
  const longitude = 32.461984663046856;
  const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;

  const onSubmit = (data: ContactFormData) => {
    // Handle form submission
    console.log('Form submitted:', data);
    // Here you can add API call to send the contact form data
    // After successful submission, you can show a success message or reset the form
    form.reset();
  };



  const contactInfo = [
    {
      icon: MapPin,
      title: 'Our Location',
      details: ['Plot 123, Kampala Road', 'Kampala, Uganda'],
      color: 'text-blue-600'
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: ['+256 700 123 456', '+256 750 987 654'],
      color: 'text-green-600'
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: ['support@nvumashoppers.ug', 'info@nvumashoppers.ug'],
      color: 'text-red-600'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Mon - Fri: 8:00 AM - 6:00 PM', 'Sat - Sun: 9:00 AM - 4:00 PM'],
      color: 'text-purple-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />

      {/* Breadcrumb */}
      <div className="bg-white border-b px-4 md:px-10 lg:px-20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Contact Us</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12 px-4 md:px-10 lg:px-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-blue-100">
            We're here to help! Reach out to us with any questions or concerns.
          </p>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="container mx-auto py-12 px-4 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-50 ${info.color} mb-4`}>
                  <Icon size={32} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 text-sm">
                    {detail}
                  </p>
                ))}
              </div>
            );
          })}
        </div>

        {/* Contact Form & Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormItemInput
                  form={form}
                  label='Full Name'
                  type='text'
                  placeholder='Enter full name'
                  name='name'
                />
                <FormItemInput
                  form={form}
                  label='Email'
                  type='email'
                  placeholder='Enter Email address'
                  name='email'
                />
                <FormItemInput
                  form={form}
                  label='Phone Number'
                  type='tel'
                  placeholder='Enter Phone Number'
                  name='phone'
                />
                <FormItemSelect
                  form={form}
                  options={
                    [
                      { value: "inquiry", label: "General Inquiry" },
                      { value: "order_issue", label: "Order Issue" },
                      { value: "question", label: "Product Question" },
                      { value: "delivery", label: "Delivery Inquiry" },
                      { value: "return", label: "Return/Refund" },
                      { value: "other", label: "Other" },
                    ]
                  }
                  label='Subject'
                  placeholder='Select a subject'
                  name='subject'
                  
                />

                <FormItemTextarea
                  form={form}
                  label='Message'
                  name='message'
                  placeholder='Tell us how we can help you...'
                />

                <Button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Send Message
                </Button>
              </form>
            </Form>
          </div>

          {/* Map & Additional Info */}
          <div className="space-y-6">
            {/* Google Maps */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <iframe
                src={`https://www.google.com/maps?q=${latitude},${longitude}&output=embed`}
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Nvuma Shoppers Location"
              />
              <div className="p-4 bg-gray-50 border-t">
                <p className="text-sm text-gray-700 mb-2 flex items-center gap-2">
                  <MapPin size={16} className="text-blue-600" />
                  Plot 123, Kampala Road, Kampala, Uganda
                </p>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium inline-flex items-center gap-1"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">What are your delivery areas?</h4>
                  <p className="text-sm text-gray-600">
                    We deliver nationwide across Uganda, including Kampala, Entebbe, Mbarara, Gulu, and other major cities.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">What payment methods do you accept?</h4>
                  <p className="text-sm text-gray-600">
                    We accept MTN Mobile Money, Airtel Money, Visa, Mastercard, and cash on delivery.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">How long does delivery take?</h4>
                  <p className="text-sm text-gray-600">
                    Delivery within Kampala takes 1-2 days. Other regions may take 3-5 business days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
