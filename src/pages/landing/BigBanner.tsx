// src/components/TechHub/BigBanner.tsx
import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function BigBanner() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 overflow-hidden">
      {/* Floating blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animation-delay-2000 animate-blob"></div>
        <div className="absolute top-40 right-40 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animation-delay-4000 animate-blob"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white mb-6">
          <Sparkles className="w-5 h-5" />
          <span className="text-sm font-medium">Cộng đồng công nghệ lớn nhất Việt Nam</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-8">
          Biến Ý Tưởng<br />
          Thành <span className="text-yellow-300">Hiện Thực</span>
        </h1>

        <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto">
          Kết nối với 10.000+ bạn trẻ đam mê công nghệ • Học tập • Khởi nghiệp • Thành công
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="group bg-white text-purple-600 px-10 py-6 rounded-full text-xl font-bold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3">
            Tham gia cộng đồng miễn phí
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </button>
          <button className="border-4 border-white text-white px-10 py-6 rounded-full text-xl font-bold hover:bg-white hover:text-purple-600 transition-all">
            Xem sự kiện sắp tới
          </button>
        </div>
      </div>
    </section>
  );
} 