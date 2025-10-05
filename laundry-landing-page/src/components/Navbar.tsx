import React, { useEffect, useMemo, useState } from 'react';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import Button from '@mui/material/Button';

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isAtTop, setIsAtTop] = useState<boolean>(true);

  const navItems = useMemo(
    () => [
      { id: 'home', label: 'Home' },
      { id: 'services', label: 'Services' },
      { id: 'pricing', label: 'Pricing' },
      { id: 'contact', label: 'Contact' },
    ],
    []
  );

  useEffect(() => {
    const getNavbarHeight = (): number => {
      const nav = document.querySelector('nav');
      if (nav) return (nav as HTMLElement).offsetHeight;
      return 0;
    };

    const handleScroll = () => {
      const offset = getNavbarHeight() + 8; // small buffer below sticky navbar
      let currentId = navItems[0]?.id ?? 'home';

      navItems.forEach((item) => {
        const el = document.getElementById(item.id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top - offset <= 0) {
          currentId = item.id;
        }
      });

      setActiveSection(currentId);
      setIsAtTop(window.scrollY < 4);
    };

    // Initialize and bind listeners
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [navItems]);

  return (
    <nav
      className={
        'fixed top-0 left-0 right-0 z-50 text-text-primary w-full transition-colors duration-300' +
        (isAtTop ? ' bg-transparent' : ' backdrop-blur-sm bg-white/60 shadow-md')
      }
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between py-4 px-10">
        <div className="flex items-center">
          <LocalLaundryServiceIcon
            className="mr-2"
            titleAccess="Laundry basket"
            sx={{ fontSize: 32 }}
          />
          <span className="text-xl font-bold tracking-wide">LaundryX</span>
        </div>

        <ul className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={
                    'relative text-sm transition-colors' +
                    (isActive
                      ? ' underline underline-offset-8 decoration-2'
                      : ' hover:underline underline-offset-4')
                  }
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        <Button
          variant="outlined"
          sx={{ display: { xs: 'none', md: 'inline-flex' } }}
        >
          Contact Us
        </Button>

        {/* Mobile menu button (visual only) */}
        <button
          aria-label="Open menu"
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
