'use client';

import { motion } from 'framer-motion';
import {
    Users, Globe, Eye, TrendingUp, Activity,
    UserPlus, DollarSign, BarChart3, ArrowUpRight, ArrowDownRight
} from 'lucide-react';

const DashboardContent = () => {
    const mainCards = [
        { title: "Tổng người dùng", value: "1,248", change: "+12.5%", trend: "up", icon: Users, color: "from-indigo-500 to-blue-600" },
        { title: "Người dùng mới hôm nay", value: "89", change: "+28.3%", trend: "up", icon: UserPlus, color: "from-emerald-500 to-teal-600" },
        { title: "Trang web hoạt động", value: "12", change: "+2", trend: "up", icon: Globe, color: "from-cyan-500 to-blue-500" },
        { title: "Lượt truy cập hôm nay", value: "8,542", change: "+18.7%", trend: "up", icon: Eye, color: "from-amber-500 to-orange-600" },
        { title: "Doanh thu tháng", value: "₫2.4 tỷ", change: "+41.2%", trend: "up", icon: DollarSign, color: "from-pink-500 to-rose-600" },
        { title: "Doanh thu năm", value: "₫24.8 tỷ", change: "+33.9%", trend: "up", icon: BarChart3, color: "from-purple-500 to-violet-600" },
        { title: "Tỷ lệ chuyển đổi", value: "3.24%", change: "-2.1%", trend: "down", icon: TrendingUp, color: "from-rose-500 to-pink-600" },
        { title: "Hoạt động hệ thống", value: "98.7%", change: "+0.4%", trend: "up", icon: Activity, color: "from-lime-500 to-green-600" },
    ];

    const chartData = [
        { name: 'T2', visits: 4200, revenue: 1.8 },
        { name: 'T3', visits: 5800, revenue: 2.1 },
        { name: 'T4', visits: 4900, revenue: 1.9 },
        { name: 'T5', visits: 7200, revenue: 2.7 },
        { name: 'T6', visits: 8900, revenue: 3.2 },
        { name: 'T7', visits: 7400, revenue: 2.9 },
        { name: 'CN', visits: 8542, revenue: 3.4 },
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.1,
            }
        }
    };

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-10"
            >
                <h1 className="text-3xl font-bold text-gray-800">Chào mừng quay lại, Admin!</h1>
                <p className="text-base text-gray-600 mt-2">Dưới đây là tổng quan hoạt động hệ thống ngày hôm nay</p>
            </motion.div>

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
            >
                {mainCards.map((card, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ y: -12, scale: 1.03, transition: { duration: 0.3 } }}
                        className="group relative rounded-3xl bg-white shadow-xl border border-gray-100 overflow-hidden cursor-pointer"
                    >
                        <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-90`} />
                        <div className="relative p-6 text-white">
                            <div className="flex items-start justify-between">
                                <div className="flex-1">
                                    <p className="text-sm font-medium opacity-90">{card.title}</p>
                                    <p className="text-3xl font-extrabold mt-3">{card.value}</p>
                                    <div className="flex items-center gap-1.5 mt-3">
                                        {card.trend === "up" ? (
                                            <ArrowUpRight className="w-4 h-4 text-white/90" />
                                        ) : (
                                            <ArrowDownRight className="w-4 h-4 text-white/90" />
                                        )}
                                        <span className={`text-xs font-semibold ${card.trend === "up" ? 'text-white/90' : 'text-white/80'}`}>
                                            {card.change}
                                        </span>
                                        <span className="text-xs opacity-70">so với hôm qua</span>
                                    </div>
                                </div>
                                <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-inner ring-1 ring-white/30">
                                    <card.icon className="w-8 h-8" />
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-0 bg-white/10 scale-0 group-hover:scale-150 transition-transform duration-700 origin-bottom-right rounded-full" />
                    </motion.div>
                ))}
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8"
                >
                    <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                        <BarChart3 className="w-6 h-6 mr-3 text-indigo-600" />
                        Lượt truy cập 7 ngày gần nhất
                    </h3>
                    <div className="flex items-end justify-between h-64">
                        {chartData.map((day, i) => (
                            <motion.div
                                key={i}
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: `${(day.visits / 10000) * 100}%`, opacity: 1 }}
                                transition={{ delay: i * 0.1 + 0.5, duration: 0.8, ease: "easeOut" }}
                                className="flex flex-col items-center gap-3 flex-1"
                            >
                                <div className="text-[10px] text-gray-500 font-medium">{day.visits.toLocaleString()}</div>
                                <div className="w-full bg-gradient-to-t from-indigo-500 to-indigo-400 rounded-t-full relative overflow-hidden">
                                    <div className="absolute inset-0 bg-white/20 animate-pulse" />
                                </div>
                                <div className="text-[10px] text-gray-600 mt-2">{day.name}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8"
                >
                    <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                        <TrendingUp className="w-6 h-6 mr-3 text-emerald-600" />
                        Doanh thu tuần (tỷ ₫)
                    </h3>
                    <div className="relative h-64">
                        <svg viewBox="0 0 400 200" className="w-full h-full">
                            <motion.path
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 1 }}
                                transition={{ duration: 1.8, delay: 0.8, ease: "easeInOut" }}
                                fill="none"
                                stroke="url(#gradient)"
                                strokeWidth="4"
                                strokeLinecap="round"
                                d="M 20 140 Q 80 80, 140 100 T 260 70 Q 320 50, 380 90"
                            />
                            <defs>
                                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#10b981" />
                                    <stop offset="100%" stopColor="#34d399" />
                                </linearGradient>
                            </defs>
                            {[20, 80, 140, 200, 260, 320, 380].map((x, i) => (
                                <motion.circle
                                    key={i}
                                    cx={x}
                                    cy={[140, 80, 100, 70, 70, 50, 90][i]}
                                    r="6"
                                    fill="white"
                                    stroke="#10b981"
                                    strokeWidth="3"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: i * 0.15 + 1 }}
                                />
                            ))}
                        </svg>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-12 bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
            >
                <div className="p-6 border-b border-gray-100">
                    <h3 className="text-xl font-bold text-gray-800">Hoạt động gần đây</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead className="bg-gray-50 text-gray-600">
                            <tr>
                                <th className="px-6 py-4 text-left">Người dùng</th>
                                <th className="px-6 py-4 text-left">Hành động</th>
                                <th className="px-6 py-4 text-left">Thời gian</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {[
                                { user: "Nguyễn Văn A", action: "Tạo trang web mới", time: "5 phút trước" },
                                { user: "Trần Thị B", action: "Cập nhật giao diện", time: "12 phút trước" },
                                { user: "Lê Văn C", action: "Thêm người dùng", time: "28 phút trước" },
                                { user: "Phạm Thị D", action: "Xuất báo cáo", time: "1 giờ trước" },
                            ].map((act, i) => (
                                <motion.tr
                                    key={i}
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 + 0.8 }}
                                    className="hover:bg-gray-50 transition-colors"
                                >
                                    <td className="px-6 py-4 font-medium">{act.user}</td>
                                    <td className="px-6 py-4 text-gray-600">{act.action}</td>
                                    <td className="px-6 py-4 text-gray-500">{act.time}</td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </motion.div>
        </>
    );
}

export default function DashboardPage() {
    return <DashboardContent />;
};