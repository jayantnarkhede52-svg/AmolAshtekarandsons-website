import React from 'react';
import { Hammer, RefreshCw, Gem, ShieldCheck } from 'lucide-react';

const Services = () => {
    const services = [
        {
            icon: <Hammer size={40} />,
            title: "Custom Jewellery Design",
            description: "Bring your dream jewellery to life with our bespoke design services. Our artisans craft unique pieces tailored to your vision."
        },
        {
            icon: <RefreshCw size={40} />,
            title: "Gold Exchange & Polishing",
            description: "Exchange your old gold for new designs at the best rates. We also offer expert polishing and restoration for your heirloom pieces."
        },
        {
            icon: <Gem size={40} />,
            title: "Gemstone Consultation",
            description: "Get expert advice on choosing the right gemstones for astrological benefits or aesthetic appeal."
        },
        {
            icon: <ShieldCheck size={40} />,
            title: "Certified Purity Reports",
            description: "Every piece comes with a guarantee of purity. We provide government-approved hallmarking and certification."
        }
    ];

    return (
        <div className="pt-44 pb-20 container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-color mb-8 text-center">Our Services</h1>
            <div className="w-24 h-1 bg-secondary-color mx-auto mb-16"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                {services.map((service, index) => (
                    <div key={index} className="flex gap-6 p-6 bg-white shadow-sm hover:shadow-md transition-shadow rounded-lg border border-gray-100">
                        <div className="text-secondary-color flex-shrink-0">
                            {service.icon}
                        </div>
                        <div>
                            <h3 className="text-2xl font-heading font-semibold text-gray-800 mb-3">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
