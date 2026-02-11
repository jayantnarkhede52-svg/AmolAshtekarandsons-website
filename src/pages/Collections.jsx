import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import ringImg from '../assets/rings.png';
import necklaceImg from '../assets/necklace.png';
import bangleImg from '../assets/bangles.png';
import bridalImg from '../assets/bridal.png';

import silverImg from '../assets/silver.png';
import watchesImg from '../assets/watches-new.jpg';

const Collections = () => {
    const categories = [
        {
            id: 1,
            title: "Necklaces",
            image: necklaceImg,
            description: "Exquisite gold and diamond necklaces for every occasion."
        },
        {
            id: 2,
            title: "Bangles",
            image: bangleImg,
            description: "Traditional and contemporary bangles crafted to perfection."
        },
        {
            id: 3,
            title: "Rings",
            image: ringImg,
            description: "Statement rings that add a touch of elegance to your hands."
        },
        {
            id: 4,
            title: "Bridal Jewellery",
            image: bridalImg,
            description: "Complete bridal sets to make your special day unforgettable."
        },
        {
            id: 5,
            title: "Silver Articles",
            image: silverImg,
            description: "Pure silver idols, pooja essentials, and gift articles."
        },
        {
            id: 6,
            title: "Watches",
            image: watchesImg,
            description: "Premium timepieces for men and women."
        }
    ];

    return (
        <div className="pt-24 min-h-screen bg-bg-cream">
            <div className="container mx-auto px-4 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-color mb-4">
                        Our Collection
                    </h1>
                    <div className="w-24 h-1 bg-secondary-color mx-auto mb-6"></div>
                    <p className="text-text-light text-lg max-w-2xl mx-auto">
                        Explore our exclusive range of handcrafted jewellery, designed to celebrate life's most precious moments.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto justify-items-center">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative h-[400px] w-full max-w-[400px] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                        >
                            <img
                                src={category.image}
                                alt={category.title}
                                loading="lazy"
                                decoding="async"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                                <h3 className="text-3xl font-heading text-white font-bold mb-2 transform group-hover:-translate-y-2 transition-transform duration-300">
                                    {category.title}
                                </h3>
                                <p className="text-gray-200 text-sm mb-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                                    {category.description}
                                </p>
                                <Link
                                    to={category.id === 1 ? "/collections/necklaces" : category.id === 2 ? "/collections/bangles" : category.id === 4 ? "/bridal-jewellery" : category.id === 5 ? "/collections/silver-articles" : category.id === 6 ? "/collections/watches" : "#"}
                                    className="inline-block px-6 py-2 bg-secondary-color text-primary-dark font-semibold uppercase tracking-wider text-sm rounded-sm hover:bg-white transition-colors w-max opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-200"
                                >
                                    View Collection
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Collections;
