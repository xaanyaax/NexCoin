"use client";

import React, { useState, useEffect } from 'react';

const features = [
  {
    icon: '🪙',
    title: 'Live Cryptocurrency Prices',
    description: 'Stay updated with real-time prices of 100+ cryptocurrencies — including Bitcoin, Ethereum, and more.',
  },
  {
    icon: '📈',
    title: 'Interactive Price Charts',
    description: 'Visualize market trends with dynamic 7-day and 30-day price graphs.',
  },
  {
    icon: '🔍',
    title: 'Smart Search',
    description: 'Instantly find your favorite coins using a lightning-fast search bar.',
  },
  {
    icon: '💰',
    title: 'Market Overview',
    description: 'Track total market cap, 24h volume, BTC dominance, and more — all in one place.',
  },
  {
    icon: '🌎',
    title: 'Multi-Currency Support',
    description: 'View prices in your local currency — USD, INR, EUR, and more.',
  },
  {
    icon: '💼',
    title: 'Coin Details Page',
    description: 'Get in-depth info for each coin: price history, rank, volume, circulating supply, and social links.',
  },
  {
    icon: '🔥',
    title: 'Trending Coins',
    description: 'See what\'s hot right now with the latest trending cryptocurrencies on CoinGecko.',
  }
];

const NexCoinLanding = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure window is available
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center">
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
          <h1 className="text-7xl md:text-9xl font-bold mb-6 bg-gradient-to-r  bg-clip-text  animate-pulse text-orange-500">
            NexCoin
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Your gateway to the cryptocurrency universe. Track, analyze, and discover the future of digital assets.
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative">
        <div className="max-w-4xl mx-auto px-4">
          {isClient && features.map((feature, index) => {
            const sectionStart = window.innerHeight + (index * window.innerHeight);
            const sectionEnd = sectionStart + window.innerHeight;
            const sectionCenter = sectionStart + (window.innerHeight / 2);

            const progress = Math.max(0, Math.min(1, (scrollY - sectionStart) / window.innerHeight));
            const isInActiveZone = scrollY >= sectionCenter - (window.innerHeight * 0.3) &&
              scrollY <= sectionCenter + (window.innerHeight * 0.3);

            const distanceFromCenter = Math.abs(scrollY - sectionCenter);
            const maxDistance = window.innerHeight * 0.5;
            const proximityFactor = Math.max(0, 1 - (distanceFromCenter / maxDistance));

            const scale = 0.8 + (proximityFactor * 0.4);
            const opacity = 0.3 + (proximityFactor * 0.7);
            const translateY = (1 - proximityFactor) * 50;

            return (
              <div
                key={index}
                className="min-h-screen flex items-center justify-center text-center"
                style={{
                  transform: `translateY(${translateY}px) scale(${scale})`,
                  opacity: opacity,
                  transition: 'none'
                }}
              >
                <div className="max-w-2xl mx-auto">
                  <div
                    className="text-8xl md:text-9xl mb-8 inline-block"
                    style={{
                      transform: `rotate(${progress * 360}deg)`,
                      filter: isInActiveZone ? 'drop-shadow(0 0 20px rgba(255, 165, 0, 0.5))' : 'none'
                    }}
                  >
                    {feature.icon}
                  </div>

                  <h3
                    className={`text-4xl md:text-5xl font-bold mb-6 transition-colors duration-700 ${isInActiveZone
                      ? 'text-orange-400 bg-gradient-to-r  bg-clip-text '
                      : 'text-gray-400'
                      }`}
                    style={{
                      transform: `translateX(${(0.5 - progress) * 100}px)`,
                      transition: 'color 0.7s ease'
                    }}
                  >
                    {feature.title}
                  </h3>

                  <p
                    className={`text-xl md:text-2xl leading-relaxed transition-colors duration-700 ${isInActiveZone ? 'text-gray-200' : 'text-gray-500'
                      }`}
                    style={{
                      transform: `translateX(${(progress - 0.5) * 100}px)`,
                      transition: 'color 0.7s ease'
                    }}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
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
