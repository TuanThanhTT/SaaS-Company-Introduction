// src/components/TechHub/NewsGrid.tsx
import React from 'react';

export default function NewsGrid() {
  const news = [
    { title: "Startup AI Việt Nam gọi vốn 10 triệu USD", time: "2 giờ trước", likes: 89 },
    { title: "Việt Nam chính thức triển khai 5G toàn quốc", time: "5 giờ trước", likes: 156 },
    { title: "Metaverse: Cơ hội hay chỉ là bong bóng?", time: "1 ngày trước", likes: 201 },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4">Tin công nghệ nóng hổi</h2>
          <p className="text-xl text-gray-600">Cập nhật mỗi ngày từ cộng đồng TechHub</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item, i) => (
            <div key={i} className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-4 transition-all duration-500">
              <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-500"></div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-3 group-hover:text-purple-600 transition-colors">
                  {item.title}
                </h3>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{item.time}</span>
                  <span>❤️ {item.likes}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}