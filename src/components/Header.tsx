import React, { useState } from 'react';
import { Menu, X, ShoppingBag, User } from 'lucide-react';
import IMAGES from '../assets/Images';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white sticky top-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-2xl font-bold tracking-tight">
              <img className="w-20" src={IMAGES.logoWhite} alt="Logo" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-gray-300 transition-colors font-medium">Home</a>
            <a href="#about" className="hover:text-gray-300 transition-colors font-medium">Our Story</a>
            <a href="#products" className="hover:text-gray-300 transition-colors font-medium">Shop</a>
            <a href="#meaning" className="hover:text-gray-300 transition-colors font-medium">Ma se Kind</a>
            <a href="#community" className="hover:text-gray-300 transition-colors font-medium">Community</a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="hover:text-gray-300 transition-colors">
              <User className="w-5 h-5" />
            </button>
            <button className="hover:text-gray-300 transition-colors relative">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-white text-black text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                0
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-gray-300 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-800">
              <a href="#home" className="block px-3 py-2 hover:bg-gray-800 transition-colors font-medium">Home</a>
              <a href="#about" className="block px-3 py-2 hover:bg-gray-800 transition-colors font-medium">Our Story</a>
              <a href="#products" className="block px-3 py-2 hover:bg-gray-800 transition-colors font-medium">Shop</a>
              <a href="#meaning" className="block px-3 py-2 hover:bg-gray-800 transition-colors font-medium">Ma se Kind</a>
              <a href="#community" className="block px-3 py-2 hover:bg-gray-800 transition-colors font-medium">Community</a>
              <div className="flex items-center space-x-4 px-3 py-2 border-t border-gray-800 mt-2">
                <button className="hover:text-gray-300 transition-colors">
                  <User className="w-5 h-5" />
                </button>
                <button className="hover:text-gray-300 transition-colors relative">
                  <ShoppingBag className="w-5 h-5" />
                  <span className="absolute -top-2 -right-2 bg-white text-black text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    0
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;