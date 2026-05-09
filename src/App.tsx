/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll } from 'motion/react';
import { useState, useEffect } from 'react';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import BentoDifferentials from './components/BentoDifferentials';
import CategoryExplorer from './components/CategoryExplorer';
import ProductsGrid from './components/ProductsGrid';
import WhyChooseUs from './components/WhyChooseUs';
import About from './components/About';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

// Constants
import { IMAGES } from './constants';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentHero, setCurrentHero] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ 
        x: (e.clientX / window.innerWidth - 0.5) * 20, 
        y: (e.clientY / window.innerHeight - 0.5) * 20 
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    const heroInterval = setInterval(() => {
      setCurrentHero(prev => (prev + 1) % IMAGES.hero.length);
    }, 6000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(heroInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white selection:bg-brand-primary selection:text-white">
      {/* SCROLL PROGRESS */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-brand-secondary z-[60] origin-left"
        style={{ scaleX: scrollYProgress as any }}
      />

      <Navbar 
        isScrolled={isScrolled} 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
      />

      <main>
        <Hero currentHero={currentHero} mousePos={mousePos} />
        <Marquee />
        <BentoDifferentials />
        <CategoryExplorer />
        <ProductsGrid />
        <WhyChooseUs />
        <About />
        <Testimonials />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}
