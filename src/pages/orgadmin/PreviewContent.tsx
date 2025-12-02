'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, ArrowRight, Send } from 'lucide-react'; // Bỏ Star nếu không dùng
import Logo_left from '@/components/logo_left.svg';
import { useConfig } from './useConfig';

export default function PreviewContent() {
    const { config } = useConfig();
    const { organization, theme, consultation } = config;

    // Helper để lấy màu chủ đạo
    const primaryColor = theme?.primary_color || '#1e3a8a';

    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-gray-100 min-h-screen pb-20 font-sans">
            {/* Browser Bar */}
            <div className="bg-gray-800 text-gray-400 px-4 py-2 text-xs flex items-center gap-2 rounded-t-xl mx-auto max-w-6xl mt-4">
                <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                </div>
                <div className="bg-gray-700 flex-1 text-center rounded py-0.5 mx-4">
                    {organization?.name?.toLowerCase().replace(/\s/g, '') || 'company'}.vn
                </div>
            </div>

            {/* Preview Site */}
            <div className="bg-white mx-auto max-w-6xl shadow-2xl min-h-[800px] overflow-hidden rounded-b-xl border-x border-b border-gray-200">
                <header className="sticky top-0 z-50 bg-white/95 backdrop-blur shadow-sm">
                    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <img src={organization?.logo || Logo_left} alt="Logo" className="h-10 w-auto object-contain" />
                            <span className="font-bold text-xl text-gray-800 hidden md:block">{organization?.name || "Tên Doanh Nghiệp"}</span>
                        </div>
                        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
                            <a href="#" className="hover:text-indigo-600">Trang chủ</a>
                            <a href="#" className="hover:text-indigo-600">Sản phẩm</a>
                            <a href="#" className="hover:text-indigo-600">Bài viết</a>
                            <a href="#" className="hover:text-indigo-600">Liên hệ</a>
                        </nav>
                        <button style={{ backgroundColor: primaryColor }} className="px-5 py-2 text-white text-sm font-medium rounded-full hover:opacity-90 transition-opacity">Liên hệ ngay</button>
                    </div>
                </header>

                <section className="relative bg-gray-50 py-20 lg:py-32 overflow-hidden">
                    <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">{organization?.slogan || "Nâng tầm giá trị doanh nghiệp của bạn"}</h1>
                            <p className="text-lg text-gray-600 mb-8 max-w-lg">{organization?.blog?.substring(0, 150) || "Mô tả ngắn về doanh nghiệp sẽ hiển thị tại đây..."}...</p>
                            <div className="flex gap-4">
                                <button style={{ backgroundColor: primaryColor }} className="px-8 py-3.5 text-white font-bold rounded-xl shadow-lg hover:-translate-y-1 transition-transform flex items-center gap-2">Khám phá ngay <ArrowRight className="w-4 h-4" /></button>
                                <button className="px-8 py-3.5 bg-white text-gray-700 font-bold rounded-xl shadow border border-gray-200 hover:bg-gray-50 transition-colors">Xem hồ sơ</button>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 opacity-20 blur-2xl rounded-full" style={{ backgroundColor: primaryColor }}></div>
                            <img src={organization?.images?.[0] || "https://via.placeholder.com/600x400?text=Banner+Image"} alt="Hero Banner" className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]" />
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sản phẩm & Dịch vụ</h2>
                            <div className="w-20 h-1 mx-auto rounded" style={{ backgroundColor: primaryColor }}></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[1, 2, 3].map((item) => (
                                <div key={item} className="group rounded-2xl border border-gray-100 bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                                    <div className="h-48 bg-gray-200 w-full flex items-center justify-center text-gray-400"><span className="text-sm">Ảnh sản phẩm {item}</span></div>
                                    <div className="p-6">
                                        <h3 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors">Sản phẩm mẫu {item}</h3>
                                        <p className="text-sm text-gray-500 mb-4">Mô tả ngắn gọn về sản phẩm.</p>
                                        <span className="font-bold" style={{ color: primaryColor }}>Liên hệ báo giá</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col md:flex-row gap-12 items-center">
                            <div className="md:w-1/2">
                                <img src={organization?.images?.[1] || "https://via.placeholder.com/600x400?text=About+Image"} className="rounded-2xl shadow-xl w-full" />
                            </div>
                            <div className="md:w-1/2">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Về chúng tôi</h2>
                                <div className="prose text-gray-600 mb-6 whitespace-pre-line">{organization?.blog || "Nội dung giới thiệu doanh nghiệp chi tiết sẽ hiển thị ở đây."}</div>
                            </div>
                        </div>
                    </div>
                </section>

                {consultation?.enable !== false && (
                    <section className="py-20 bg-white relative overflow-hidden">
                        <div className="absolute inset-0 opacity-5" style={{ backgroundColor: primaryColor }}></div>
                        <div className="container mx-auto px-6 relative z-10">
                            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
                                <div className="md:w-5/12 p-10 text-white flex flex-col justify-between" style={{ backgroundColor: primaryColor }}>
                                    <div>
                                        <h3 className="text-2xl font-bold mb-4">Đăng ký tư vấn</h3>
                                        <p className="opacity-90 text-sm mb-6">Để lại thông tin, chúng tôi sẽ liên hệ lại ngay.</p>
                                    </div>
                                    <div className="space-y-4 text-sm opacity-90">
                                        <div className="flex items-center gap-3"><Phone className="w-4 h-4" /> {organization?.phone || "0123 456 789"}</div>
                                        <div className="flex items-center gap-3"><Mail className="w-4 h-4" /> {organization?.email || "contact@example.com"}</div>
                                    </div>
                                </div>
                                <div className="md:w-7/12 p-10">
                                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                        <div className="grid grid-cols-2 gap-4">
                                            <input type="text" placeholder="Họ tên" className="w-full px-4 py-3 bg-gray-50 rounded-lg text-sm border-none focus:ring-2 focus:ring-indigo-100" />
                                            <input type="text" placeholder="Số điện thoại" className="w-full px-4 py-3 bg-gray-50 rounded-lg text-sm border-none focus:ring-2 focus:ring-indigo-100" />
                                        </div>
                                        <input type="email" placeholder="Email" className="w-full px-4 py-3 bg-gray-50 rounded-lg text-sm border-none focus:ring-2 focus:ring-indigo-100" />
                                        <textarea rows={3} placeholder="Nội dung..." className="w-full px-4 py-3 bg-gray-50 rounded-lg text-sm border-none focus:ring-2 focus:ring-indigo-100"></textarea>
                                        <button style={{ backgroundColor: primaryColor }} className="w-full py-3 text-white font-bold rounded-lg shadow hover:opacity-90 transition-all flex justify-center items-center gap-2"><Send className="w-4 h-4" /> Gửi yêu cầu</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                <footer className="bg-gray-900 text-gray-300 py-12">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-800 pb-8 mb-8">
                            <div className="col-span-1 md:col-span-2">
                                <img src={organization?.logo || Logo_left} className="h-8 mb-4 brightness-0 invert opacity-80" />
                                <p className="text-sm text-gray-400 max-w-sm">{organization?.slogan || "Doanh nghiệp uy tín hàng đầu."}</p>
                            </div>
                            <div>
                                <h4 className="text-white font-bold mb-4">Liên hệ</h4>
                                <ul className="space-y-2 text-sm text-gray-400">
                                    <li className="flex gap-2"><MapPin className="w-4 h-4 flex-shrink-0" /> {organization?.address || "Hà Nội"}</li>
                                    <li className="flex gap-2"><Phone className="w-4 h-4 flex-shrink-0" /> {organization?.phone || "0123 456 789"}</li>
                                    <li className="flex gap-2"><Mail className="w-4 h-4 flex-shrink-0" /> {organization?.email || "admin@example.com"}</li>
                                </ul>
                            </div>
                            {/* ... */}
                        </div>
                        <div className="text-center text-xs text-gray-500">© {new Date().getFullYear()} {organization?.name}. All rights reserved.</div>
                    </div>
                </footer>
            </div>
        </motion.div>
    );
}