// src/components/TechHub/Header.tsx
import React from 'react';
import { Search, Bell, Menu } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
              TH
            </div>
            <span className="ml-3 text-xl font-bold text-gray-800">TechHub</span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200">
              Trang chủ
            </a>
            <a href="#" className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200">
              Tin tức
            </a>
            <a href="#" className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200">
              Sự kiện
            </a>
            <a href="#" className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200">
              Khởi nghiệp
            </a>
            <a href="#" className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200">
              Học tập
            </a>
          </nav>

          {/* Right: Search, Notification, Avatar, Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="hidden sm:block relative">
              <input
                type="text"
                placeholder="Tìm kiếm bài viết, sự kiện..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 w-56 transition-all"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>

            {/* Notification */}
            <button className="relative p-2 text-gray-600 hover:text-purple-600 transition-colors">
              <Bell className="h-6 w-6" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* Avatar */}
            <div className="w-9 h-9 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
              A
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 text-gray-700 hover:text-purple-600">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;