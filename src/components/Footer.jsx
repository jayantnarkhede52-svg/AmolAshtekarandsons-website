import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../assets/images/logo.png';

const Footer = () => {
    return (
        <footer className="bg-[#1A1A1A] text-white pt-20 pb-10">
            <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                {/* Brand Column */}
                <div>
                    <img src={logo} alt="Amol Ashtekar & Sons" className="h-16 w-auto mb-6 object-contain invert brightness-0 contrast-200 drop-shadow-[0_2px_12px_rgba(184,134,11,0.4)]" />
                    <p className="text-gray-400 mb-8 leading-relaxed">
                        Crafting timeless elegance since 1971. A legacy of trust, purity, and artistic excellence in every piece of jewellery.
                    </p>
                    <div className="flex gap-4">
                        <a href="https://facebook.com" aria-label="Visit our Facebook page" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-black transition-all">
                            <Facebook size={18} />
                        </a>
                        <a href="https://instagram.com" aria-label="Visit our Instagram profile" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-black transition-all">
                            <Instagram size={18} />
                        </a>
                        <a href="https://twitter.com" aria-label="Visit our Twitter profile" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-black transition-all">
                            <Twitter size={18} />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-heading font-semibold mb-6 tracking-wide text-gold">Quick Links</h3>
                    <ul className="space-y-4 text-gray-400">
                        <li><a href="#" className="hover:text-gold transition-colors">Our Story</a></li>
                        <li><a href="#" className="hover:text-gold transition-colors">Gold Rate Today</a></li>
                        <li><a href="#" className="hover:text-gold transition-colors">Shop Collections</a></li>
                        <li><a href="#" className="hover:text-gold transition-colors">Book Appointment</a></li>
                        <li><Link to="/faq" className="hover:text-gold transition-colors">FAQ</Link></li>
                        <li><a href="#" className="hover:text-gold transition-colors">Customer Reviews</a></li>
                    </ul>
                </div>

                {/* Collections */}
                <div>
                    <h3 className="text-lg font-heading font-semibold mb-6 tracking-wide text-gold">Collections</h3>
                    <ul className="space-y-4 text-gray-400">
                        <li><a href="#" className="hover:text-gold transition-colors">Bridal Jewellery</a></li>
                        <li><a href="#" className="hover:text-gold transition-colors">1 Gram Gold Ornaments</a></li>
                        <li><a href="#" className="hover:text-gold transition-colors">92.50 Sterling Silver</a></li>
                        <li><a href="#" className="hover:text-gold transition-colors">Pure Silver Articles</a></li>
                        <li><a href="#" className="hover:text-gold transition-colors">Gemstones & Art Jewellery</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-lg font-heading font-semibold mb-6 tracking-wide text-gold">Contact Us</h3>
                    <ul className="space-y-6 text-gray-400">
                        <li className="flex gap-4 items-start">
                            <MapPin size={20} className="text-gold shrink-0 mt-1" />
                            <span>
                                Shop No. 4, Saraf Bazaar,<br />
                                Main Road, Nashik - 422001
                            </span>
                        </li>
                        <li className="flex gap-4 items-center">
                            <Phone size={20} className="text-gold shrink-0" />
                            <a href="tel:+919822733333" className="hover:text-gold transition-colors">
                                +91 98227 33333
                            </a>
                        </li>
                        <li className="flex gap-4 items-center">
                            <Mail size={20} className="text-gold shrink-0" />
                            <a href="mailto:amolashtekarandsons@gmail.com" className="hover:text-gold transition-colors">
                                amolashtekarandsons@gmail.com
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="container border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                <p>&copy; 2026 Amol Ashtekar & Sons. All Rights Reserved.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
