import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Plus, Minus } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, toggleOpen }) => {
    return (
        <div className="border-b border-gray-100 last:border-0">
            <button
                onClick={toggleOpen}
                className="w-full py-6 flex justify-between items-center text-left group hover:text-primary-color transition-colors"
            >
                <span className={`text-lg font-medium pr-8 ${isOpen ? 'text-primary-color' : 'text-gray-800'}`}>
                    {question}
                </span>
                <span className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-primary-color border-primary-color text-white' : 'border-gray-300 text-gray-400 group-hover:border-primary-color'}`}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <p className="pb-6 text-gray-600 leading-relaxed max-w-3xl">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: "Is your jewellery BIS Hallmarked?",
            answer: "Yes, absolutely. Every piece of gold jewellery at Amol Ashtekar & Sons is BIS Hallmarked, guaranteeing the purity and quality of the gold. We provide a certificate of authenticity with every purchase."
        },
        {
            question: "Do you offer customization services?",
            answer: "Yes, we specialize in bespoke jewellery. You can bring your own design or work with our in-house designers to create a unique piece. Custom orders typically take 15-20 days depending on the complexity of the design."
        },
        {
            question: "What is your return and exchange policy?",
            answer: "We offer a lifetime exchange policy on all our diamond and gold jewellery. For returns within 7 days of purchase (unused and with original tags), we offer a full refund. Deductions may apply based on current market rates for exchanges after this period."
        },
        {
            question: "Do you ship internationally?",
            answer: "Currently, we ship to all major cities across India. International shipping is available on special request for select countries. Please contact our support team for international shipping rates and timelines."
        },
        {
            question: "How do I care for my silver jewellery?",
            answer: "Store silver jewellery in airtight zip-lock bags to prevent oxidation. Avoid direct contact with perfumes, sprays, and water. Clean gently with a soft cloth or specific silver cleaning solution if it tarnishes."
        },
        {
            question: "Can I pay in installments?",
            answer: "Yes, we have monthly gold savings schemes (Golden Future Plan) where you can invest a fixed amount every month for 11 months and buy jewellery in the 12th month with added benefits."
        }
    ];

    return (
        <div className="pt-32 pb-24 min-h-screen bg-bg-cream">
            <div className="container mx-auto px-4 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-color mb-4">
                        Frequently Asked Questions
                    </h1>
                    <div className="w-24 h-1 bg-secondary-color mx-auto mb-6"></div>
                    <p className="text-text-light text-lg">
                        Everything you need to know about our products and services.
                    </p>
                </motion.div>

                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            toggleOpen={() => setOpenIndex(openIndex === index ? -1 : index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;
