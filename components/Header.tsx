import Link from 'next/link';
import { useState, useEffect } from 'react';
import logo from '../public/1.png';

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'Docs', href: '/docs' },
    { name: 'Team', href: '/team' },
  ],
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    let timeoutId: any;

    if (isMenuOpen) {
      setShouldRender(true);
    } else if (!isMenuOpen && shouldRender) {
      timeoutId = setTimeout(() => {
        setShouldRender(false);
      }, 300); // Duration of the fade-out animation
    }

    return () => clearTimeout(timeoutId);
  }, [isMenuOpen, shouldRender]);

  /**
   * Handles the resize event and closes the menu if the window width is greater than or equal to the md breakpoint.
   */

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        // Tailwind's md breakpoint
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    // Clean up the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  /**
   * Prevent scrolling when the mobile menu is open
   */


  return (
    <>
      <nav className="pt-5">
        <div className="container mx-auto transition-all duration-300 px-6 py-3 flex justify-between items-center">
          {/* Logo and Title */}
          <div className="flex justify-center">
            <img className="h-12 w-auto pr-2" src={logo.src} alt="SeeQR Logo" />
            <a className="text-4xl font-semibold text-gray-700" href="/">
              SeeQR
            </a>
          </div>

          {/* Navigation */}
          <div className="flex items-center flex-grow justify-center">
            <div className="hidden md:flex space-x-8 mr-15">
              {navigation.main.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-800 hover:text-gray-500"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Source Code Link */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => {
                window.open('https://github.com/open-source-labs/SeeQR');
              }}
              type="button"
              className="rounded-full bg-black px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition duration-300"
            >
              Source Code
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="button-three md:hidden"
            aria-controls="primary-navigation"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              stroke="var(--button-color)"
              fill="none"
              className="hamburger"
              viewBox="-10 -10 120 120"
              width="40"
            >
              <path
                className="line"
                strokeWidth="10"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70"
              ></path>
            </svg>
          </button>
        </div>
        {/* Mobile Navigation */}

        {shouldRender && (
          <>
            <div
              className={` absolute w-full z-40 inset-x-0  origin-top-right md:hidden mobile-navigation ${
                isMenuOpen ? 'fade-in' : 'fade-out'
              }`}
            >
              <div className=" shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="px-2 py-2 pb-3 space-y-1">
                  <Link
                    href="/"
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 animated-link"
                  >
                    Home
                  </Link>
                  <Link
                    href="/docs"
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 animated-link"
                  >
                    Docs
                  </Link>
                  <Link
                    href="/team"
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 animated-link"
                  >
                    Team
                  </Link>
                  <Link
                    href="https://github.com/open-source-labs/SeeQR"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 animated-link"
                  >
                    Source Code
                  </Link>
                
                </div>
              </div>
            </div>
            <div
              className={`absolute bg-black h-full w-full opacity-60 ${
                isMenuOpen ? 'modal-fade-in' : 'modal-fade-out'
              }`}
            ></div>
          </>
        )}
      </nav>
    </>
  );
}
