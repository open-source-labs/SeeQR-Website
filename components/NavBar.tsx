import Link from 'next/link';
import logo from '../assets/1.png';
import { useRouter } from 'next/router';

export default function NavBar() {
  const router = useRouter();

  function isActive(route: string) {
    return route === router.pathname;
  }

  return (
    <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a className="flex items-center">
          <img src={logo.src} className="h-8 mr-3" alt="SeeQR Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            SeeQR
          </span>
        </a>
        <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
          <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            <li>
              <Link
                href="/"
                className={
                  isActive('/')
                    ? 'px-2 sm:px-10 link text-black'
                    : 'px-2 sm:px-10 link text-white'
                }
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/docs"
                className={
                  isActive('/docs')
                    ? 'px-2 sm:px-10 link text-black'
                    : 'px-2 sm:px-10 link text-white'
                }
              >
                Docs
              </Link>
            </li>
            <li>
              <Link
                href="/team"
                className={
                  isActive('/team')
                    ? 'px-2 sm:px-10 link text-black'
                    : 'px-2 sm:px-10 link text-white'
                }
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
