"use client";
import React from 'react';

interface CryptoCardProps {
  coin: {
    id: string;
    name: string;
    symbol: string;
    current_price: number;
    price_change_percentage_24h: number;
    market_cap_rank: number;
    image: string;
  };
  isLoading?: boolean;
}
<div></div>
const CryptoCard: React.FC<CryptoCardProps> = ({ coin, isLoading = false }) => {
  if (isLoading) {
    return (
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 animate-pulse">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-700 rounded w-20"></div>
              <div className="h-3 bg-gray-700 rounded w-12"></div>
            </div>
          </div>
          <div className="w-8 h-6 bg-gray-700 rounded"></div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="h-4 bg-gray-700 rounded w-16"></div>
            <div className="h-6 bg-gray-700 rounded w-24"></div>
          </div>
          <div className="flex items-center justify-between">
            <div className="h-4 bg-gray-700 rounded w-20"></div>
            <div className="h-5 bg-gray-700 rounded w-16"></div>
          </div>
          <div className="flex items-center justify-between">
            <div className="h-4 bg-gray-700 rounded w-24"></div>
            <div className="h-5 bg-gray-700 rounded w-12"></div>
          </div>
        </div>
      </div>
    );
  }

  const isPositiveChange = coin.price_change_percentage_24h > 0;

  const formatPrice = (price: number) => {
    if (price >= 1) {
      return `$${price.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })}`;
    }
    return `$${price.toFixed(6)}`;
  };

  const formatPercentage = (percentage: number) => {
    return `${percentage > 0 ? '+' : ''}${percentage.toFixed(2)}%`;
  };

  return (
    <div className="group bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 cursor-pointer transform hover:scale-105">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <img
              src={coin.image}
              alt={coin.name}
              className="w-10 h-10 rounded-full group-hover:scale-110 transition-transform duration-300"
              onError={(e) => {
                e.currentTarget.src =
                  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMjAiIGZpbGw9IiNGOTczMTYiLz4KPHN2ZyB4PSI4IiB5PSI4IiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSI+CjxwYXRoIGQ9Ik0xMiAyQzYuNDggMiAyIDYuNDggMiAxMlM2LjQ4IDIyIDEyIDIyUzIyIDE3LjUyIDIyIDEyUzE3LjUyIDIgMTIgMlpNMTMgMTdIMTFWMTFIMTNWMTdaTTEzIDlIMTFWN0gxM1Y5WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cjwvc3ZnPg==';
              }}
            />
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg group-hover:text-orange-400 transition-colors duration-300">
              🪙 {coin.name}
            </h3>
            <p className="text-gray-400 text-sm uppercase font-medium">
              {coin.symbol}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center w-8 h-8 bg-orange-500 text-black rounded-lg font-bold text-sm group-hover:bg-orange-400 transition-colors duration-300">
          #{coin.market_cap_rank}
        </div>
      </div>

      {/* Price and stats */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-gray-400 text-sm font-medium">📈 Current Price</span>
          <span className="text-white text-xl font-bold group-hover:text-orange-400 transition-colors duration-300">
            {formatPrice(coin.current_price)}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-400 text-sm font-medium">🔺 24h Change</span>
          <span
            className={`text-lg font-semibold ${
              isPositiveChange
                ? 'text-green-400 group-hover:text-green-300'
                : 'text-red-400 group-hover:text-red-300'
            } transition-colors duration-300`}
          >
            {formatPercentage(coin.price_change_percentage_24h)}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-400 text-sm font-medium">📊 Market Cap Rank</span>
          <span className="text-orange-400 text-lg font-bold group-hover:text-orange-300 transition-colors duration-300">
            #{coin.market_cap_rank}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CryptoCard;
