import { useState } from 'react';
import { submitToN8n } from '../lib/webhookSubmit';
import { Building, User, Mail, Phone, MessageSquare, Send, X } from 'lucide-react';

interface FormProps {
  onClose: () => void;
}

export const CorporatePartnershipForm = ({ onClose }: FormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    // 1. Prevent the page from reloading
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);

    // 2. Call our webhook function
    // This is where you pass the formName and the data
    const result = await submitToN8n(
      "Corporate Partnership Form", // <-- The formName you requested FormData
      FormData
    );

    // 3. Handle the response
    if (result.success) {
      setSubmitted(true); // Show the "Thank You" message
    } else {
      setSubmitError(true); // Show an error
    }

    setIsSubmitting(false);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-8 md:p-12">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-200"
        >
          <X className="w-6 h-6" />
        </button>

        {submitted ? (
          <div className="text-center py-12">
            <Send className="w-16 h-16 text-emerald-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Thank You for Reaching Out!</h2>
            <p className="text-lg text-gray-600">
              A member of our partnerships team will be in touch with you shortly to discuss this opportunity.
            </p>
          </div>
        ) : (
          <div>
            <div className="text-center mb-8">
              <Building className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg p-3 text-white mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900">Partner With Us</h2>
              <p className="text-lg text-gray-600 mt-2">
                Let's align your CSR and sustainability goals with our on-the-ground impact.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">Company Name</label>
                <div className="relative mt-1">
                  <input
                    type="text"
                    id="companyName"
                    required
                    className="w-full pl-10 pr-4 py-2 bg-gray-50 text-gray-900 rounded-lg border border-gray-300 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Your Company Inc."
                  />
                  <Building className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                </div>
              </div>

              <div>
                <label htmlFor="contactName" className="block text-sm font-medium text-gray-700">Full Name</label>
                <div className="relative mt-1">
                  <input
                    type="text"
                    id="contactName"
                    required
                    className="w-full pl-10 pr-4 py-2 bg-gray-50 text-gray-900 rounded-lg border border-gray-300 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="John Doe"
                  />
                  <User className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Work Email</label>
                <div className="relative mt-1">
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full pl-10 pr-4 py-2 bg-gray-50 text-gray-900 rounded-lg border border-gray-300 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="you@company.com"
                  />
                  <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <div className="relative mt-1">
                  <input
                    type="tel"
                    id="phone"
                    className="w-full pl-10 pr-4 py-2 bg-gray-50 text-gray-900 rounded-lg border border-gray-300 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="+91 98..."
                  />
                  <Phone className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
                <div className="relative mt-1">
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full pl-10 pr-4 py-2 bg-gray-50 text-gray-900 rounded-lg border border-gray-300 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Tell us about your sustainability goals or partnership ideas..."
                  />
                  <MessageSquare className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
                </div>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 transition-colors"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};