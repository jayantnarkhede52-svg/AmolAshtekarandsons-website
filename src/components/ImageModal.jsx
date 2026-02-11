import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const ImageModal = ({ isOpen, onClose, imageSrc, title, onNext, onPrev }) => {
    // Lock body scroll when modal is open
    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm"
                    onClick={onClose}
                >
                    {/* Close Button */}
                    <button
                        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-[110]"
                        onClick={onClose}
                    >
                        <X size={32} strokeWidth={1.5} />
                    </button>

                    {/* Navigation Buttons (Optional) */}
                    {onPrev && (
                        <button
                            className="absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors z-[110] hidden md:block"
                            onClick={(e) => { e.stopPropagation(); onNext && onPrev(); }}
                        >
                            <ChevronLeft size={48} strokeWidth={1} />
                        </button>
                    )}

                    {onNext && (
                        <button
                            className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors z-[110] hidden md:block"
                            onClick={(e) => { e.stopPropagation(); onNext(); }}
                        >
                            <ChevronRight size={48} strokeWidth={1} />
                        </button>
                    )}

                    {/* Image Container */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative max-w-[90vw] max-h-[90vh] flex flex-col items-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={imageSrc}
                            alt={title || "Enlarged view"}
                            className="max-w-full max-h-[85vh] object-contain shadow-2xl rounded-sm"
                        />
                        {title && (
                            <p className="mt-4 text-white/90 font-heading text-lg tracking-wider">
                                {title}
                            </p>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ImageModal;
