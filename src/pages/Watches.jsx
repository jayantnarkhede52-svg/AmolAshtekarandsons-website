import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Watches = () => {
    const watchCategories = [
        {
            id: 1,
            title: "Men's Watches",
            image: "https://images.unsplash.com/photo-1619134778706-7015533a6150?q=80&w=800&auto=format&fit=crop",
            description: "Sophisticated timepieces for the modern gentleman.",
            link: "/collections/watches/men"
        },
        {
            id: 2,
            title: "Women's Watches",
            image: "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?q=80&w=800&auto=format&fit=crop",
            description: "Elegant and timeless watches for her.",
            link: "/collections/watches/women"
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
                        Watches Collection
                    </h1>
                    <div className="w-24 h-1 bg-secondary-color mx-auto mb-6"></div>
                    <p className="text-text-light text-lg max-w-2xl mx-auto">
                        Timeless elegance meets modern precision. Explore our curated selection of luxury watches.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto justify-items-center">
                    {watchCategories.map((category, index) => (
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
                                    to={category.link}
                                    className="inline-block px-6 py-2 bg-secondary-color text-primary-dark font-semibold uppercase tracking-wider text-sm rounded-sm hover:bg-white transition-colors w-max opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-200"
                                >
                                    Explore
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Watches;
