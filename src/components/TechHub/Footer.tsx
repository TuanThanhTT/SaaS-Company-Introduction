// src/components/TechHub/Footer.tsx
import React from 'react';
import { Facebook, Youtube, Linkedin, Mail, MapPin, Phone, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Logo + Description */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-2xl font-bold">
                TH
              </div>
              <span className="ml-3 text-2xl font-bold">TechHub</span>
            </div>
            <p className="text-gray-400 mb-6">
              Cộng đồng công nghệ lớn nhất Việt Nam.<br />
              Nơi ý tưởng trở thành hiện thực.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-purple-600 transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-red-600 transition">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 transition">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Khám phá</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition">Sự kiện</a></li>
              <li><a href="#" className="hover:text-white transition">Khóa học</a></li>
              <li><a href="#" className="hover:text-white transition">Tin tức</a></li>
              <li><a href="#" className="hover:text-white transition">Khởi nghiệp</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Hỗ trợ</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition">Trung tâm trợ giúp</a></li>
              <li><a href="#" className="hover:text-white transition">Liên hệ</a></li>
              <li><a href="#" className="hover:text-white transition">Điều khoản</a></li>
              <li><a href="#" className="hover:text-white transition">Chính sách bảo mật</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-6">Nhận tin nóng hổi mỗi tuần</h3>
            <p className="text-gray-400 mb-4">Đăng ký để nhận bản tin công nghệ & sự kiện độc quyền</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Email của bạn"
                className="px-4 py-3 rounded-l-full bg-white/10 border border-white/20 flex-1 focus:outline-none focus:border-purple-500"
              />
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-r-full font-bold hover:shadow-lg transition">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-500">
          <p>© 2025 TechHub. Made with love in Vietnam.</p>
        </div>
      </div>
    </footer>
  );
}