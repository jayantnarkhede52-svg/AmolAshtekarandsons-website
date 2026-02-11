import React, { useEffect } from 'react';
import founder1 from '../assets/founders/founder1.jpg';
import founder2 from '../assets/founders/founder2.jpg';
import founder3 from '../assets/founders/founder3.jpg';
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";

const Counter = ({ from, to, duration }) => {
    const count = useMotionValue(from);
    const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString());
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            const controls = animate(count, to, { duration: duration });
            return controls.stop;
        }
    }, [count, to, duration, isInView]);

    return <motion.span ref={ref}>{rounded}</motion.span>;
};

const About = () => {
    return (
        <div className="pt-32 pb-20 container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-color mb-8 text-center">About Us</h1>
            <div className="w-24 h-1 bg-secondary-color mx-auto mb-12"></div>


            {/* Statistic Section */}
            <div className="text-center mb-16">
                <div className="inline-block p-6 border border-secondary-color/30 rounded-lg bg-white shadow-lg">
                    <span className="block text-4xl md:text-5xl font-heading font-bold text-primary-color mb-2">
                        <Counter from={0} to={40000} duration={3} />+
                    </span>
                    <span className="text-lg text-text-light font-medium uppercase tracking-wider">Happy Customers</span>
                </div>
            </div>

            {/* Text Content */}
            <div className="max-w-4xl mx-auto space-y-8 text-lg text-gray-700 leading-relaxed font-light text-justify md:text-center mb-16">
                <p>
                    "At <strong>Ashtekar & Sons</strong> we strive to make every shopping experience pleasant and stress-free.
                    Our main goal is not to make a sale, it is to make a customer! A customer who feels valued and happy with
                    each and every item purchased, and is confident that we will continue to service them for years to come.
                </p>
                <p>
                    In our warm and comfortable showroom, you will find an incredible selection of fine jewelry. We have a vast
                    collection of rings, necklaces, earrings, brooches and bracelets that are sure to satisfy everybody’s needs and desires.
                    Our educated staff will assist you in choosing the perfect piece of jewelry. Our goal is to make our customers feel
                    comfortable and to keep them coming back for generations."
                </p>
            </div>

            {/* Founders Section */}
            <div className="mb-16">
                <h2 className="text-3xl font-heading text-primary-color text-center mb-8">The Visionaries</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {/* Founder 1 (Left) */}
                    <div className="text-center group">
                        <div className="relative overflow-hidden rounded-lg shadow-lg mb-4 aspect-[3/4] max-w-xs mx-auto">
                            <img
                                src={founder1}
                                alt="Director Amol Suresh Ashtekar"
                                loading="lazy"
                                decoding="async"
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <h3 className="text-xl font-heading font-bold text-primary-color">Amol Suresh Ashtekar</h3>
                        <p className="text-sm text-text-light uppercase tracking-wide mt-1">Director</p>
                    </div>
                    {/* Founder 2 (Middle - Main Founder) */}
                    <div className="text-center group relative z-10 md:scale-110">
                        <div className="relative overflow-hidden rounded-lg shadow-[0_0_30px_rgba(212,175,55,0.4)] mb-4 aspect-[3/4] max-w-xs mx-auto border-2 border-secondary-color">
                            <img
                                src={founder3}
                                alt="Late. Shree Suresh Uttamrao Ashtekar"
                                loading="lazy"
                                decoding="async"
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                            />
                            {/* Premium Badge */}
                            <div className="absolute top-0 right-0 bg-secondary-color text-primary-dark px-4 py-1 text-xs font-bold tracking-widest rounded-bl-lg shadow-md">
                                MAIN FOUNDER
                            </div>
                        </div>
                        <h3 className="text-xl font-heading font-bold text-primary-color drop-shadow-sm">Late. Shree Suresh Uttamrao Ashtekar</h3>
                        <p className="text-sm text-text-light uppercase tracking-wide mt-1 font-semibold">Founder of Ashtekar Empire in Gold Industry</p>
                    </div>
                    {/* Founder 3 (Right) */}
                    <div className="text-center group">
                        <div className="relative overflow-hidden rounded-lg shadow-lg mb-4 aspect-[3/4] max-w-xs mx-auto">
                            <img
                                src={founder2}
                                alt="Director Sau. Pooja Amol Ashtekar"
                                loading="lazy"
                                decoding="async"
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <h3 className="text-xl font-heading font-bold text-primary-color">Sau. Pooja Amol Ashtekar</h3>
                        <p className="text-sm text-text-light uppercase tracking-wide mt-1">Director</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
