import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import bridalImg from '../assets/hero-bride-v2.jpg';
import silverImg from '../assets/silver.png';
import watchesImg from '../assets/watches-new.jpg';

const Hero = () => {
    const slides = [
        {
            image: bridalImg,
            title: "Bridal Jewellery",
            subtitle: "For Your Special Day"
        },
        {
            image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=1000&auto=format&fit=crop",
            title: "Gold Jewellery",
            subtitle: "Traditional & Modern"
        },
        {
            image: silverImg,
            title: "Silver Articles",
            subtitle: "Purity & Grace"
        },
        {
            image: watchesImg,
            title: "Exclusive Watches",
            subtitle: "Timeless Precision"
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black pt-20 md:pt-24">
            {/* Background Slideshow */}
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={currentSlide}
                    className="absolute inset-0 z-0"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                >
                    <img
                        src={slides[currentSlide].image}
                        alt={slides[currentSlide].title}
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90"></div>
                    <div className="absolute inset-0 bg-primary-color/20 mix-blend-overlay"></div>
                </motion.div>
            </AnimatePresence>

            {/* Content */}
            <div className="container relative z-10 text-center text-white px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                >
                    <div className="mb-6 flex flex-col items-center">
                        <span className="text-secondary-light text-2xl mb-2">✦</span>
                        <h2 className="text-sm md:text-base uppercase tracking-[0.4em] text-secondary-light font-medium text-shadow-lg">
                            Crafting Heirlooms. Celebrating You.
                        </h2>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-9xl font-heading font-normal mb-8 leading-tight text-white drop-shadow-2xl">
                        AMOL ASHTEKAR <br />
                        <span className="italic font-light text-secondary-color text-4xl md:text-6xl lg:text-7xl block mt-2 font-heading">
                            & Sons
                        </span>
                    </h1>

                    <div className="flex items-center justify-center gap-4 mb-10 opacity-80">
                        <div className="h-[1px] w-12 bg-secondary-light"></div>
                        <div className="w-2 h-2 rotate-45 bg-secondary-light"></div>
                        <div className="h-[1px] w-12 bg-secondary-light"></div>
                    </div>

                    <p className="max-w-2xl mx-auto text-lg md:text-2xl text-gray-50 mb-12 font-light tracking-wide leading-relaxed drop-shadow-md font-heading italic">
                        "Your stories, etched in Gold. Your moments, shining in Silver."
                        <br />
                        <span className="text-xs md:text-sm mt-4 block text-secondary-light font-sans font-normal tracking-[0.3em] uppercase not-italic opacity-90">
                            Timeless Elegance Since Generations
                        </span>
                    </p>

                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                        <Link
                            to="/collections"
                            className="group relative px-10 py-4 bg-transparent border border-secondary-color text-secondary-color font-semibold uppercase tracking-[0.2em] hover:bg-secondary-color hover:text-primary-dark transition-all duration-500 overflow-hidden"
                        >
                            <span className="relative z-10 group-hover:text-primary-dark transition-colors duration-300">Discover Your Legacy</span>
                            <div className="absolute inset-0 bg-secondary-color transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-8 right-8 z-20 flex gap-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-1 transition-all duration-300 ${index === currentSlide ? 'w-8 bg-secondary-color' : 'w-4 bg-white/30 hover:bg-white/50'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-70"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
                <span className="text-[10px] uppercase tracking-widest text-secondary-light">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-secondary-light to-transparent"></div>
            </motion.div>
        </section>
    );
};

export default Hero;
