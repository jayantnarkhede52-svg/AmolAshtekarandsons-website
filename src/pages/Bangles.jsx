import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ImageModal from '../components/ImageModal';

const Bangles = () => {
    const [images, setImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        const loadImages = async () => {
            const imageModules = import.meta.glob('../assets/Bangles amol ashtekar/Bangles amol ashtekar/*.jpg', { eager: true });
            const loadedImages = Object.values(imageModules).map((module) => module.default);
            setImages(loadedImages);
        };
        loadImages();
    }, []);

    const openModal = (imgSrc) => {
        setSelectedImage(imgSrc);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className="pt-40 min-h-screen bg-bg-cream">
            <div className="container mx-auto px-4 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-color mb-4">
                        Bangles Collection
                    </h1>
                    <div className="w-24 h-1 bg-secondary-color mx-auto mb-6"></div>
                    <p className="text-text-light text-lg max-w-2xl mx-auto">
                        Discover our exquisite collection of traditional and contemporary bangles, each piece crafted with precision and passion.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {images.map((imgSrc, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 aspect-square cursor-zoom-in"
                            onClick={() => openModal(imgSrc)}
                        >
                            <img
                                src={imgSrc}
                                alt={`Bangle ${index + 1}`}
                                loading="lazy"
                                decoding="async"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm text-sm tracking-wider uppercase">
                                    View
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            <ImageModal
                isOpen={!!selectedImage}
                onClose={closeModal}
                imageSrc={selectedImage}
                title="Bangle Collection"
            />
        </div>
    );
};

export default Bangles;
