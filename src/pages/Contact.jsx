import React from 'react';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';
import mainBranchImg from '../assets/ashetkar main branch.jpeg';
import secondBranchImg from '../assets/ashtekar second branch.jpeg';
import instagramQR from '../assets/instagram-qr.png';

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

                    <div className="space-y-8 mt-8">
                        {/* Branch 1 - Anand Mall */}
                        <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 shadow-sm">
                            <div className="flex items-start gap-4 mb-4">
                                <MapPin className="text-secondary-color mt-1 flex-shrink-0" size={24} />
                                <div className="flex-grow">
                                    <h4 className="font-semibold text-gray-800 text-xl mb-3">Branch 1 - Anand Mall</h4>
                                    <p className="text-gray-700 mb-3 leading-relaxed">
                                        Anand mall shop no 5&6,<br />
                                        near kanya kothari school,<br />
                                        jail road, nashik road 422101
                                    </p>

                                    {/* Contact Numbers */}
                                    <div className="flex flex-wrap gap-2 mb-4 text-sm text-gray-600">
                                        <span className="flex items-center gap-1">
                                            <Phone size={14} className="text-secondary-color" />
                                            98227 33333
                                        </span>
                                        <span className="text-gray-400">•</span>
                                        <span>9730888800</span>
                                        <span className="text-gray-400">•</span>
                                        <span>9850000029</span>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex flex-wrap gap-3 mb-4">
                                        <a
                                            href="tel:+919822733333"
                                            className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-color text-white rounded-lg hover:bg-opacity-90 transition-all shadow-sm hover:shadow-md"
                                        >
                                            <Phone size={16} />
                                            <span className="font-medium">Call</span>
                                        </a>
                                        <a
                                            href="https://wa.me/919822733333"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all shadow-sm hover:shadow-md"
                                        >
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                            </svg>
                                            <span className="font-medium">WhatsApp</span>
                                        </a>
                                        <a
                                            href="https://maps.app.goo.gl/mfARCgF526o2UJ6j6?g_st=aw"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-sm hover:shadow-md"
                                        >
                                            <MapPin size={16} />
                                            <span className="font-medium">Location</span>
                                        </a>
                                    </div>

                                    {/* Branch Image */}
                                    <div className="rounded-lg overflow-hidden shadow-md border border-gray-100">
                                        <img
                                            src={secondBranchImg}
                                            alt="Amol Ashtekar & Sons - Branch 1 Anand Mall"
                                            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Branch 2 - Esteem Tower */}
                        <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 shadow-sm">
                            <div className="flex items-start gap-4 mb-4">
                                <MapPin className="text-secondary-color mt-1 flex-shrink-0" size={24} />
                                <div className="flex-grow">
                                    <h4 className="font-semibold text-gray-800 text-xl mb-3">Branch 2 - Esteem Tower</h4>
                                    <p className="text-gray-700 mb-3 leading-relaxed">
                                        Amol Ashtekar and sons<br />
                                        Esteem tower shop no.4<br />
                                        infront of Guru nanak petrol pump,<br />
                                        station road, nashik road 422101
                                    </p>

                                    {/* Contact Numbers */}
                                    <div className="flex flex-wrap gap-2 mb-4 text-sm text-gray-600">
                                        <span className="flex items-center gap-1">
                                            <Phone size={14} className="text-secondary-color" />
                                            9822733333
                                        </span>
                                        <span className="text-gray-400">•</span>
                                        <span>9730888800</span>
                                        <span className="text-gray-400">•</span>
                                        <span>9850000029</span>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex flex-wrap gap-3 mb-4">
                                        <a
                                            href="tel:+919822733333"
                                            className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-color text-white rounded-lg hover:bg-opacity-90 transition-all shadow-sm hover:shadow-md"
                                        >
                                            <Phone size={16} />
                                            <span className="font-medium">Call</span>
                                        </a>
                                        <a
                                            href="https://wa.me/919822733333"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all shadow-sm hover:shadow-md"
                                        >
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                            </svg>
                                            <span className="font-medium">WhatsApp</span>
                                        </a>
                                        <a
                                            href="https://maps.app.goo.gl/mfARCgF526o2UJ6j6?g_st=aw"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-sm hover:shadow-md"
                                        >
                                            <MapPin size={16} />
                                            <span className="font-medium">Location</span>
                                        </a>
                                    </div>

                                    {/* Branch Image */}
                                    <div className="rounded-lg overflow-hidden shadow-md border border-gray-100">
                                        <img
                                            src={mainBranchImg}
                                            alt="Amol Ashtekar & Sons - Branch 2 Esteem Tower"
                                            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
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

                        {/* Instagram QR Code Section */}
                        <div className="pt-4 border-t border-gray-100">
                            <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 p-6 rounded-xl border border-orange-200 shadow-sm">
                                <div className="flex items-center gap-3 mb-4">
                                    <Instagram className="text-pink-600" size={28} />
                                    <h4 className="font-semibold text-gray-800 text-lg">Follow Us on Instagram</h4>
                                </div>
                                <p className="text-gray-600 mb-4 text-sm">
                                    Scan the QR code to follow <span className="font-semibold text-pink-600">@amol_s_ashtekar</span> and stay updated with our latest collections!
                                </p>
                                <div className="flex flex-col items-center gap-4">
                                    <div className="bg-white p-4 rounded-xl shadow-lg border-2 border-pink-200 inline-block">
                                        <img
                                            src={instagramQR}
                                            alt="Instagram QR Code - @amol_s_ashtekar"
                                            className="w-48 h-48 object-contain"
                                        />
                                    </div>
                                    <a
                                        href="https://www.instagram.com/amol_s_ashtekar?utm_source=qr&igsh=dnh0OXZoczkxczkx"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 text-white rounded-full hover:shadow-lg transition-all font-medium"
                                    >
                                        <Instagram size={20} />
                                        <span>Visit Our Instagram</span>
                                    </a>
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
