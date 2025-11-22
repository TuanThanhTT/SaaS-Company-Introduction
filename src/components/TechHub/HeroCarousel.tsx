// // src/components/TechHub/HeroCarousel.tsx
// import React, { useState, useEffect } from 'react';

// interface Slide {
//   bg: string;
//   title: string;
//   subtitle: string;
//   price: string;
//   cta: string;
//   img: string;
// }

// const HeroCarousel: React.FC = () => {
//   const slides: Slide[] = [
//     {
//       bg: 'bg-gradient-to-br from-purple-700 to-pink-600',
//       title: 'LAPTOP AI 2025',
//       subtitle: 'Tăng tốc sáng tạo với chip Neural Engine',
//       price: 'Từ 29.990.000đ',
//       cta: 'XEM CHI TIẾT',
//       img: 'https://via.placeholder.com/500x400?text=AI+Laptop',
//     },
//     {
//       bg: 'bg-gradient-to-br from-teal-600 to-cyan-700',
//       title: 'SMARTPHONE GẬP',
//       subtitle: 'Màn hình gập 8" – Đa nhiệm đỉnh cao',
//       price: '35.900.000đ',
//       cta: 'ĐẶT TRƯỚC',
//       img: 'https://via.placeholder.com/500x400?text=Fold+Phone',
//     },
//     {
//       bg: 'bg-gradient-to-br from-orange-600 to-red-700',
//       title: 'DRONE 8K PRO',
//       subtitle: 'Quay phim chuyên nghiệp từ trên cao',
//       price: '19.900.000đ',
//       cta: 'KHÁM PHÁ',
//       img: 'https://via.placeholder.com/500x400?text=Drone+8K',
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [slides.length]);

//   return (
//     <div className="relative h-96 md:h-[520px] rounded-2xl overflow-hidden mb-12 shadow-2xl">
//       {slides.map((slide, index) => (
//         <div
//           key={index}
//           className={`absolute inset-0 ${slide.bg} text-white transition-opacity duration-1000 ease-in-out ${
//             currentIndex === index ? 'opacity-100' : 'opacity-0'
//           }`}
//         >
//           <div className="max-w-7xl mx-auto px-6 h-full flex flex-col md:flex-row items-center justify-between">
//             {/* Text Content */}
//             <div className="text-center md:text-left md:w-1/2 z-10">
//               <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
//                 {slide.title}
//               </h1>
//               <p className="text-xl md:text-2xl mb-6">{slide.subtitle}</p>
//               <div className="mb-6">
//                 <span className="inline-block bg-white/20 backdrop-blur px-8 py-3 rounded-full text-2xl font-bold">
//                   {slide.price}
//                 </span>
//               </div>
//               <button className="bg-white text-purple-700 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-lg">
//                 {slide.cta}
//               </button>
//             </div>

//             {/* Image */}
//             <div className="mt-8 md:mt-0">
//               <img src={slide.img} alt={slide.title} className="w-full max-w-md drop-shadow-2xl" />
//             </div>
//           </div>
//         </div>
//       ))}

//       {/* Dots */}
//       <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             className={`w-3 h-3 rounded-full transition-all duration-300 ${
//               currentIndex === index ? 'bg-white w-8' : 'bg-white/50'
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HeroCarousel;