// src/components/TechHub/Sidebar.tsx
import React from 'react';

const Sidebar: React.FC = () => {
  const tags = ['#AI', '#Startup', '#Web3', '#IoT', '#5G', '#Blockchain', '#Cloud'];

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="font-bold text-lg mb-4 text-gray-800">Chủ đề hot</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <a
        href="#"
        className="block text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-bold hover:opacity-90 transition"
      >
        XEM SỰ KIỆN SẮP TỚI
      </a>
    </div>
  );
};

export default Sidebar;