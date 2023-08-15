import logo from "../public/1.png";
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-transparent rounded-lg shadow m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            href="http://www.seeqrapp.com/"
            className="flex items-center mb-4 sm:mb-0"
          >
            <img src={logo.src} className="h-8 mr-3" alt="SeeQR Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">
              SeeQR
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-black sm:mb-0">
            <li>
              <Link
                href="https://github.com/open-source-labs/SeeQR"
                className="mr-4 hover:underline md:mr-6 text-slate-900"
              >
                Github
              </Link>
            </li>
            <li>
              <Link
                href="https://medium.com/p/59741756cfcb"
                className="mr-4 hover:underline md:mr-6 text-slate-900"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="http://www.seeqrapp.com/team"
                className="hover:underline text-slate-900"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-black sm:text-center">
          © 2023{" "}
          <Link href="http://www.seeqrapp.com/" className="hover:underline">
            SeeQR
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
