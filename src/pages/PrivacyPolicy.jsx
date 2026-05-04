import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
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
                        Privacy Policy
                    </h1>
                    
                    <div className="space-y-6 text-gray-700 leading-relaxed">
                        <p>
                            At Amol Ashtekar & Sons, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website or interact with us.
                        </p>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Information We Collect</h2>
                            <p>
                                We may collect personal information such as your name, email address, phone number, and shipping address when you make a purchase, sign up for our newsletter, or contact us for inquiries.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">2. How We Use Your Information</h2>
                            <ul className="list-disc ml-6 space-y-2">
                                <li>To process and fulfill your orders.</li>
                                <li>To communicate with you about your orders and inquiries.</li>
                                <li>To send you promotional offers and updates (if you've opted in).</li>
                                <li>To improve our website and customer service.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">3. Data Security</h2>
                            <p>
                                We implement a variety of security measures to maintain the safety of your personal information. Your sensitive data (like payment info) is transmitted via Secure Socket Layer (SSL) technology and is not stored on our servers.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Third-Party Disclosure</h2>
                            <p>
                                We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties, except to trusted third parties who assist us in operating our website or servicing you, so long as those parties agree to keep this information confidential.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Cookies</h2>
                            <p>
                                We use cookies to understand and save your preferences for future visits and compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.
                            </p>
                        </section>

                        <div className="mt-12 pt-8 border-t border-gray-100 text-sm text-gray-500">
                            <p>Last Updated: May 2026</p>
                            <p>For any questions regarding this policy, please contact us at amolashtekarandsons@gmail.com</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
