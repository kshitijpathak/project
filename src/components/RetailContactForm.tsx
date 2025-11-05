import { User, Mail, Phone, MessageSquare, Send } from 'lucide-react';
import { useState } from 'react';

export const RetailContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send to an API)
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center text-white h-full flex flex-col justify-center items-center">
        <Send className="w-12 h-12 text-emerald-300 mb-4" />
        <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
        <p className="text-lg text-emerald-100">Your consultation request has been sent. We'll be in touch soon!</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="text-sm font-medium text-emerald-100">Full Name</label>
        <div className="relative mt-1">
          <input
            type="text"
            id="name"
            required
            className="w-full pl-10 pr-4 py-2 bg-white/10 text-white rounded-lg border border-white/20 focus:ring-emerald-300 focus:border-emerald-300"
            placeholder="John Doe"
          />
          <User className="w-5 h-5 text-emerald-200 absolute left-3 top-1/2 -translate-y-1/2" />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-medium text-emerald-100">Email</label>
        <div className="relative mt-1">
          <input
            type="email"
            id="email"
            required
            className="w-full pl-10 pr-4 py-2 bg-white/10 text-white rounded-lg border border-white/20 focus:ring-emerald-300 focus:border-emerald-300"
            placeholder="you@example.com"
          />
          <Mail className="w-5 h-5 text-emerald-200 absolute left-3 top-1/2 -translate-y-1/2" />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="text-sm font-medium text-emerald-100">Phone Number</label>
        <div className="relative mt-1">
          <input
            type="tel"
            id="phone"
            className="w-full pl-10 pr-4 py-2 bg-white/10 text-white rounded-lg border border-white/20 focus:ring-emerald-300 focus:border-emerald-300"
            placeholder="+91 98..."
          />
          <Phone className="w-5 h-5 text-emerald-200 absolute left-3 top-1/2 -translate-y-1/2" />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="text-sm font-medium text-emerald-100">Service of Interest</label>
        <select
          id="service"
          className="w-full mt-1 px-4 py-2 bg-white/10 text-white rounded-lg border border-white/20 focus:ring-emerald-300 focus:border-emerald-300"
        >
          <option className="bg-gray-800">Select a service</option>
          <option className="bg-gray-800">Roof & Terrace Garden</option>
          <option className="bg-gray-800">Private Home Garden</option>
          <option className="bg-gray-800">End-to-End Implementation</option>
          <option className="bg-gray-800">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-emerald-100">Message</label>
        <div className="relative mt-1">
          <textarea
            id="message"
            rows={4}
            className="w-full pl-10 pr-4 py-2 bg-white/10 text-white rounded-lg border border-white/20 focus:ring-emerald-300 focus:border-emerald-300"
            placeholder="Tell us about your space..."
          />
          <MessageSquare className="w-5 h-5 text-emerald-200 absolute left-3 top-3" />
        </div>
      </div>

      <button
        type="submit"
        className="w-full px-6 py-3 bg-white text-emerald-700 font-bold rounded-lg hover:bg-emerald-50 transition-colors"
      >
        Book Free Consultation
      </button>
    </form>
  );
};