import { useState } from 'react';
import { X, TreeDeciduous, User, Mail, Send } from 'lucide-react';

interface ModalProps {
  onClose: () => void;
}

export const TreeAdoptionModal = ({ onClose }: ModalProps) => {
  const [selectedPackage, setSelectedPackage] = useState('tree-2500');
  const [submitted, setSubmitted] = useState(false);

  const packages = [
    { id: 'sapling-500', name: 'Sponsor a Sapling', price: '₹500', description: 'Funds one sapling and its initial care.' },
    { id: 'tree-2500', name: 'Adopt a Tree', price: '₹2,500', description: 'Funds a tree, its planting, and 3 years of maintenance.' },
    { id: 'grove-5000', name: 'Fund a Grove', price: '₹5,000', description: 'Funds a small cluster of 10 trees, creating a mini-ecosystem.' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send to an API)
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto p-8 md:p-12">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-200"
        >
          <X className="w-6 h-6" />
        </button>

        {submitted ? (
          <div className="text-center py-12">
            <Send className="w-16 h-16 text-emerald-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Thank You for Your Support!</h2>
            <p className="text-lg text-gray-600 max-w-lg mx-auto">
              Please complete your payment using the QR code. Don't forget to mention your email in the payment notes so we can send your digital adoption certificate!
            </p>
          </div>
        ) : (
          <div>
            <div className="text-center mb-8">
              <TreeDeciduous className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-3 text-white mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900">Adopt a Tree</h2>
              <p className="text-lg text-gray-600 mt-2">Sponsor a tree and watch your tangible impact grow for years to come.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Form & Packages */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">1. Select Your Package</h3>
                <div className="space-y-3">
                  {packages.map((pkg) => (
                    <label
                      key={pkg.id}
                      className={`flex items-center p-4 border rounded-lg cursor-pointer ${
                        selectedPackage === pkg.id ? 'border-emerald-600 bg-emerald-50' : 'border-gray-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="package"
                        value={pkg.id}
                        checked={selectedPackage === pkg.id}
                        onChange={() => setSelectedPackage(pkg.id)}
                        className="w-5 h-5 text-emerald-600 focus:ring-emerald-500"
                      />
                      <div className="ml-4">
                        <span className="font-bold text-gray-900">{pkg.name} - {pkg.price}</span>
                        <p className="text-sm text-gray-600">{pkg.description}</p>
                      </div>
                    </label>
                  ))}
                </div>

                <h3 className="text-xl font-semibold text-gray-800 pt-4">2. Your Details</h3>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                  <div className="relative mt-1">
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full pl-10 pr-4 py-2 bg-gray-50 text-gray-900 rounded-lg border border-gray-300 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="John Doe"
                    />
                    <User className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <div className="relative mt-1">
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full pl-10 pr-4 py-2 bg-gray-50 text-gray-900 rounded-lg border border-gray-300 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="you@example.com"
                    />
                    <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 transition-colors"
                >
                  Proceed to Payment
                </button>
              </form>

              {/* Payment Section */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">3. Complete Payment</h3>
                <div className="text-center">
                  <p className="text-gray-600 mb-3">Scan the QR code to pay with any UPI app.</p>
                  <div className="w-full max-w-[250px] mx-auto p-4 bg-white rounded-lg border">
                    {/* --- IMPORTANT: Replace this with your actual QR code image --- */}
                    <img
                      src="https://placehold.co/300x300/ffffff/000000?text=Your+UPI+QR+Code"
                      alt="UPI QR Code"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="font-bold text-red-600 mt-4 text-sm">
                    IMPORTANT: Please mention your email address in the UPI payment notes to receive your adoption certificate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};