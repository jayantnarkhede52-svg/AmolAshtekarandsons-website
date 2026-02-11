import React from 'react';
import { ShieldCheck, Award, Gem, History } from 'lucide-react';

const Welcome = () => {
    const features = [
        {
            icon: <History className="w-8 h-8 text-primary-color" />,
            title: "50+ Years Legacy",
            description: "Serving generations with trust and tradition since 1971."
        },
        {
            icon: <ShieldCheck className="w-8 h-8 text-primary-color" />,
            title: "100% BIS Hallmarked",
            description: "Guaranteed purity in every piece of gold you purchase."
        },
        {
            icon: <Gem className="w-8 h-8 text-primary-color" />,
            title: "Certified Gemstones",
            description: "Authentic, high-quality gemstones with certification."
        },
        {
            icon: <Award className="w-8 h-8 text-primary-color" />,
            title: "Transparent Pricing",
            description: "No hidden costs, just honest and fair valuation."
        }
    ];

    return (
        <section className="py-20 bg-bg-cream relative overflow-hidden">
            {/* Background Pattern - Optional subtle texture */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#CCA43B 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-6 text-center lg:text-left">
                        <h2 className="text-secondary-color text-sm uppercase tracking-[0.2em] font-semibold">
                            More Than Just a Jeweller
                        </h2>
                        <h1 className="text-4xl md:text-5xl font-heading font-medium text-primary-color leading-tight">
                            Welcome to <br />
                            <span className="italic">Amol Ashtekar & Sons</span>
                        </h1>
                        <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
                            <div className="h-[1px] w-12 bg-secondary-color/40"></div>
                            <div className="text-secondary-color text-xl">♦</div>
                            <div className="h-[1px] w-12 bg-secondary-color/40"></div>
                        </div>
                        <p className="text-text-light text-lg leading-relaxed font-light">
                            Since 1971, we haven't just been making jewellery; we've been part of your weddings, naming ceremonies, and festivals. At <strong>Amol Ashtekar & Sons</strong>, you aren't just a customer; you are family.
                        </p>
                        <p className="text-text-light text-lg leading-relaxed font-light">
                            We promise you purity not just in our gold, but in our intent. Step into a world where tradition meets contemporary design, and experience the warmth of a relationship built on trust.
                        </p>
                    </div>

                    {/* Right Content - Trust Badges Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {features.map((feature, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-secondary-color/20 flex flex-col items-center text-center group">
                                <div className="mb-4 p-3 bg-bg-cream rounded-full group-hover:bg-secondary-color/10 transition-colors duration-300">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-heading text-primary-color font-medium mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-text-light leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Welcome;
