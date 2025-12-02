// // src/pages/landing/Header.tsx
import React from 'react';
import { Search, Bell, Menu } from 'lucide-react';

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                        TH
                    </div>
                    <span className="text-2xl font-bold">TechHub</span>
                </div>
                <nav className="hidden md:flex items-center gap-8">
                    {['Trang chủ', 'Tin tức', 'Sự kiện', 'Khởi nghiệp', 'Học tập'].map((item) => (
                        <a key={item} href="#" className="text-gray-700 hover:text-purple-600 font-medium transition">
                            {item}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <button className="p-2 hover:bg-gray-100 rounded-full">
                        <Search className="w-5 h-5" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-full relative">
                        <Bell className="w-5 h-5" />
                        <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                    </button>
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold">
                        A
                    </div>
                    <button className="md:hidden">
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </header>
    );
}