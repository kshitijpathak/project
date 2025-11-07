import { useState } from 'react';
import { X, Heart, User, Mail, Phone, Sparkles, MapPin, MessageSquare, Send } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface VolunteerFormProps {
  onClose: () => void;
}

export function VolunteerForm({ onClose }: VolunteerFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    skills: '',
    location: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);

    try {
      const { error } = await supabase
        .from('volunteers')
        .insert([formData]);

      if (error) throw error;

      setSubmitted(true);
      // We'll let the "Thank You" screen stay until the user closes it
      // setTimeout(() => {
      //   onClose();
      // }, 2000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Thank You for Volunteering!</h2>
            <p className="text-lg text-gray-600">
              We're excited to have you. Our team will review your application and be in touch soon.
            </p>
          </div>
        ) : (
          <div>
            <div className="text-center mb-8">
              <Heart className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg p-3 text-white mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900">Become a Volunteer</h2>
              <p className="text-lg text-gray-600 mt-2">
                Get your hands dirty and make a direct impact. Join our community!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name *
                </label>
                <div className="relative mt-1">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 bg-gray-50 text-gray-900 rounded-lg border border-gray-300 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="John Doe"
                  />
                  <User className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address *
                </label>
                <div className="relative mt-1">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 bg-gray-50 text-gray-900 rounded-lg border border-gray-300 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="john@example.com"
                  />
                  <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number *
                </label>
                <div className="relative mt-1">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 bg-gray-50 text-gray-900 rounded-lg border border-gray-300 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="+91 98..."
                  />
                  <Phone className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                </div>
              </div>

              <div>
                <label htmlFor="skills" className="block text-sm font-medium text-gray-700">
                  Skills & Expertise
                </label>
                <div className="relative mt-1">
                  <input
                    type="text"
                    id="skills"
                    name="skills"
                    value={formData.skills}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 bg-gray-50 text-gray-900 rounded-lg border border-gray-300 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="e.g., Gardening, Community Organizing"
                  />
                  <Sparkles className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                </div>
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                  Location
                </label>
                <div className="relative mt-1">
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 bg-gray-50 text-gray-900 rounded-lg border border-gray-300 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Your City (e.g., Delhi, Mumbai)"
                  />
                  <MapPin className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Why do you want to volunteer?
                </label>
                <div className="relative mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 bg-gray-50 text-gray-900 rounded-lg border border-gray-300 focus:ring-emerald-500 focus:border-emerald-500 resize-none"
                    placeholder="Tell us about your passion..."
                  />
                  <MessageSquare className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
                </div>
              </div>

              {submitError && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg text-sm">
                  Something went wrong. Please check your details and try again.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}