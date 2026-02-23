import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import Products from '../components/Products';
import WhyChooseUs from '../components/WhyChooseUs';
import Footer from '../components/Footer';
import BottomBar from '../components/BottomBar';

export default function Store() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Categories />
        <Products />
        <WhyChooseUs />
        <Footer />
      </main>
      <BottomBar />
    </div>
  );
}


