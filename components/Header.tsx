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

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open'); // Add the CSS class when the menu is open
    } else {
      document.body.classList.remove('menu-open'); // Remove the CSS class when the menu is closed
    }
  }, [isMenuOpen]);

  return (
    <>
      <nav className="pt-5">
        <div className="container mx-auto transition-all duration-300 px-6 py-3 flex justify-between items-center">
          {/* Logo and Title */}
          <div className="flex justify-center">
            <img className="h-12 w-auto pr-2" src={logo.src} alt="SeeQR Logo" />
            <Link className="text-4xl font-semibold text-gray-700" href="/">
              SeeQR
            </Link>
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
            className={`md:hidden menu ${isMenuOpen ? 'opened' : ''}`}
            onClick={() => {
              if (!isMenuOpen) {
                setIsMenuOpen(true);
              } else {
                setIsMenuOpen(false);
              }
            }}
            aria-label="Main Menu"
            aria-expanded={isMenuOpen}
          >
            <svg width="35" height="35" viewBox="0 0 100 100">
              <path
                className="line line1"
                d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
              />
              <path className="line line2" d="M 20,50 H 80" />
              <path
                className="line line3"
                d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
              />
            </svg>
          </button>
        </div>
        {/* Mobile Navigation */}

        {isMenuOpen && (
          <>
            <div
              className={` absolute w-full z-40 inset-x-0  origin-top-right md:hidden mobile-navigation ${
                isMenuOpen ? 'fade-in' : 'fade-out'
              }`}
            >
              <div className=" shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="px-2 py-2 pb-3 space-y-1">
                  {navigation.main.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 animated-link"
                    >
                      {item.name}
                    </Link>
                  ))}
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
