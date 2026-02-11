import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const WomensWatches = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const loadImages = async () => {
            const imageModules = import.meta.glob('../assets/Watches women/Watches women/*.jpg', { eager: true });
            const loadedImages = Object.values(imageModules).map((module) => module.default);
            setImages(loadedImages);
        };
        loadImages();
    }, []);

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
                        Women's Watches
                    </h1>
                    <div className="w-24 h-1 bg-secondary-color mx-auto mb-6"></div>
                    <p className="text-text-light text-lg max-w-2xl mx-auto">
                        Explore our exquisite collection of women's watches, blending elegance with functionality.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {images.map((imgSrc, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 aspect-square"
                        >
                            <img
                                src={imgSrc}
                                alt={`Women's Watch ${index + 1}`}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WomensWatches;
