import React from 'react';
import { motion } from 'framer-motion';

const ShippingPolicy = () => {
    return (
        <div className="pt-44 pb-24 min-h-screen bg-bg-cream">
            <div className="container mx-auto px-4 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100"
                >
                    <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary-color mb-6 border-b pb-4">
                        Shipping & Delivery Policy
                    </h1>
                    
                    <div className="space-y-6 text-gray-700 leading-relaxed">
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Shipping Coverage</h2>
                            <p>
                                We provide secure shipping across all major cities in India. We partner with reliable logistics providers to ensure your jewellery reaches you safely.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Delivery Timelines</h2>
                            <ul className="list-disc ml-6 space-y-2">
                                <li>In-stock items: Dispatched within 24-48 hours. Delivery takes 3-7 business days.</li>
                                <li>Custom/Bespoke items: Dispatched within 15-20 business days.</li>
                            </ul>
                            <p className="mt-2 text-sm italic">Note: Delivery times may vary based on location and unforeseen circumstances.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">3. Shipping Charges</h2>
                            <p>
                                We offer free insured shipping on all orders above ₹5,000 within India. For orders below this amount, a flat shipping fee may apply, which will be calculated at checkout.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Insurance & Safety</h2>
                            <p>
                                All our shipments are fully insured until they reach your doorstep. We use tamper-evident packaging to ensure the integrity of your purchase. Please do not accept the package if it appears tampered with or opened.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Tracking Your Order</h2>
                            <p>
                                Once your order is shipped, we will send you a tracking number via email and SMS so you can monitor its progress.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">6. International Shipping</h2>
                            <p>
                                Currently, we only ship within India. For international inquiries, please contact our support team directly.
                            </p>
                        </section>

                        <div className="mt-12 pt-8 border-t border-gray-100 text-sm text-gray-500">
                            <p>Last Updated: May 2026</p>
                            <p>For shipping-related queries, please contact us at +91 98227 33333</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ShippingPolicy;
