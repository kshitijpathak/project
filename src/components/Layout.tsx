import { useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { NavHeader } from './NavHeader';
import { Footer } from './Footer';

export const Layout = () => {
  const [activeSection, setActiveSection] = useState('home');
  const navigate = useNavigate();
  const location = useLocation();

  /**
   * This is the internal helper function for scrolling on the homepage.
   */
  const handleSectionScroll = (sectionId: string) => {
    setActiveSection(sectionId);
    
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
  };

  /**
   * This is the new, global navigation handler that we will pass to the header and footer.
   * It's smart enough to know whether to scroll or switch pages.
   */
  const handleNavigation = (sectionId: string) => {
    // 1. Check if we want to go to a separate page
    if (sectionId === 'retail' || sectionId === 'blogs') {
      const path = sectionId === 'retail' ? '/retail-services' : '/blogs';
      navigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } 
    // 2. Check if we are already on the homepage and just need to scroll
    else if (location.pathname === '/') {
      handleSectionScroll(sectionId);
    } 
    // 3. We are on a different page (like /retail) and need to go HOME first, then scroll
    else {
      // Navigate to the homepage.
      // We'll also add a hash to scroll once we land there.
      // (This requires an effect, let's keep it simple for now)
      navigate('/');
      
      // Since navigation takes a moment, we delay the scroll slightly
      setTimeout(() => {
        handleSectionScroll(sectionId);
      }, 100);
    }
  };


  return (
    <div>
      {/* We now pass the NEW handleNavigation function.
        We also pass the location to help with highlighting.
      */}
      <NavHeader 
        activeSection={activeSection} 
        handleNavigation={handleNavigation} 
      />
      <main>
        <Outlet />
      </main>
      {/* Pass the new function to the Footer as well */}
      <Footer handleNavigation={handleNavigation} />
    </div>
  );
};
