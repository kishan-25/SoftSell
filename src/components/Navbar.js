import { useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={`sticky top-0 z-50 ${darkMode ? "bg-gray-800 text-white" : "bg-lime-300 text-black"} shadow-md`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex-shrink-0 flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-2"
            >
              <a href="/" className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${darkMode ? "bg-blue-500" : "bg-black"}`}>
                <span className="text-white font-bold">S</span>
                </div>
                <span className="text-xl font-bold">SoftSell</span>
              </a>
            </motion.div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="hover:text-black transition-colors">How It Works</a>
            <a href="#why-choose-us" className="hover:text-black transition-colors">Why Choose Us</a>
            <a href="#testimonials" className="hover:text-black transition-colors">Testimonials</a>
            <a href="#contact" className="hover:text-black transition-colors">Contact</a>
            
            {/* Theme Toggle */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-lime-400 dark:hover:bg-gray-700"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className={`px-4 py-2 rounded-md ${
                darkMode 
                  ? "bg-blue-500 hover:bg-blue-600 text-white" 
                  : "bg-black hover:bg-gray-800 text-white"
              } transition-colors`}
            >
              Chat
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={toggleDarkMode}
              className="p-2 mr-2 rounded-full hover:bg-lime-400 dark:hover:bg-gray-700"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
            
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className={`md:hidden ${darkMode ? "bg-gray-800" : "bg-lime-300"} shadow-lg`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a 
              href="#how-it-works" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-lime-400 dark:hover:bg-gray-700"
              onClick={toggleMobileMenu}
            >
              How It Works
            </a>
            <a 
              href="#why-choose-us" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-lime-400 dark:hover:bg-gray-700"
              onClick={toggleMobileMenu}
            >
              Why Choose Us
            </a>
            <a 
              href="#testimonials" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-lime-400 dark:hover:bg-gray-700"
              onClick={toggleMobileMenu}
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-lime-400 dark:hover:bg-gray-700"
              onClick={toggleMobileMenu}
            >
              Contact
            </a>
            <a 
              href="#contact"
              onClick={toggleMobileMenu}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                darkMode 
                  ? "bg-blue-500 hover:bg-blue-600 text-white" 
                  : "bg-black hover:bg-gray-800 text-white"
              }`}
            >
              Chat
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;