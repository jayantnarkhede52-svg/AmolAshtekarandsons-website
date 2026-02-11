import React from 'react';
import { motion } from 'framer-motion';

import personalizedImg from '../assets/personalized.png';

const features = [
    {
        image: "https://images.unsplash.com/photo-1626784215021-2e39ccf971cd?q=80&w=800&auto=format&fit=crop",
        title: "Purity You Can Swear By",
        description: "100% Hallmarked gold. Because your trust is our most precious asset."
    },
    {
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop",
        title: "Honesty in Every Gram",
        description: "Transparent pricing with no hidden costs. Fair valuation, always."
    },
    {
        image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=800&auto=format&fit=crop", // Diverse Jewellery Display
        title: "Wide Variety",
        description: "From traditional temple jewellery to contemporary diamond designs, explore thousands of unique patterns."
    },
    {
        image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=800&auto=format&fit=crop", // Traditional Gold
        title: "Traditional Values",
        description: "A legacy of trust spanning over 50 years. We blend timeless traditions with modern craftsmanship."
    },
    {
        image: personalizedImg,
        title: "Your Vision, Our Craft",
        description: "We listen to your dreams and shape them into reality. Custom designs, tailored to you."
    },
    {
        image: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?q=80&w=800&auto=format&fit=crop", // Antique Book / Legacy
        title: "Trusted Legacy",
        description: "Serving generations of families with integrity. We are honored to be part of your story."
    }
];

const Features = () => {
    return (
        <section className="py-24 bg-bg-cream">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-color mb-4">
                        Why Families Trust Us
                    </h2>
                    <div className="w-24 h-1 bg-secondary-color mx-auto mb-6"></div>
                    <p className="text-lg text-text-light max-w-2xl mx-auto font-light">
                        We believe jewellery should feel special, meaningful, and worry-free.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-secondary-color/20"
                        >
                            {/* Image Container */}
                            <div className="relative h-64 overflow-hidden">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
                                <img
                                    src={feature.image}
                                    alt={feature.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-8 text-center relative">
                                {/* Decorative border line */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm z-20">
                                    <div className="w-12 h-12 rounded-full border border-secondary-color/30 flex items-center justify-center bg-bg-cream">
                                        <div className="w-2 h-2 rounded-full bg-secondary-color"></div>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-heading font-semibold text-primary-color mb-4 mt-4">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed font-light">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
