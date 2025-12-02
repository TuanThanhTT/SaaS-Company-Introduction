'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Save, Building2, Image as ImageIcon, ShoppingBag,
    FileText, MessageSquare, Mail, Database, Plus, Trash2, Upload
} from 'lucide-react';
import { useConfig } from './useConfig';

type TabType = 'info' | 'banners' | 'products' | 'content' | 'consultation' | 'advanced';

const tabs = [
    { id: 'info', label: 'Thông tin chung', icon: Building2 },
    { id: 'banners', label: 'Banners & Giao diện', icon: ImageIcon },
    { id: 'products', label: 'Sản phẩm', icon: ShoppingBag },
    { id: 'content', label: 'Blog & Đánh giá', icon: FileText },
    { id: 'consultation', label: 'Form tư vấn', icon: Mail },
    { id: 'advanced', label: 'Cấu hình & Schema', icon: Database },
];

export default function SettingsContent() {
    const { config, updateConfig, handleSave, saved } = useConfig();
    const [activeTab, setActiveTab] = useState<TabType>('info');

    const handleUpdate = (section: string, key: string, value: any) => {
        const currentSection = config[section] || {};
        updateConfig(section, { ...currentSection, [key]: value });
    };

    const renderCompanyInfo = () => (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Tên doanh nghiệp</label>
                    <input
                        type="text"
                        value={config.organization?.name || ''}
                        onChange={(e) => handleUpdate('organization', 'name', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                        placeholder="Nhập tên công ty..."
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Slogan / Tagline</label>
                    <input
                        type="text"
                        value={config.organization?.slogan || ''}
                        onChange={(e) => handleUpdate('organization', 'slogan', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200"
                        placeholder="VD: Giải pháp công nghệ hàng đầu..."
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Email liên hệ</label>
                    <input
                        type="email"
                        value={config.organization?.email || ''}
                        onChange={(e) => handleUpdate('organization', 'email', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Hotline</label>
                    <input
                        type="text"
                        value={config.organization?.phone || ''}
                        onChange={(e) => handleUpdate('organization', 'phone', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200"
                    />
                </div>
                <div className="col-span-1 md:col-span-2 space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Địa chỉ trụ sở</label>
                    <input
                        type="text"
                        value={config.organization?.address || ''}
                        onChange={(e) => handleUpdate('organization', 'address', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200"
                    />
                </div>
            </div>

            <div className="border-t pt-6 mt-6">
                <h4 className="font-bold text-gray-800 mb-4">Logo thương hiệu</h4>
                <div className="flex items-center gap-6">
                    <div className="w-32 h-32 bg-gray-50 rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center overflow-hidden">
                        {config.organization?.logo ? (
                            <img src={config.organization.logo} alt="Logo" className="w-full h-full object-contain p-2" />
                        ) : (
                            <span className="text-gray-400 text-xs text-center px-2">Chưa có logo</span>
                        )}
                    </div>
                    <div>
                        <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
                            <Upload className="w-4 h-4" /> Tải lên Logo mới
                        </button>
                        <p className="text-xs text-gray-500 mt-2">Định dạng: PNG, JPG, SVG. Tối đa 2MB.</p>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderBanners = () => (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h4 className="text-lg font-bold text-gray-800">Danh sách Banner trang chủ</h4>
                <button className="px-3 py-1.5 bg-indigo-50 text-indigo-600 rounded-lg text-sm font-medium hover:bg-indigo-100 transition-colors flex items-center gap-2">
                    <Plus className="w-4 h-4" /> Thêm Banner
                </button>
            </div>
            <div className="grid grid-cols-1 gap-4">
                {[1, 2].map((i) => (
                    <div key={i} className="flex gap-4 p-4 border border-gray-200 rounded-xl bg-gray-50 items-center">
                        <div className="w-24 h-16 bg-gray-200 rounded-lg flex-shrink-0" />
                        <div className="flex-1">
                            <h5 className="font-semibold text-gray-800 text-sm">Banner quảng cáo {i}</h5>
                            <p className="text-xs text-gray-500">Subtitle mô tả ngắn gọn...</p>
                        </div>
                        <div className="flex gap-2">
                            <button className="p-2 hover:bg-white rounded-lg text-gray-500 transition-colors"><Database className="w-4 h-4" /></button>
                            <button className="p-2 hover:bg-red-100 text-red-500 rounded-lg transition-colors"><Trash2 className="w-4 h-4" /></button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    const renderProducts = () => (
        <div className="space-y-6">
            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-xl text-sm text-yellow-800 mb-4">
                Phần này quản lý danh sách sản phẩm/dịch vụ hiển thị trên trang chủ và trang danh mục.
            </div>
            <div className="space-y-3">
                <button className="w-full py-3 border-2 border-dashed border-gray-300 rounded-xl text-gray-500 text-sm font-medium hover:border-indigo-500 hover:text-indigo-600 transition-all flex items-center justify-center gap-2">
                    <Plus className="w-4 h-4" /> Thêm sản phẩm mới
                </button>
            </div>
        </div>
    );

    const renderContent = () => (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
                <h4 className="font-bold text-gray-800 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-indigo-600" /> Blog Posts
                </h4>
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 text-center py-8">
                    <p className="text-gray-500 text-sm mb-3">Chưa có bài viết nào</p>
                    <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm shadow-sm hover:bg-gray-50">Viết bài mới</button>
                </div>
            </div>
            <div className="space-y-4">
                <h4 className="font-bold text-gray-800 flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-indigo-600" /> Testimonials
                </h4>
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 text-center py-8">
                    <p className="text-gray-500 text-sm mb-3">Chưa có đánh giá khách hàng</p>
                    <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm shadow-sm hover:bg-gray-50">Thêm đánh giá</button>
                </div>
            </div>
        </div>
    );

    const renderConsultation = () => (
        <div className="space-y-6">
            <h4 className="text-lg font-bold text-gray-800">Cấu hình Form tư vấn</h4>
            <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-xl bg-white">
                    <div>
                        <p className="font-semibold text-gray-800">Bật form trên trang chủ</p>
                        <p className="text-xs text-gray-500">Hiển thị form đăng ký tư vấn ở cuối trang</p>
                    </div>
                    <input type="checkbox" className="toggle w-10 h-6" defaultChecked />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Email nhận thông báo</label>
                    <input type="email" placeholder="consultation@company.com" className="w-full px-4 py-3 rounded-xl border border-gray-200" />
                </div>
            </div>
        </div>
    );

    const renderAdvanced = () => (
        <div className="space-y-6">
            <div className="p-4 bg-blue-50 border border-blue-100 rounded-xl">
                <h4 className="font-bold text-blue-800 mb-2 flex items-center gap-2"><Database className="w-4 h-4" /> Schema Versions</h4>
                <div className="flex gap-4 text-sm">
                    <div className="flex-1 bg-white p-3 rounded shadow-sm">
                        <span className="block text-xs text-gray-400">Current Version</span>
                        <span className="font-mono font-bold">v2.1.0</span>
                    </div>
                    <div className="flex-1 bg-white p-3 rounded shadow-sm">
                        <span className="block text-xs text-gray-400">Last Updated</span>
                        <span className="font-mono font-bold">2025-11-20</span>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="pb-20">
            <div className="sticky top-[60px] z-20 bg-gray-50/95 backdrop-blur pt-2 pb-6 mb-4 border-b border-gray-200">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h3 className="text-2xl font-bold text-gray-800">Cài đặt doanh nghiệp</h3>
                        <p className="text-sm text-gray-500">Quản lý toàn bộ thông tin hiển thị trên website</p>
                    </div>
                    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={handleSave} className={`px-6 py-2.5 rounded-xl font-bold shadow-lg transition-all flex items-center gap-2 text-sm ${saved ? 'bg-green-600 text-white' : 'bg-indigo-600 text-white hover:bg-indigo-700'}`}>
                        <Save className="w-4 h-4" /> {saved ? 'Đã lưu thành công!' : 'Lưu thay đổi'}
                    </motion.button>
                </div>
                <div className="flex items-center gap-1 overflow-x-auto pb-2 no-scrollbar">
                    {tabs.map((tab) => {
                        const Icon = tab.icon;
                        const isActive = activeTab === tab.id;
                        return (
                            <button key={tab.id} onClick={() => setActiveTab(tab.id as TabType)} className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${isActive ? 'bg-white text-indigo-600 shadow-sm ring-1 ring-gray-200' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200/50'}`}>
                                <Icon className={`w-4 h-4 ${isActive ? 'text-indigo-600' : 'text-gray-400'}`} /> {tab.label}
                            </button>
                        );
                    })}
                </div>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 min-h-[400px]">
                <AnimatePresence mode="wait">
                    <motion.div key={activeTab} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} transition={{ duration: 0.2 }}>
                        {activeTab === 'info' && renderCompanyInfo()}
                        {activeTab === 'banners' && renderBanners()}
                        {activeTab === 'products' && renderProducts()}
                        {activeTab === 'content' && renderContent()}
                        {activeTab === 'consultation' && renderConsultation()}
                        {activeTab === 'advanced' && renderAdvanced()}
                    </motion.div>
                </AnimatePresence>
            </div>
        </motion.div>
    );
}