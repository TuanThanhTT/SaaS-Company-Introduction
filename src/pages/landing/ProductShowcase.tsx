// src/components/TechHub/ProductShowcase.tsx
import React from 'react';
import { Check, Sparkles, Rocket, Users, Trophy } from 'lucide-react';

export default function ProductShowcase() {
  const features = [
    { icon: Sparkles, title: "Khóa học chất lượng cao", desc: "Học từ các chuyên gia thực chiến" },
    { icon: Rocket, title: "Hỗ trợ khởi nghiệp", desc: "Mentor 1-1, gọi vốn, legal support" },
    { icon: Users, title: "Cộng đồng 10.000+ thành viên", desc: "Kết nối founder, dev, investor" },
    { icon: Trophy, title: "Sự kiện & cuộc thi", desc: "Hackathon, pitch day, giải thưởng lớn" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-3 bg-purple-100 text-purple-700 px-6 py-3 rounded-full text-sm font-bold mb-8">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          Được hơn 10.000 người tin dùng
        </div>

        <h2 className="text-5xl md:text-6xl font-black mb-8">
          TechHub mang đến<br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            Tất cả những gì bạn cần
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="group bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center text-white mb-6 mx-auto">
                <f.icon className="w-9 h-9" />
              </div>
              <h3 className="text-xl font-bold mb-3">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}