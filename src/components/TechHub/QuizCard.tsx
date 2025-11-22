// src/components/TechHub/QuizCard.tsx
import React from 'react';

export default function QuizCard() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-gradient-to-br from-orange-400 to-pink-500 rounded-3xl p-12 text-center text-white shadow-2xl">
          <h3 className="text-4xl font-black mb-4">Quiz Tuần: AI & Tương Lai</h3>
          <p className="text-xl mb-8 opacity-90">Trả lời 5 câu hỏi – Nhận ngay voucher 500k từ TechHub!</p>
          <button className="bg-white text-orange-600 px-12 py-5 rounded-full text-xl font-bold hover:shadow-xl transform hover:scale-110 transition-all">
            Thử Ngay
          </button>
        </div>
      </div>
    </section>
  );
}