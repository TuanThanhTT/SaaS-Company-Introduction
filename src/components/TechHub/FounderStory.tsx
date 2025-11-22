// src/components/TechHub/FounderStory.tsx
import React from 'react';

const FounderStory = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold">
          NT
        </div>
        <div className="ml-3">
          <p className="font-bold">Nguyễn Trần</p>
          <p className="text-sm text-gray-500">CEO, AI Startup</p>
        </div>
      </div>
      <p className="text-gray-700 mb-4">
        "Từ ý tưởng trên giấy đến gọi vốn 2 triệu USD chỉ trong 6 tháng..."
      </p>
      <a href="#" className="text-purple-600 font-medium hover:underline">Đọc câu chuyện</a>
    </div>
  );
};

export default FounderStory;