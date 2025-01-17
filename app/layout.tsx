'use client';
import './globals.css';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import React, { useState } from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu toggle

  const linkClasses = (path: string) =>
    pathname === path
      ? 'block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500'
      : 'block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent';

  return (
    <html lang="en">
      <body>
        {/* Navigation Bar */}
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <Image
                src="/avatar_hello.png"
                alt="Logo"
                width={65}
                height={65}
              />
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)} // Toggle the state
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded={isOpen ? 'true' : 'false'}
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
                isOpen ? 'block' : 'hidden'
              } w-full md:block md:w-auto`} // Conditional rendering of mobile menu
              id="navbar-default"
            >
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <Link href="/" className={linkClasses('/')}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/myself" className={linkClasses('/myself')}>
                    About Me
                  </Link>
                </li>
                <li>
                  <Link href="/internship" className={linkClasses('/internship')}>
                    Internship
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className={linkClasses('/projects')}>
                    Other Projects
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer */}
        <div className="bg-white border-gray-200 dark:bg-gray-900 max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2025 Emmanuel Akpandara. All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
              <li>
                <Link href="https://www.linkedin.com/in/emmanuel-akpandara-54472b229/" target="_blank" rel="noopener noreferrer" className="hover:underline me-4 md:me-6">LinkedIn</Link>
              </li>
              <li>
                <Link href="mailto:emzz.akp@gmail.com" className="hover:underline me-4 md:me-6">Email</Link>
              </li>
              <li>
                <Link href="https://github.com/emmanuel-akpandara" target="_blank" rel="noopener noreferrer" className="hover:underline me-4 md:me-6">GitHub</Link>
              </li>
              <li>
                <Link href="tel:+1234567890" className="hover:underline">Phone: +32467832910</Link>
              </li>
            </ul>
          </div>
        </div>
      </body>
    </html>
  );
}
