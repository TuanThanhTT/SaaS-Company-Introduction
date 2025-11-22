// src/pages/landing/LandingPage.tsx
import React from 'react';
// import Header from './Header';
import BigBanner from './BigBanner';
import ProductShowcase from './ProductShowcase';
import NewsGrid from './NewsGrid';
import Testimonials from './Testimonials';
import QuizCard from './QuizCard';
import ContactForm from './ContactForm';
import Footer from './Footer';

export default function LandingPage() {
  return (
    <>
      {/* <Header /> */}
      <BigBanner />
      <ProductShowcase />
      <NewsGrid />
      <Testimonials />
      <QuizCard />
      <ContactForm />
      <Footer />
    </>
  );
}