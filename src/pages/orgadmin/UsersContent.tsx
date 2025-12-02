'use client';

import { useState } from 'react'; // 1. Import useState
import { motion } from 'framer-motion';
import { Plus, Eye as EyeIcon, Edit, Lock, Search } from 'lucide-react'; // 2. Import icon Search

const UsersContent = () => {
    // 3. State lưu từ khóa tìm kiếm
    const [searchTerm, setSearchTerm] = useState('');

    const ActionButton = ({ icon: Icon, color, label }: { icon: any; color: string; label: string }) => (
        <div className="relative group">
            <button className={`p-2 rounded-lg ${color} text-white hover:scale-110 transition-all duration-200 shadow hover:shadow-md`}>
                <Icon className="w-3.5 h-3.5" />
            </button>
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 px-2 py-1 bg-gray-900 text-white text-[10px] rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow">
                {label}
            </span>
        </div>
    );

    const users = [
        { name: 'Nguyễn Văn Admin', email: 'admin@techabc.vn', role: 'Admin' },
        { name: 'Trần Thị User', email: 'user@techabc.vn', role: 'User' },
        { name: 'Lê Văn Dev', email: 'dev@techabc.vn', role: 'User' }, // Thêm user ví dụ để test tìm kiếm
        { name: 'Phạm Thị Tester', email: 'tester@techabc.vn', role: 'User' },
    ];

    // 4. Logic lọc user theo tên hoặc email (không phân biệt hoa thường)
    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden text-sm">
            <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-center bg-indigo-50 gap-4">
                <h3 className="text-xl font-bold text-gray-800">Quản lý người dùng</h3>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                    {/* 5. Giao diện ô tìm kiếm */}
                    <div className="relative w-full sm:w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Tìm tên hoặc email..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-sm"
                        />
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium shadow hover:shadow-md transition-all flex items-center gap-2 text-sm whitespace-nowrap"
                    >
                        <Plus className="w-4 h-4" /> <span className="hidden sm:inline">Thêm mới</span>
                    </motion.button>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase">Tên</th>
                            <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase">Email</th>
                            <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase">Vai trò</th>
                            <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase">Thao tác</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {/* 6. Render danh sách đã lọc (filteredUsers) thay vì users gốc */}
                        {filteredUsers.length > 0 ? (
                            filteredUsers.map((user, idx) => (
                                <motion.tr key={idx} whileHover={{ backgroundColor: '#f8fafc' }}>
                                    <td className="px-6 py-4 font-medium text-gray-900">{user.name}</td>
                                    <td className="px-6 py-4 text-gray-600">{user.email}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${user.role === 'Admin' ? 'bg-pink-600 text-white' : 'bg-green-600 text-white'}`}>
                                            {user.role}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <ActionButton icon={EyeIcon} color="bg-cyan-500" label="Xem" />
                                            <ActionButton icon={Edit} color="bg-indigo-600" label="Sửa" />
                                            {user.role !== 'Admin' && (
                                                <ActionButton icon={Lock} color="bg-amber-600" label="Khóa" />
                                            )}
                                        </div>
                                    </td>
                                </motion.tr>
                            ))
                        ) : (
                            // 7. Hiển thị thông báo khi không tìm thấy kết quả
                            <tr>
                                <td colSpan={4} className="px-6 py-8 text-center text-gray-500">
                                    Không tìm thấy người dùng nào phù hợp với "{searchTerm}"
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </motion.div>
    );
};

export default function UsersPage() {
    return <UsersContent />;
}