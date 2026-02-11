import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PremiumImage = ({ src, alt, className, ...props }) => {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className={`relative overflow-hidden ${className}`}>
            {/* Placeholder / Skeleton */}
            {isLoading && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse" />
            )}

            {/* Actual Image */}
            <motion.img
                src={src}
                alt={alt}
                initial={{ opacity: 0, filter: 'blur(10px)' }}
                animate={{
                    opacity: isLoading ? 0 : 1,
                    filter: isLoading ? 'blur(10px)' : 'blur(0px)'
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                onLoad={() => setIsLoading(false)}
                className={`w-full h-full object-cover ${className}`}
                {...props}
            />
        </div>
    );
};

export default PremiumImage;
