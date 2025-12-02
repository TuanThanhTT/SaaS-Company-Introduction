import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ChatBookChat from './ChatBook';
import SettingsButton from './SettingsButton'; // Import component mới

// Component trang chủ đã cập nhật
interface ChatBookLandingProps {
  onNavigateToChat: () => void;
}

const ChatBookLanding = ({ onNavigateToChat }: ChatBookLandingProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const landingRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (landingRef.current) {
      const rect = landingRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x, y });
    }
  };

  return (
    <div
      className="min-h-screen relative overflow-hidden bg-white"
      onMouseMove={handleMouseMove}
      ref={landingRef}
    >


  



      {/*... các phần tử nền và header khác giữ nguyên ...*/}
      {/* Water Ripple Effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(34, 211, 238, 0.25) 0%, transparent 50%)`,
          filter: 'blur(20px)',
          animation: 'ripple 1.5s infinite',
          opacity: 0.7,
        }}
      />
      <style>
        {`
          @keyframes ripple {
            0% {
              transform: scale(1);
              opacity: 0.7;
            }
            50% {
              transform: scale(1.5);
              opacity: 0.4;
            }
            100% {
              transform: scale(1);
              opacity: 0.7;
            }
          }
        `}
      </style>
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full blur-3xl opacity-20 animate-pulse -top-20 -left-20"></div>
        <div className="absolute w-80 h-80 bg-gradient-to-r from-sky-300 to-blue-500 rounded-full blur-3xl opacity-15 top-1/4 right-1/4 animate-bounce" style={{ animationDuration: '6s' }}></div>
        <div className="absolute w-72 h-72 bg-gradient-to-r from-cyan-200 to-blue-400 rounded-full blur-2xl opacity-12 bottom-1/4 left-1/3 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute w-64 h-64 bg-gradient-to-r from-blue-300 to-sky-400 rounded-full blur-2xl opacity-10 bottom-10 right-10 animate-bounce" style={{ animationDuration: '8s', animationDelay: '1s' }}></div>
        <div className="absolute w-48 h-48 bg-gradient-to-br from-white to-cyan-100 rounded-full blur-xl opacity-25 top-1/2 left-1/4 animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute w-56 h-56 bg-gradient-to-br from-sky-200 to-blue-300 rounded-full blur-xl opacity-18 top-3/4 right-1/3 animate-bounce" style={{ animationDuration: '7s', animationDelay: '3s' }}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-cyan-50/80 to-blue-100/60"></div>
      </div>

      {/* Header */}
      <nav className="relative z-10 flex items-center px-4 md:px-8 py-6 max-w-7xl mx-auto">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">ChatBook AI</h1>
          <p className="text-xs md:text-sm text-gray-600 font-medium">Khám phá cuốn sách yêu thích cùng Trí tuệ nhân tạo</p>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-4 md:px-8 mt-4 md:mt-8 max-w-7xl mx-auto min-h-[75vh]">
        {/* Left Side */}
        <div className="flex-1 max-w-xl text-center md:text-left">
          <div className="flex justify-center md:justify-start items-center space-x-3 mt-8 md:mt-0 mb-8">
            <span className="text-sm font-medium text-gray-800">CÔNG NGHỆ AI</span>
            <div className="flex space-x-1">
              <div className="w-5 h-5 rounded-full bg-green-400"></div>
              <div className="w-5 h-5 rounded-full bg-blue-500"></div>
              <div className="w-5 h-5 rounded-full bg-purple-400"></div>
              <div className="w-5 h-5 rounded-full bg-orange-500"></div>
            </div>
          </div>
          <div className="space-y-2 mb-8">
            <h2 className="text-5xl lg:text-7xl font-light text-gray-800 leading-none">Khám Phá</h2>
            <h2 className="text-5xl lg:text-7xl font-light text-gray-800 leading-none">Cuốn Sách</h2>
            <h2 className="text-5xl lg:text-7xl font-bold text-blue-600 leading-none">Yêu Thích</h2>
          </div>
          <button
            onClick={onNavigateToChat}
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-xl font-medium text-lg transition-all duration-200 transform hover:scale-105"
          >
            Tìm Sách Của Tôi
          </button>
        </div>

        {/* Right Side - 3D Element (Hidden on small screens) */}
        <div className="flex-1 justify-center md:justify-end items-center relative mt-12 md:mt-0 hidden md:flex">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[30rem] lg:h-[30rem] z-10">
            <div className="absolute inset-0">
              <div className="w-full h-full bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 rounded-[3rem] transform rotate-12 opacity-70"></div>
            </div>
            <div className="absolute inset-2">
              <div className="w-full h-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-[2.5rem] transform -rotate-6 shadow-2xl"></div>
            </div>
            <div className="absolute inset-6">
              <div className="w-full h-full bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-[2rem] transform rotate-3 shadow-xl"></div>
            </div>
            <div className="absolute inset-12">
              <div className="w-full h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-[1.5rem] transform -rotate-12"></div>
            </div>
            <div className="absolute inset-8 bg-gradient-to-br from-white/30 via-white/10 to-transparent rounded-xl transform rotate-6"></div>
            <div className="absolute top-12 left-12 w-16 h-16 bg-white/40 rounded-full blur-lg"></div>
          </div>
        </div>
      </div>

      {/* Render component SettingsButton đã tách ra */}
      <SettingsButton />

      {/* Floating Chat Button and Settings Button */}
      <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-20">
        <div className="relative group">
          <button
            onClick={onNavigateToChat}
            className="bg-blue-500 hover:bg-blue-600 text-white p-3 md:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
          >
            <svg
              className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-3 h-3 md:w-4 md:h-4 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-xs font-bold text-white">!</span>
            </div>
            <div className="absolute inset-0 rounded-full bg-blue-400 opacity-30 animate-ping"></div>
          </button>
          <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap hidden sm:block">
            Trò chuyện với AI
            <div className="absolute top-full right-4 border-4 border-transparent border-t-gray-800"></div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-400 rounded-full opacity-60 animate-pulse z-10 hidden sm:block"></div>
      <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-cyan-400 rounded-full opacity-40 animate-bounce z-10 hidden sm:block"></div>
      <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-sky-400 rounded-full opacity-50 z-10 hidden sm:block"></div>
    </div>
  );
};

// Component chính với animation chuyển trang
const ChatBookApp = () => {
  const [currentPage, setCurrentPage] = useState('landing');

  const navigateToChat = () => {
    setCurrentPage('chat');
  };

  const navigateBack = () => {
    setCurrentPage('landing');
  };

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {currentPage === 'landing' ? (
          <div key="landing">
            <ChatBookLanding onNavigateToChat={navigateToChat} />
          </div>
        ) : (
          <motion.div
            key="chat"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <ChatBookChat onNavigateBack={navigateBack} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatBookApp;