import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Welcome from '../components/Welcome';
import Features from '../components/Features';
import PremiumImage from '../components/PremiumImage';

import silverImg from '../assets/silver.png';
import bridalImg from '../assets/hero-bride-v2.jpg';
import gemstonesImg from '../assets/gemstones-new.jpg';

const Home = () => {
    const collections = [
        { title: "Pure Silver Jewellery", subtitle: "92.5 Sterling Silver", image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=1000&auto=format&fit=crop" },
        { title: "Gold Jewellery", subtitle: "Traditional & Modern", image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=1000&auto=format&fit=crop" },
        { title: "Bridal Sets", subtitle: "For Your Special Day", image: bridalImg },
        { title: "Gemstones", subtitle: "Precious & Semi-Precious", image: gemstonesImg },
        { title: "Art Jewellery", subtitle: "Unique Craftsmanship", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop" },
        { title: "Silver Articles", subtitle: "Frames & Decor", image: silverImg },
    ];

    return (
        <main className="flex-grow">
            <Hero />
            <Welcome />
            <section id="collections" className="py-24 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-5xl font-heading font-medium text-primary-color mb-3 tracking-tight">
                        Our Jewellery Collection
                    </h2>
                    <div className="w-16 h-[2px] bg-secondary-color mx-auto mb-8"></div>
                    <p className="max-w-3xl mx-auto text-lg text-text-light mb-16 leading-relaxed font-light">
                        Every piece has a story waiting to be told. Whether it's a simple ring or a bridal masterpiece, find the one that speaks to your heart.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {collections.map((item, index) => (
                            <Link to="/collections" key={index} className="group relative overflow-hidden cursor-pointer block h-[400px]">
                                <div className="w-full h-full bg-gray-100 relative">
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 z-10"></div>
                                    <PremiumImage
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out"
                                    />
                                    <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                            <span className="text-[10px] font-semibold text-secondary-light uppercase tracking-[0.2em] block mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                                {item.subtitle}
                                            </span>
                                            <h3 className="text-xl font-heading text-white font-medium mb-3">
                                                {item.title}
                                            </h3>
                                            <div className="h-[1px] w-8 bg-secondary-color mb-3 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left delay-200"></div>
                                            <span className="text-xs text-white border-b border-transparent group-hover:border-white transition-all duration-300 opacity-0 group-hover:opacity-100 pb-1 inline-block">
                                                View Collection
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
            <Features />
        </main>
    );
};

export default Home;
