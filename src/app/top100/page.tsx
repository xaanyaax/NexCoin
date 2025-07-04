"use client";

import React, { useState, useEffect } from 'react';
// import CryptoCardsGrid from './CryptoCardsGrid'; // Adjust import path as needed

interface CoinData {
  id: string;
  name: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap_rank: number;
  image: string;
}

const CryptoTop100Page: React.FC = () => {
  const [coins, setCoins] = useState<CoinData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());

  // Simulate API call - replace with your actual API call
  useEffect(() => {
    const fetchCryptoData = async () => {
      setIsLoading(true);
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Mock data - replace with actual API call
        const mockCoins: CoinData[] = [
          {
            id: 'bitcoin',
            name: 'Bitcoin',
            symbol: 'BTC',
            current_price: 65432.10,
            price_change_percentage_24h: 2.45,
            market_cap_rank: 1,
            image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png'
          },
          {
            id: 'ethereum',
            name: 'Ethereum',
            symbol: 'ETH',
            current_price: 3245.67,
            price_change_percentage_24h: -1.23,
            market_cap_rank: 2,
            image: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png'
          },
          {
            id: 'cardano',
            name: 'Cardano',
            symbol: 'ADA',
            current_price: 0.4567,
            price_change_percentage_24h: 5.78,
            market_cap_rank: 3,
            image: 'https://assets.coingecko.com/coins/images/975/large/cardano.png'
          }
        ];
        
        setCoins(mockCoins);
        setLastUpdate(new Date());
      } catch (error) {
        console.error('Error fetching crypto data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCryptoData();
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-orange-500 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animation: `float ${5 + Math.random() * 5}s ease-in-out infinite alternate`
            }}
          />
        ))}
      </div>

      {/* Header Section */}
      <div className="relative z-10 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4">
          {/* Navigation */}
          <nav className="flex items-center justify-between mb-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-lg">₿</span>
              </div>
              <span className="text-white text-xl font-bold">CryptoTracker</span>
            </div>
            <div className="flex items-center space-x-6">
              <button className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                Markets
              </button>
              <button className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                Portfolio
              </button>
              <button className="bg-orange-500 hover:bg-orange-600 text-black px-4 py-2 rounded-lg font-semibold transition-colors duration-300">
                Connect Wallet
              </button>
            </div>
          </nav>

          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gray-900 border border-orange-500 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-orange-400 text-sm font-medium">Live Market Data</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                TOP 100
              </span>
              <br />
              <span className="text-gray-300">CRYPTO</span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              Discover the most valuable cryptocurrencies with real-time prices, 
              market data, and 24-hour performance metrics. Stay ahead of the market.
            </p>

            {/* Stats Bar */}
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-1">100+</div>
                <div className="text-sm text-gray-500">Cryptocurrencies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-1">24/7</div>
                <div className="text-sm text-gray-500">Live Updates</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-1">Real-time</div>
                <div className="text-sm text-gray-500">Market Data</div>
              </div>
            </div>

            {/* Last Update */}
            <div className="inline-flex items-center space-x-2 text-gray-500 text-sm">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              <span>Last updated: {formatTime(lastUpdate)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* <CryptoCardsGrid 
          coins={coins} 
          isLoading={isLoading}
          loadingCount={12}
        /> */}
      </div>


      {/* CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
};

export default CryptoTop100Page;