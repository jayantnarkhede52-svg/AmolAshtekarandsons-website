import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import mainBranchImg from '../assets/ashetkar main branch.jpeg';
import secondBranchImg from '../assets/ashtekar second branch.jpeg';

const Contact = () => {
    return (
        <div className="pt-32 pb-20 container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-color mb-8 text-center">Contact Us</h1>
            <div className="w-24 h-1 bg-secondary-color mx-auto mb-16"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                {/* Contact Info */}
                <div className="space-y-8">
                    <h2 className="text-2xl font-heading font-semibold text-gray-800">Get in Touch</h2>
                    <p className="text-gray-600">
                        Have a question about our collections or need a custom design? We'd love to hear from you.
                        Visit our showroom or reach out to us via phone or email.
                    </p>

                    <div className="space-y-6 mt-8">
                        <div className="flex items-start gap-4">
                            <MapPin className="text-secondary-color mt-1 flex-shrink-0" size={24} />
                            <div className="flex-grow">
                                <h4 className="font-semibold text-gray-800 text-lg mb-1">Main Branch (Saraf Bazaar)</h4>
                                <p className="text-gray-600 mb-2">
                                    Shop No. 4, Saraf Bazaar,<br />
                                    Main Road, Nashik - 422001<br />
                                    Maharashtra, India
                                </p>
                                <a
                                    href="https://www.google.com/maps/search/?api=1&query=Amol+Ashtekar+Sons+Saraf+Bazaar+Nashik"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-secondary-color hover:underline text-sm font-medium inline-flex items-center gap-1 mb-4"
                                >
                                    View on Google Maps
                                </a>

                                {/* Main Branch Image */}
                                <div className="rounded-lg overflow-hidden shadow-md border border-gray-100 mb-8">
                                    <img
                                        src={mainBranchImg}
                                        alt="Amol Ashtekar & Sons Main Branch"
                                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                <h4 className="font-semibold text-gray-800 text-lg mb-1 pt-4 border-t border-gray-100">2nd Branch (Nashik Road)</h4>
                                <p className="text-gray-600 mb-2">
                                    Amol Ashtekar and sons<br />
                                    Anand Mall, Shop No 5&6,<br />
                                    Near Kanya Kothari School, Jail Road,<br />
                                    Nashik Road - 422101
                                </p>
                                <div className="flex flex-col gap-1 mb-2">
                                    <a href="tel:+919822733333" className="text-gray-600 hover:text-secondary-color transition-colors flex items-center gap-2">
                                        <Phone size={14} /> +91 98227 33333
                                    </a>
                                    <a href="tel:+919730888800" className="text-gray-600 hover:text-secondary-color transition-colors flex items-center gap-2">
                                        <Phone size={14} /> +91 97308 88800
                                    </a>
                                </div>
                                <a
                                    href="https://www.google.com/maps/search/?api=1&query=Amol+Ashtekar+and+sons+Anand+Mall+Nashik+Road"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-secondary-color hover:underline text-sm font-medium inline-flex items-center gap-1"
                                >
                                    View on Google Maps
                                </a>

                                {/* 2nd Branch Image Placeholder */}
                                <div className="rounded-lg overflow-hidden shadow-md mt-4 border border-gray-100">
                                    <img
                                        src={secondBranchImg}
                                        alt="Amol Ashtekar & Sons Nashik Road Branch"
                                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Additional Contact Info */}
                        <div className="space-y-4 pt-4 border-t border-gray-100">
                            <div className="flex items-center gap-4">
                                <Mail className="text-secondary-color flex-shrink-0" size={24} />
                                <div>
                                    <h4 className="font-semibold text-gray-800">Email</h4>
                                    <p className="text-gray-600">amolashtekarandsons@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white p-8 shadow-lg rounded-lg border border-gray-100 h-fit">
                    <h2 className="text-2xl font-heading font-semibold text-gray-800 mb-6">Send us a Message</h2>
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary-color focus:border-transparent outline-none" placeholder="Your Name" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                                <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary-color focus:border-transparent outline-none" placeholder="Your Phone" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary-color focus:border-transparent outline-none" placeholder="Your Email" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                            <textarea rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary-color focus:border-transparent outline-none" placeholder="How can we help you?"></textarea>
                        </div>
                        <button type="submit" className="w-full btn-primary py-3">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
