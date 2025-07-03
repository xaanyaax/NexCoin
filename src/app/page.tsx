"use client";

import React, { useState, useEffect } from 'react';

const NexCoinLanding = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: '🪙',
      title: 'Live Cryptocurrency Prices',
      description: 'Stay updated with real-time prices of 100+ cryptocurrencies — including Bitcoin, Ethereum, and more.',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: '📈',
      title: 'Interactive Price Charts',
      description: 'Visualize market trends with dynamic 7-day and 30-day price graphs.',
      color: 'from-green-400 to-blue-500'
    },
    {
      icon: '🔍',
      title: 'Smart Search',
      description: 'Instantly find your favorite coins using a lightning-fast search bar.',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: '💰',
      title: 'Market Overview',
      description: 'Track total market cap, 24h volume, BTC dominance, and more — all in one place.',
      color: 'from-blue-400 to-indigo-500'
    },
    {
      icon: '🌎',
      title: 'Multi-Currency Support',
      description: 'View prices in your local currency — USD, INR, EUR, and more.',
      color: 'from-teal-400 to-cyan-500'
    },
    {
      icon: '💼',
      title: 'Coin Details Page',
      description: 'Get in-depth info for each coin: price history, rank, volume, circulating supply, and social links.',
      color: 'from-red-400 to-pink-500'
    },
    {
      icon: '⭐',
      title: 'Trending Coins',
      description: 'See what\'s hot right now with the latest trending cryptocurrencies on CoinGecko.',
      color: 'from-yellow-400 to-red-500'
    }
  ];

  const FeatureCard = ({ feature, index }) => (
    <div 
      className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${feature.color} p-8 transform transition-all duration-500 hover:scale-105 hover:rotate-1 shadow-2xl`}
      style={{
        animationDelay: `${index * 0.1}s`,
        transform: `translateY(${Math.max(0, (scrollY - index * 200) * 0.1)}px)`
      }}
    >
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
      <div className="relative z-10">
        <div className="text-6xl mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
          {feature.icon}
        </div>
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-200 transition-colors duration-300">
          {feature.title}
        </h3>
        <p className="text-white/90 text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
          {feature.description}
        </p>
      </div>
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full group-hover:scale-150 group-hover:rotate-180 transition-all duration-500"></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Main Content */}
        <div className="relative z-10 text-center px-4">
          <div className="mb-8">
            <div 
              className="inline-block text-8xl animate-spin"
              style={{
                animation: 'spin 4s linear infinite'
              }}
            >
              ⭐
            </div>
          </div>
          
          <h1 className="text-7xl md:text-9xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent animate-pulse">
            NexCoin
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Your gateway to the cryptocurrency universe. Track, analyze, and discover the future of digital assets.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-xl rounded-full hover:from-orange-500 hover:to-red-500 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-yellow-500/50">
              Explore Now
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-bold text-xl rounded-full hover:bg-white hover:text-black transform hover:scale-105 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </div>


      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="text-4xl animate-spin mr-3" style={{ animation: 'spin 4s linear infinite' }}>
              ⭐
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              NexCoin
            </span>
          </div>
          <p className="text-gray-400 mb-4">
            © 2025 NexCoin. Empowering your crypto journey.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Terms</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Support</a>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default NexCoinLanding;