import { useState } from 'react';
import logo from '../public/1.png';
import { useRouter } from 'next/router';
import Link from 'next/link'

export default function NavBar(): JSX.Element {
  const router = useRouter();
  

  const [menuOpen, setMenuOpen] = useState(false); // Added this state

  const isActive = (href: string): boolean => {
    return router.pathname === href;
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 w-full m-0 p-0">
      <div className="flex flex-wrap items-center justify-between m-0 p-4 w-full">
        <Link href="/" className="flex items-center">
          <img src={logo.src} className="h-10 mr-3" alt="SeeQR Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            SeeQR
          </span>
        </Link>
        <button
          onClick={() => setMenuOpen(!menuOpen)} // Toggle the menu on click
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            menuOpen ? 'block' : 'hidden'
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                href="/"
                className={`block py-2 pl-3 pr-4 rounded md:p-0 ${
                  isActive('/')
                    ? 'text-blue-700'
                    : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover: dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                }`}
                aria-current={isActive('/') ? 'page' : undefined}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/docs"
                className={`block py-2 pl-3 pr-4 rounded md:p-0 ${
                  isActive('/docs')
                    ? 'text-blue-700'
                    : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover: dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                }`}
                aria-current={isActive('/docs') ? 'page' : undefined}
              >
                Docs
              </Link>
            </li>
            <li>
              <Link
                href="/team"
                className={`block py-2 pl-3 pr-4 rounded md:p-0 ${
                  isActive('/team')
                    ? 'text-blue-700'
                    : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover: dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                }`}
                aria-current={isActive('/team') ? 'page' : undefined}
              >
                Team
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
