// src/components/TechHub/EventCard.tsx
import React from 'react';

const EventCard: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white p-6 rounded-xl shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-bold">SẮP DIỄN RA</span>
        <span className="text-3xl font-bold">15/11</span>
      </div>
      <h3 className="text-xl font-bold mb-2">TechHack 2025</h3>
      <p className="text-sm mb-4 opacity-90">48 giờ lập trình – Giải thưởng 500 triệu đồng</p>
      <button className="bg-white text-purple-600 px-5 py-2 rounded-full font-bold text-sm hover:bg-gray-100 transition">
        ĐĂNG KÝ NGAY
      </button>
    </div>
  );
};

export default EventCard;