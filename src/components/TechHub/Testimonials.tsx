// src/components/TechHub/Testimonials.tsx (file mới)
import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const stories = [
    { name: "Nguyễn Trần", role: "CEO, AI Startup", quote: "Gọi vốn 2 triệu USD chỉ trong 6 tháng nhờ kết nối từ TechHub", avatar: "NT" },
    { name: "Lan Anh", role: "Founder EdTech", quote: "Tìm được co-founder hoàn hảo tại sự kiện offline", avatar: "LA" },
    { name: "Minh Quân", role: "Fullstack Dev", quote: "Học được vô số kiến thức thực chiến từ mentor", avatar: "MQ" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold mb-4">Hàng nghìn người đã thay đổi</h2>
        <p className="text-xl text-gray-600 mb-16">Đây là câu chuyện của họ</p>

        <div className="grid md:grid-cols-3 gap-10">
          {stories.map((s, i) => (
            <div key={i} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 hover:shadow-2xl transition-all">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                {s.avatar}
              </div>
              <p className="text-lg italic mb-6">“{s.quote}”</p>
              <p className="font-bold">{s.name}</p>
              <p className="text-sm text-gray-600">{s.role}</p>
              <div className="flex justify-center mt-4 gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}