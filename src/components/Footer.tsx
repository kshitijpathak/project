import { Trees, MapPin, Mail, Phone, Facebook, Linkedin, Instagram } from 'lucide-react';

interface FooterProps {
  // This prop has changed to match the new one from Layout.tsx
  handleNavigation: (sectionId: string) => void;
}

export const Footer = ({ handleNavigation }: FooterProps) => {
  // We don't need navigate or location here anymore,
  // as the Layout component handles all the logic.

  return (
    <footer className="bg-gradient-to-b from-gray-800 to-gray-900 text-white mt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                <Trees className="w-7 h-7 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-2xl font-bold">Grey<span className="text-emerald-400">2</span>Green</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Transforming urban spaces into thriving food forests and building sustainable communities through regenerative practices.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <div className="space-y-3">
              {/* Each button now correctly calls handleNavigation */}
              <button
                onClick={() => handleNavigation('home')}
                className="block text-gray-400 hover:text-emerald-400 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => handleNavigation('whoweare')}
                className="block text-gray-400 hover:text-emerald-400 transition-colors"
              >
                Who We Are
              </button>
              <button
                onClick={() => handleNavigation('projects')}
                className="block text-gray-400 hover:text-emerald-400 transition-colors"
              >
                Our Work
              </button>
              <button
                onClick={() => handleNavigation('retail')}
                className="block text-gray-400 hover:text-emerald-400 transition-colors"
              >
                Retail Services
              </button>
              <button
                onClick={() => handleNavigation('contact')}
                className="block text-gray-400 hover:text-emerald-400 transition-colors"
              >
                Contact Us
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-emerald-400" />
                <div>
                  <p>A-9, Saraswati Vihar, Pitampura,</p>
                  <p>New Delhi, india-110034</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 flex-shrink-0 text-emerald-400" />
                <a href="mailto:info@grey2green.org" className="hover:text-emerald-400 transition-colors">
                  info@grey2greens.org
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 flex-shrink-0 text-emerald-400" />
                <a href="tel:+919810397005" className="hover:text-emerald-400 transition-colors">
                  +91 98103 97005
                </a>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-medium mb-3">Follow Us</h4>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/people/Grey2Greens/61582558965543/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/grey2greens/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          <p>© 2025 Grey2Green Foundation | All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

