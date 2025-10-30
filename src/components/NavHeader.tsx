import { useLocation } from 'react-router-dom';
import logo from '../assets/grey2greenlogo.png';

interface HeaderProps {
  activeSection: string;
  // This prop has changed! It's no longer scrollToSection
  handleNavigation: (sectionId: string) => void;
}

export const NavHeader = ({ activeSection, handleNavigation }: HeaderProps) => {
  const location = useLocation();

  // We determine the active section by EITHER
  // 1. The URL path (for separate pages)
  // 2. The activeSection state (for homepage scrolling)
  const isHomePage = location.pathname === '/';

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gradient-to-r from-emerald-50 to-green-50 border-b border-emerald-100 shadow-sm z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNavigation('home')}>
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-green-700 rounded-full flex items-center justify-center shadow-md">
              <img src={logo} alt="Grey2Green Logo" className="w-11 h-11" />
            </div>
            <span className="text-2xl font-bold text-gray-900">Grey<span className="text-emerald-600">2</span>Green</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => handleNavigation('home')}
              className={`font-medium transition-colors ${
                isHomePage && activeSection === 'home'
                  ? 'text-emerald-700 font-bold'
                  : 'text-gray-700 hover:text-emerald-600'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavigation('whoweare')}
              className={`font-medium transition-colors ${
                isHomePage && activeSection === 'whoweare'
                  ? 'text-emerald-700 font-bold'
                  : 'text-gray-700 hover:text-emerald-600'
              }`}
            >
              Who We Are
            </button>
            <button
              onClick={() => handleNavigation('projects')}
              className={`font-medium transition-colors ${
                isHomePage && activeSection === 'projects'
                  ? 'text-emerald-700 font-bold'
                  : 'text-gray-700 hover:text-emerald-600'
              }`}
            >
              Our Work
            </button>
            <button
              onClick={() => handleNavigation('retail')}
              className={`font-medium transition-colors ${
                // This highlighting is now much simpler and more reliable
                location.pathname === '/retail-services'
                  ? 'text-emerald-700 font-bold'
                  : 'text-gray-700 hover:text-emerald-600'
              }`}
            >
              Retail Services
            </button>
            <button
              onClick={() => handleNavigation('blogs')}
              className={`font-medium transition-colors ${
                location.pathname === '/blogs' // Example for when you add blogs
                  ? 'text-emerald-700 font-bold'
                  : 'text-gray-700 hover:text-emerald-600'
              }`}
            >
              Blogs
            </button>
            <button
              onClick={() => handleNavigation('contact')}
              className="px-8 py-3 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors">
              Get Involved
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};