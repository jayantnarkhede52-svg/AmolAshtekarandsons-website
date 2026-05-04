import React from 'react';
import { motion } from 'framer-motion';

const RefundPolicy = () => {
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
                        Refund & Cancellation Policy
                    </h1>
                    
                    <div className="space-y-6 text-gray-700 leading-relaxed">
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Cancellation Policy</h2>
                            <p>
                                Orders can be cancelled within 24 hours of placement or before the product has been shipped, whichever is earlier. Once an item has been shipped, the order cannot be cancelled.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Returns & Exchanges</h2>
                            <p>
                                We offer a 7-day return policy for unused products in their original packaging with all tags and certificates intact. 
                            </p>
                            <ul className="list-disc ml-6 mt-2 space-y-2">
                                <li>Customized jewellery and nose pins are not eligible for returns or exchanges due to hygiene and manufacturing reasons.</li>
                                <li>The product must be accompanied by the original invoice and hallmark certificate.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">3. Refund Process</h2>
                            <p>
                                Once we receive and inspect the returned item, we will notify you of the approval or rejection of your refund. If approved, the refund will be processed to your original method of payment within 7-10 business days.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Lifetime Exchange & Buy-Back</h2>
                            <p>
                                We offer a lifetime exchange and buy-back policy on all our gold and diamond jewellery purchased from us. 
                            </p>
                            <ul className="list-disc ml-6 mt-2 space-y-2">
                                <li>Exchange: 100% value of gold at current market rate.</li>
                                <li>Buy-Back: 95% value of gold at current market rate.</li>
                                <li>Labour charges and taxes are not refundable.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Damaged Products</h2>
                            <p>
                                In the rare case that you receive a damaged product, please contact us within 24 hours of delivery with photos of the damage. We will arrange for a replacement at no extra cost.
                            </p>
                        </section>

                        <div className="mt-12 pt-8 border-t border-gray-100 text-sm text-gray-500">
                            <p>Last Updated: May 2026</p>
                            <p>For return requests, please email us at amolashtekarandsons@gmail.com</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default RefundPolicy;
