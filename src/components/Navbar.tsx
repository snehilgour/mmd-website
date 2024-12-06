import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: 'Home', href: '#' },
    { title: 'Courses', href: '#courses' },
    { title: 'Experience', href: '#experience' },
    { title: 'Contact', href: '#contact' }
  ];

  return (
    <nav className="fixed w-full z-50 bg-gradient-to-r from-red-600 to-yellow-500 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo with entrance animation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2"
          >
            <span className="text-2xl font-bold text-white">Master Motor Driving School</span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.title}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-white hover:text-black transition-all duration-300 transform hover:scale-105"
              >
                {item.title}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-black transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden py-4 space-y-4 bg-gradient-to-r from-red-600 to-yellow-500"
          >
            {menuItems.map((item) => (
              <motion.a
                key={item.title}
                href={item.href}
                className="block py-2 text-white hover:text-black transition-colors duration-300"
                onClick={() => setIsOpen(false)}
                whileHover={{ scale: 1.1 }}
              >
                {item.title}
              </motion.a>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
