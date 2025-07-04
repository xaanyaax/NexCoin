"use client";

import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.KeyboardEvent | React.FormEvent) => {
    e.preventDefault();
    // Handle search logic here
    console.log('Search query:', searchQuery);
  };

  return (
    <nav className="bg-black border-b border-gray-800 sticky top-0 z-50 backdrop-blur-md bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0 gap-3.5">
  <div className="flex items-center gap-2">
    <div className="text-3xl">
      ⭐️
    </div>
    <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
      NexCoin
    </span>
  </div>
</div>


          

          {/* Desktop Navigation Items */}
          <div className="hidden md:flex items-center space-x-8">
            <button className="flex items-center space-x-2 text-gray-300 hover:text-orange-400 transition-colors duration-200">
              <span>🪙</span>
              <span className="font-medium">Top 100</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-300 hover:text-orange-400 transition-colors duration-200">
              <span>📈</span>
              <span className="font-medium">Coin Price Chart</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-300 hover:text-orange-400 transition-colors duration-200">
              <span>🔥</span>
              <span className="font-medium">Trending Coins</span>
            </button>
          </div>

          {/* Desktop Search Bar */}
          <div >
            <div className="relative">

              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-400 text-lg">🔍</span>
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch(e)}
                placeholder="Search..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-700 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 hover:border-gray-600"
              />

            </div>
          </div>

          {/* Desktop Login Button */}
          <div className="hidden md:block">
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 hover:shadow-lg flex items-center space-x-2">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>Login</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-400 hover:text-orange-400 focus:outline-none focus:text-orange-400 transition-colors duration-200"
            >
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
        <div className="px-4 pt-2 pb-4 space-y-3 bg-black border-t border-gray-800">
          {/* Mobile Navigation Items */}
          <div className="space-y-2">
            <button className="w-full text-left flex items-center space-x-2 text-gray-300 hover:text-orange-400 transition-colors duration-200 py-2">
              <span>🪙</span>
              <span className="font-medium">Top 100</span>
            </button>
            <button className="w-full text-left flex items-center space-x-2 text-gray-300 hover:text-orange-400 transition-colors duration-200 py-2">
              <span>📈</span>
              <span className="font-medium">Coin Price Chart</span>
            </button>
            <button className="w-full text-left flex items-center space-x-2 text-gray-300 hover:text-orange-400 transition-colors duration-200 py-2">
              <span>🔥</span>
              <span className="font-medium">Trending Coins</span>
            </button>
          </div>

          {/* Mobile Search */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-400 text-lg">🔍</span>
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch(e)}
              placeholder="Search transactions, addresses..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-700 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
            />
          </div>

          {/* Mobile Login Button */}
          <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span>Login</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;