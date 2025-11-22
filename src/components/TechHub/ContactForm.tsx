// src/components/TechHub/ContactForm.tsx
import React from 'react';

export default function ContactForm() {
  return (
    <section className="py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Sẵn sàng tham gia?<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              Liên hệ ngay hôm nay!
            </span>
          </h2>
          <p className="text-xl text-gray-700">
            Đội ngũ TechHub luôn sẵn sàng hỗ trợ bạn 24/7
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          <form className="grid md:grid-cols-2 gap-8">
            <input type="text" placeholder="Họ và tên" className="px-6 py-4 rounded-xl border border-gray-200 focus:border-purple-500 focus:outline-none transition" />
            <input type="email" placeholder="Email" className="px-6 py-4 rounded-xl border border-gray-200 focus:border-purple-500 focus:outline-none transition" />
            <input type="text" placeholder="Số điện thoại" className="px-6 py-4 rounded-xl border border-gray-200 focus:border-purple-500 focus:outline-none transition" />
            <input type="text" placeholder="Chủ đề" className="px-6 py-4 rounded-xl border border-gray-200 focus:border-purple-500 focus:outline-none transition" />
            <textarea rows={6} placeholder="Nội dung bạn muốn trao đổi..." className="md:col-span-2 px-6 py-4 rounded-xl border border-gray-200 focus:border-purple-500 focus:outline-none transition"></textarea>
            
            <div className="md:col-span-2">
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-5 rounded-full text-xl font-bold hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                Gửi tin nhắn ngay
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}