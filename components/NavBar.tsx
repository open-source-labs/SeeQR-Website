import { useState } from 'react';
import logo from '../public/1.png';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function NavBar(): JSX.Element {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false); // Added this state

  const isActive = (href: string): boolean => {
    return router.pathname === href;
  };

  return (
      <nav className="bg-white shadow">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 justify-between">
                <div className="flex flex-row justify-bewteen">
                  <div className="flex flex-shrink-0 items-center">
                    <img className="h-8 w-auto" src={logo.src} alt="SeeQR Logo"/>
                    <span className="self-center text-2xl font-semibold whitespace-nowrap ">
                      SeeQR
                    </span>
                  </div>
                </div>
                  <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                    <Link href="/" className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${isActive('/') ?  'border-b-2 border-indigo-500 text-black' : 'border-b-2 border-white hover:border-gray-300 hover:text-gray-700' } hover:border-b-2  `}>Home</Link>
                    <Link href="/docs" className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${isActive('/docs') ?  'border-b-2 border-indigo-500 text-black' : 'border-b-2 border-white hover:border-gray-300 hover:text-gray-700' } hover:border-b-2  `}>Docs</Link>
                    <Link href="/team" className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${isActive('/team') ?  'border-b-2 border-indigo-500 text-black' : 'border-b-2 border-white hover:border-gray-300 hover:text-gray-700' } hover:border-b-2  `}>Team</Link>
                  </div>
                <div className="-mr-2 flex items-center sm:hidden">
                  <button 
                    type="button" 
                    className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" 
                    aria-controls="mobile-menu" 
                    aria-expanded="false"
                    onClick={() => setMenuOpen(!menuOpen)}
                  >
                    <span className="sr-only">Open main menu</span>
                    <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className={`${menuOpen ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
              <div className="space-y-1 pb-3 pt-2">
                <Link href="/" className={`block border-l-4 ${isActive('/') ? 'border-indigo-500 bg-indigo-50 text-indigo-700' : 'text-gray-500'} py-2 pl-3 pr-4 text-base font-medium hover:bg-gray-50 hover:text-gray-700`}>Home</Link>
                <Link href="/docs" className={`block border-l-4 ${isActive('/docs') ? 'border-indigo-500 bg-indigo-50 text-indigo-700' : 'text-gray-500'} py-2 pl-3 pr-4 text-base font-medium hover:bg-gray-50 hover:text-gray-700`}>Docs</Link>
                <Link href="/team" className={`block border-l-4 ${isActive('/team') ? 'border-indigo-500 bg-indigo-50 text-indigo-700' : 'text-gray-500'} py-2 pl-3 pr-4 text-base font-medium hover:bg-gray-50 hover:text-gray-700`}>Team</Link>
              </div>
            </div>
          </nav>
  );
}
