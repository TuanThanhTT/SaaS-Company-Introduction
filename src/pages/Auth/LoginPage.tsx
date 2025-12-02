'use client';

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '@/components/logo.svg';
import BusinessIllustration from '@/components/business-illustration.svg'; // Thay bằng đường dẫn ảnh minh họa doanh nghiệp của bạn
import { motion } from 'framer-motion';
import { Building2, LogIn, User, Lock, Shield, Zap } from 'lucide-react';

const LoginPage: React.FC = () => {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setIsLoading(true);

        await new Promise(resolve => setTimeout(resolve, 1500));

        // Demo login: username = admin, password = 123456
        if (formData.username === 'admin' && formData.password === '123456') {
            navigate('/orgadmin');
        } else {
            setError('Tên đăng nhập hoặc mật khẩu không đúng. Thử: admin / 123456');
        }
        setIsLoading(false);
    };

    return (
        <div className="min-h-screen flex bg-gradient-to-br from-purple-50 via-white to-pink-50 relative">
            {/* Logo cố định góc trên bên trái - hiển thị trên mọi kích thước màn hình */}
            <div className="absolute top-6 left-6 z-50">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <img src={Logo} alt="Logo" className="h-32 drop-shadow-lg" />
                </motion.div>
            </div>

            {/* ==================== 60% - PHẦN TRANG TRÍ VỚI HÌNH ẢNH DOANH NGHIỆP ==================== */}
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="hidden lg:flex lg:w-3/5 items-center justify-center p-12 relative overflow-hidden"
            >
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-60 -translate-x-48 -translate-y-32" />
                    <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-200 rounded-full blur-3xl opacity-50 translate-x-32 translate-y-48" />
                </div>

                <div className="relative z-10 text-center">
                    {/* Hình minh họa doanh nghiệp ở trung tâm */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 80 }}
                        className="mb-10"
                    >
                        <img
                            src={BusinessIllustration}
                            alt="Giải pháp quản trị doanh nghiệp hiện đại"
                            className="w-full max-w-xs lg:max-w-sm 2xl:max-w-md mx-auto drop-shadow-2xl"
                        />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                        className="text-5xl lg:text-6xl font-extrabold text-gray-800 mb-6 
               tracking-tight 
               font-['Inter'] md:font-['Geist'] lg:font-['SF Pro Display'] 
               [text-shadow:0_4px_20px_rgba(0,0,0,0.1)]"
                    >
                        Chào mừng trở lại!
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9 }}
                        className="text-xl text-gray-700 leading-relaxed mb-10"
                    >
                        Hệ thống quản trị SaaS đa tổ chức<br />
                        <span className="text-purple-600 font-semibold">Giải pháp công nghệ hàng đầu Việt Nam</span>
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.1 }}
                        className="flex justify-center gap-10 text-gray-700"
                    >
                        <div className="flex items-center gap-4 bg-white/80 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-lg">
                            <Building2 className="w-10 h-10 text-purple-600" />
                            <div className="text-left">
                                <div className="font-bold text-lg">1000+</div>
                                <div className="text-sm">Doanh nghiệp tin dùng</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 bg-white/80 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-lg">
                            <Shield className="w-10 h-10 text-purple-600" />
                            <div className="text-left">
                                <div className="font-bold text-lg">Bảo mật</div>
                                <div className="text-sm">Tiêu chuẩn quốc tế</div>
                            </div>
                        </div>
                        <div className="  flex items-center gap-4 bg-white/80 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-lg">
                            <Zap className="w-10 h-10 text-pink-600" />
                            <div className="text-left">
                                <div className="font-bold text-lg">99.9%</div>
                                <div className="text-sm">Uptime đảm bảo</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            {/* ==================== 40% - FORM ĐĂNG NHẬP ==================== */}
            <div className="w-full lg:w-2/5 flex items-center justify-center p-8 bg-white">
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="w-full max-w-md"
                >
                    <div className="bg-white rounded-3xl shadow-2xl p-10 border border-gray-100">
                        <h2 className="text-4xl font-bold text-center text-gray-800 mb-3">
                            Đăng nhập quản trị
                        </h2>
                        <p className="text-center text-gray-600 mb-8 text-lg">
                            Truy cập bảng điều khiển tổ chức của bạn
                        </p>

                        {error && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-2xl text-sm font-medium"
                            >
                                {error}
                            </motion.div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Thay Email bằng Username */}
                            <div>
                                <label className="flex items-center gap-3 text-base font-semibold text-gray-700 mb-3">
                                    <User className="w-5 h-5 text-purple-600" />
                                    Tên đăng nhập
                                </label>
                                <input
                                    type="text"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    required
                                    disabled={isLoading}
                                    placeholder="admin"
                                    className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all outline-none text-gray-800 font-medium text-base"
                                />
                            </div>

                            <div>
                                <label className="flex items-center gap-3 text-base font-semibold text-gray-700 mb-3">
                                    <Lock className="w-5 h-5 text-purple-600" />
                                    Mật khẩu
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                    disabled={isLoading}
                                    placeholder="Nhập mật khẩu của bạn"
                                    className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all outline-none text-gray-800 font-medium text-base"
                                />
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                disabled={isLoading}
                                className="w-full py-5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-200 flex items-center justify-center gap-3 disabled:bg-gray-400 disabled:cursor-not-allowed"
                            >
                                {isLoading ? (
                                    <span className="flex items-center gap-3">
                                        <div className="w-5 h-5 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                                        Đang xác thực...
                                    </span>
                                ) : (
                                    <>
                                        <LogIn className="w-6 h-6" />
                                        Đăng nhập ngay
                                    </>
                                )}
                            </motion.button>
                        </form>

                        <div className="mt-8 text-center">
                            <Link to="/forgot-password" className="text-purple-600 hover:text-purple-800 font-semibold text-base">
                                Quên mật khẩu?
                            </Link>
                            <p className="mt-6 text-gray-600">
                                Chưa có tài khoản?{' '}
                                <Link to="/contact" className="text-purple-600 hover:text-purple-800 font-semibold">
                                    Liên hệ quản trị viên
                                </Link>
                            </p>
                            <p className="mt-6 text-sm text-gray-500 bg-gray-100 py-3 px-6 rounded-xl inline-block">
                                <strong>Demo:</strong> admin / 123456
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default LoginPage;