'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Home, Users, Settings, Eye, Menu, LogOut, Palette
} from 'lucide-react';
import Logo_left from '@/components/logo_left.svg';
import Logo from '@/components/logo.svg';
import LogoMini from '@/components/logo_mini.svg';
import DashboarContent from './DashboarContent';
import UsersContent from './UsersContent';
import SettingsContent from './SettingsContent';
import PreviewContent from './PreviewContent';
import { ConfigProvider, useConfig } from './useConfig';

type View = 'dashboard' | 'users' | 'settings' | 'preview';

// --- Component Content ---
function OrgAdminLayoutContent() {
    // 1. Chỉ sử dụng config từ useConfig, XÓA bỏ useState cục bộ
    const { config, updateConfig } = useConfig();

    const [currentView, setCurrentView] = useState<View>('dashboard');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const [showColorPicker, setShowColorPicker] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

    // ĐÃ XÓA: const [config, setConfig] = useState(defaultConfig); -> Gây lỗi trùng tên
    // ĐÃ XÓA: useEffect load 'theme_primary_color' -> Gây lỗi logic

    const colorThemes = [
        { name: 'Xanh dương', value: '#1e3a8a' },
        { name: 'Xanh lá', value: '#0e9d6eff' },
        { name: 'Tím', value: '#714acbff' },
        { name: 'Hồng', value: '#e24493ff' },
        { name: 'Cam', value: '#e36b15ff' },
        { name: 'Xám', value: '#6b7280' }
    ];

    const changeThemeColor = (color: string) => {
        // 2. Cập nhật State toàn cục
        // Lưu ý: merge với config.theme cũ để không mất các thuộc tính khác trong theme
        const newTheme = { ...config.theme, primary_color: color };
        updateConfig("theme", newTheme);

        // 3. FIX LỖI F5: Lưu ngay lập tức vào localStorage key "orgConfig"
        // Vì ConfigProvider chỉ đọc "orgConfig" khi khởi động
        const newConfig = {
            ...config,
            theme: newTheme
        };
        localStorage.setItem('orgConfig', JSON.stringify(newConfig));

        setShowColorPicker(false);
    };

    const navGroups = [
        {
            title: "QUẢN LÝ",
            items: [
                { id: 'dashboard', name: 'Tổng quan', icon: Home },
                { id: 'users', name: 'Người dùng', icon: Users },
            ],
        },
        {
            title: "HỆ THỐNG",
            items: [
                { id: 'settings', name: 'Cài đặt', icon: Settings },
                { id: 'preview', name: 'Xem trước', icon: Eye },
            ],
        },
    ];

    // Tính toán tên trang hiện tại
    const currentPageName = navGroups
        .flatMap(group => group.items)
        .find(item => item.id === currentView)?.name || 'Tổng quan';

    const Sidebar = () => (
        <aside
            className={`${isSidebarCollapsed ? 'w-20' : 'w-64'} text-white flex flex-col h-full shadow-xl border-r border-white/10 transition-all duration-300`}
            // Sử dụng config từ Context
            style={{ backgroundColor: config.theme?.primary_color || '#1e3a8a' }}
        >
            <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`${isSidebarCollapsed ? 'h-16' : 'h-36'} mt-0 pt-0 transition-all duration-300 flex items-center justify-center`}
            >
                <img
                    src={isSidebarCollapsed ? LogoMini : Logo_left}
                    alt="Logo"
                    className={`mx-auto drop-shadow-xl transition-all duration-300 object-contain ${isSidebarCollapsed ? 'h-10 w-10' : 'h-full w-auto p-2'}`}
                />
            </motion.div>

            <nav className="flex-1 px-4 pt-0 pb-4 space-y-4">
                {navGroups.map((group, idx) => (
                    <div key={idx}>
                        {!isSidebarCollapsed && (
                            <div className="px-2 py-1 text-[10px] font-semibold text-white uppercase tracking-wider opacity-90">
                                {group.title}
                            </div>
                        )}
                        <div className="space-y-2">
                            {group.items.map(item => {
                                const Icon = item.icon as any;
                                const active = currentView === item.id;
                                return (
                                    <motion.button
                                        key={item.id}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => { setCurrentView(item.id as View); setIsSidebarOpen(false); }}
                                        className={`w-full flex items-center ${isSidebarCollapsed ? 'justify-center px-3 py-3 rounded-xl' : 'px-4 py-3 rounded-2xl'} text-xs font-medium transition-all duration-200 ${active ? 'bg-white/20 backdrop-blur-md text-white shadow-lg border border-white/20' : 'hover:bg-white/15 hover:backdrop-blur-md hover:border hover:border-white/10'}`}
                                    >
                                        <Icon className="w-5 h-5" />
                                        {!isSidebarCollapsed && <span className="ml-3 tracking-wide">{item.name}</span>}
                                    </motion.button>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </nav>

            <div className="p-4 border-t border-white/10">
                <motion.button
                    onClick={() => setShowColorPicker(!showColorPicker)}
                    className={`w-full flex items-center ${isSidebarCollapsed ? 'justify-center' : 'justify-between'} px-4 py-3 rounded-xl text-white font-medium transition-all duration-200 mb-2 border border-white/10 bg-white/10`}
                >
                    <Palette className="w-4 h-4" />
                    {!isSidebarCollapsed && <span className="text-xs">Màu sắc</span>}
                </motion.button>
                {showColorPicker && !isSidebarCollapsed && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="grid grid-cols-3 gap-2 mt-2">
                        {colorThemes.map((color, index) => (
                            <button key={index} onClick={() => changeThemeColor(color.value)} className="w-full h-7 rounded-lg border-2 border-white/30" style={{ backgroundColor: color.value }} />
                        ))}
                    </motion.div>
                )}
            </div>
        </aside>
    );

    return (
        // Thêm safe check cho theme
        <div className="flex min-h-screen bg-gray-50" style={{ '--theme-color': config.theme?.primary_color } as any}>
            {/* Desktop Sidebar */}
            <div className={`hidden lg:block fixed inset-y-0 left-0 z-50 transition-all duration-300 ${isSidebarCollapsed ? 'w-20' : 'w-64'}`}>
                <Sidebar />
            </div>

            {/* Mobile Sidebar */}
            {isSidebarOpen && (
                <>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 bg-black/60 z-40 lg:hidden" onClick={() => setIsSidebarOpen(false)} />
                    <motion.div initial={{ x: -300 }} animate={{ x: 0 }} className="fixed inset-y-0 left-0 z-50 lg:hidden">
                        <Sidebar />
                    </motion.div>
                </>
            )}

            {/* Main Content */}
            <div className={`flex-1 transition-all duration-300 ${isSidebarCollapsed ? 'lg:ml-20' : 'lg:ml-64'} flex flex-col min-h-screen`}>
                <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-30">
                    <div className="px-6 py-3 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <button onClick={() => setIsSidebarOpen(true)} className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200 lg:hidden transition-all duration-200">
                                <Menu className="w-5 h-5 text-gray-700" />
                            </button>
                            <button onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)} className="hidden lg:flex p-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition-all duration-200">
                                <Menu className={`w-5 h-5 text-gray-700 transition-transform duration-300 ${isSidebarCollapsed ? "rotate-180" : "rotate-0"}`} />
                            </button>
                            <h1 className="text-xl font-bold text-gray-800">
                                {currentPageName}
                            </h1>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="text-right hidden md:block">
                                <p className="font-semibold text-gray-800 text-sm">Admin User</p>
                                <p className="text-xs text-gray-500">admin@techabc.vn</p>
                            </div>
                            <div className="relative">
                                <motion.button whileHover={{ scale: 1.05 }} onClick={() => setIsUserMenuOpen(!isUserMenuOpen)} className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg hover:shadow-xl transition-all duration-200 relative">
                                    AU
                                </motion.button>
                                {isUserMenuOpen && (
                                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="absolute right-0 top-12 w-48 bg-white rounded-xl shadow-2xl border border-gray-200 py-2 z-40">
                                        <button className="w-full px-4 py-3 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-3 transition-colors duration-200">
                                            <Settings className="w-4 h-4" /> Cài đặt tài khoản
                                        </button>
                                        <button className="w-full px-4 py-3 text-left text-sm text-red-600 hover:bg-gray-50 flex items-center gap-3 border-t border-gray-100 transition-colors duration-200">
                                            <LogOut className="w-4 h-4" /> Đăng xuất
                                        </button>
                                    </motion.div>
                                )}
                            </div>
                        </div>
                    </div>
                </header>

                <main className="p-6 lg:p-8 flex-1">
                    {currentView === 'dashboard' && <DashboarContent />}
                    {currentView === 'users' && <UsersContent />}
                    {currentView === 'settings' && <SettingsContent />}
                    {currentView === 'preview' && <PreviewContent />}
                </main>

                <footer className="bg-white border-t border-gray-200 py-8">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            <div className="col-span-1">
                                <img src={Logo} alt="Logo" className="h-36 mb-0 mx-auto" />
                                <p className="text-gray-600 text-sm">
                                    Giải pháp công nghệ hàng đầu cho doanh nghiệp Việt Nam
                                </p>
                            </div>

                            <div className="my-6">
                                <h4 className="font-semibold text-gray-800 mb-4 text-sm">Về chúng tôi</h4>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li><a href="#" className="hover:text-indigo-600 transition-colors duration-200">Giới thiệu</a></li>
                                    <li><a href="#" className="hover:text-indigo-600 transition-colors duration-200">Đội ngũ</a></li>
                                    <li><a href="#" className="hover:text-indigo-600 transition-colors duration-200">Tin tức</a></li>
                                </ul>
                            </div>

                            <div className="my-6">
                                <h4 className="font-semibold text-gray-800 mb-4 text-sm">Dịch vụ</h4>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li><a href="#" className="hover:text-indigo-600 transition-colors duration-200">Phát triển web</a></li>
                                    <li><a href="#" className="hover:text-indigo-600 transition-colors duration-200">Mobile App</a></li>
                                    <li><a href="#" className="hover:text-indigo-600 transition-colors duration-200">Cloud Solution</a></li>
                                </ul>
                            </div>

                            <div className="my-6">
                                <h4 className="font-semibold text-gray-800 mb-4 text-sm">Liên hệ</h4>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li className="flex items-center gap-2">📞 0123 456 789</li>
                                    <li className="flex items-center gap-2">✉️ contact@techabc.vn</li>
                                    <li className="flex items-center gap-2">🏢 Hà Nội, Việt Nam</li>
                                </ul>
                            </div>

                        </div>
                        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-gray-500 text-xs">
                            © {new Date().getFullYear()} TechABC. Được xây dựng với niềm đam mê công nghệ.
                            <br />
                            Giấy phép kinh doanh số: 0108923476 do Sở KHĐT Hà Nội cấp ngày 15/03/2020
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default function OrgAdminLayout() {
    return (
        <ConfigProvider>
            <OrgAdminLayoutContent />
        </ConfigProvider>
    );
}