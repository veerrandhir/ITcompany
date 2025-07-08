import { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-gray-800 dark:text-green-400">
          DevPortfolio
        </a>
        <div className="flex items-center space-x-6">
          <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-green-500">About</a>
          <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-green-500">Projects</a>
          <a href="#blog" className="text-gray-600 dark:text-gray-300 hover:text-green-500">Blog</a>
          <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-green-500">Contact</a>
          <button 
            onClick={() => setDarkMode(!darkMode)} 
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
          >
            {darkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;