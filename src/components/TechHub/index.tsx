// src/components/TechHub/index.tsx
import React from 'react';
import Header from './Header';
import BigBanner from './BigBanner';
import ProductShowcase from './ProductShowcase';
import NewsGrid from './NewsGrid';
import Testimonials from './Testimonials';
import QuizCard from './QuizCard';
import ContactForm from './ContactForm';
import Footer from './Footer';

const TechHubLayout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <BigBanner />
      <ProductShowcase />
      <NewsGrid />
      <Testimonials />
      <QuizCard />
      <ContactForm />
      <Footer />
      {children}
    </div>
  );
};

export default TechHubLayout;