import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, Heart, User, Menu, X, ChevronDown, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/images/logo.png';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Our Collection', path: '/collections' },
        { name: 'Bridal Jewellery', path: '/bridal-jewellery' },
        { name: 'Services', path: '/services' },
        { name: 'About Us', path: '/about-us' },
        { name: 'Contact Us', path: '/contact-us' },
    ];

    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const searchResults = [
        { name: "Bridal Jewellery", path: "/bridal-jewellery", category: "Collection" },
        { name: "Gold Necklaces", path: "/collections/necklaces", category: "Necklaces" },
        { name: "Diamond Rings", path: "/collections", category: "Rings" },
        { name: "Antique Bangles", path: "/collections/bangles", category: "Bangles" },
        { name: "Silver Articles", path: "/collections/silver-articles", category: "Silver" },
        { name: "Men's Watches", path: "/collections/watches/men", category: "Watches" },
        { name: "Women's Watches", path: "/collections/watches/women", category: "Watches" },
    ].filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));

    return (
        <>
            <header
                className={`fixed w-full top-0 z-50 transition-all duration-500 ease-in-out flex flex-col ${isScrolled
                    ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gold/20'
                    : 'bg-white/80 backdrop-blur-sm'
                    }`}
            >
                {/* Gold & Silver Rates Ticker */}
                <div className="bg-primary-dark text-secondary-color text-[10px] md:text-xs py-1.5 overflow-hidden relative tracking-wider font-medium uppercase border-b border-gold/30">
                    <div className="animate-marquee whitespace-nowrap flex gap-16 w-max mx-auto md:w-full md:justify-center md:animate-none">
                        <span>Today's Rates:</span>
                        <span className="flex items-center gap-2">Example Gold (24K): <span className="text-white">₹7,650/g</span></span>
                        <span className="flex items-center gap-2">Gold (22K): <span className="text-white">₹7,050/g</span></span>
                        <span className="flex items-center gap-2">Silver: <span className="text-white">₹92.50/g</span></span>
                    </div>
                </div>

                <div className="container mx-auto px-6 flex justify-between items-center py-2 md:py-4">
                    {/* Mobile Menu & Search Toggle */}
                    <div className="lg:hidden flex gap-4">
                        <button
                            className="text-primary-color hover:text-secondary-color transition-colors"
                            onClick={() => setIsMobileMenuOpen(true)}
                            aria-label="Open Menu"
                        >
                            <Menu size={24} strokeWidth={1.5} />
                        </button>
                        <button
                            className="text-primary-color hover:text-secondary-color transition-colors"
                            onClick={() => setIsSearchOpen(true)}
                            aria-label="Open Search"
                        >
                            <Search size={24} strokeWidth={1.5} />
                        </button>
                    </div>

                    {/* Logo - Centered on Mobile, Left on Desktop */}
                    <div className="logo flex-shrink-0 flex items-center justify-center lg:justify-start w-full lg:w-auto">
                        <Link to="/" aria-label="Amol Ashtekar & Sons Home">
                            <img
                                src={logo}
                                alt="Amol Ashtekar & Sons"
                                className="h-10 md:h-14 w-auto object-contain mix-blend-multiply transition-transform duration-300 hover:scale-105 contrast-110 brightness-105 drop-shadow-[0_2px_8px_rgba(184,134,11,0.3)]"
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation - Centered */}
                    <nav className="hidden lg:flex gap-8 items-center justify-center flex-grow mx-10">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                className="group relative text-xs xl:text-sm font-body uppercase tracking-[0.15em] font-medium text-text-dark hover:text-primary-color transition-colors duration-300 py-2"
                            >
                                {item.name}
                                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-secondary-color transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100"></span>
                            </Link>
                        ))}
                    </nav>

                    {/* Icons - Right */}
                    <div className="flex gap-6 items-center flex-shrink-0 hidden lg:flex">
                        <button
                            onClick={() => setIsSearchOpen(true)}
                            className="text-text-dark hover:text-primary-color transition-colors duration-300"
                            aria-label="Search"
                        >
                            <Search size={20} strokeWidth={1.5} />
                        </button>
                        <Link to="/contact-us" className="flex items-center gap-2 group cursor-pointer text-text-dark hover:text-primary-color transition-colors duration-300">
                            <Phone size={18} strokeWidth={1.5} className="group-hover:text-secondary-color transition-colors" />
                            <span className="text-xs font-semibold uppercase tracking-widest border-b border-transparent group-hover:border-secondary-color transition-all">Contact Us</span>
                        </Link>
                    </div>

                    {/* Mobile Cart/Search placeholder */}
                    <div className="lg:hidden w-8"></div>
                </div>
            </header >

            {/* Mobile Menu Overlay */}
            < AnimatePresence >
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ x: '-100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '-100%' }}
                        transition={{ type: 'tween', duration: 0.4, ease: "easeOut" }}
                        className="fixed inset-0 z-50 bg-bg-cream w-[85%] md:w-[60%] h-screen shadow-2xl flex flex-col border-r border-gold/20"
                    >
                        <div className="flex justify-between items-center p-6 border-b border-gold/10">
                            <h2 className="text-xl font-heading font-bold text-primary-color tracking-wide">Menu</h2>
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="p-2 text-primary-color hover:bg-primary-color/5 rounded-full transition-colors"
                            >
                                <X size={24} strokeWidth={1.5} />
                            </button>
                        </div>

                        <nav className="flex flex-col p-6 gap-4 overflow-y-auto">
                            {navItems.map((item, index) => (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="py-3 px-2 text-lg font-heading text-text-dark border-b border-gray-100 hover:text-primary-color hover:pl-4 transition-all duration-300 flex justify-between items-center group"
                                >
                                    {item.name}
                                    <span className="opacity-0 group-hover:opacity-100 text-secondary-color">→</span>
                                </Link>
                            ))}
                            <div className="mt-10 flex justify-center">
                                <Link
                                    to="/contact-us"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="w-full flex justify-center items-center gap-2 px-6 py-4 bg-primary-color text-white text-sm uppercase tracking-widest hover:bg-primary-dark transition-all shadow-lg shadow-primary-color/20"
                                >
                                    <Phone size={18} />
                                    <span>Contact Us</span>
                                </Link>
                            </div>
                        </nav>
                    </motion.div>
                )
                }
            </AnimatePresence >

            {/* Search Overlay */}
            < AnimatePresence >
                {isSearchOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-[60] bg-white/98 backdrop-blur-xl flex flex-col items-center pt-32 px-6"
                    >
                        <button
                            onClick={() => setIsSearchOpen(false)}
                            className="absolute top-8 right-8 p-2 text-gray-500 hover:text-primary-color transition-colors"
                        >
                            <X size={32} strokeWidth={1} />
                        </button>
                        <div className="w-full max-w-3xl">
                            <h2 className="text-3xl font-heading text-center mb-8 text-primary-color">What are you looking for?</h2>
                            <div className="relative mb-12">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={24} />
                                <input
                                    type="text"
                                    autoFocus
                                    placeholder="Search rings, necklaces, bridal..."
                                    className="w-full bg-gray-50 border-b-2 border-gray-200 focus:border-secondary-color py-4 pl-14 pr-4 text-xl outline-none transition-colors"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>

                            {searchQuery && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in">
                                    {searchResults.length > 0 ? (
                                        searchResults.map((result, idx) => (
                                            <Link
                                                key={idx}
                                                to={result.path}
                                                onClick={() => setIsSearchOpen(false)}
                                                className="flex justify-between items-center p-4 hover:bg-gray-50 border border-gray-100 rounded-lg group transition-colors"
                                            >
                                                <span className="font-heading text-lg group-hover:text-primary-color transition-colors">{result.name}</span>
                                                <span className="text-xs uppercase tracking-wider text-gray-400">{result.category}</span>
                                            </Link>
                                        ))
                                    ) : (
                                        <p className="text-center text-gray-400 col-span-2">No results found.</p>
                                    )}
                                </div>
                            )}

                            {!searchQuery && (
                                <div className="text-center">
                                    <p className="text-sm text-gray-400 uppercase tracking-widest mb-6">Popular Searches</p>
                                    <div className="flex flex-wrap justify-center gap-4">
                                        {['Bridal', 'Gold Rings', 'Silver Images', 'Watches'].map(term => (
                                            <button
                                                key={term}
                                                onClick={() => setSearchQuery(term)}
                                                className="px-6 py-2 border border-gray-200 rounded-full hover:border-gold hover:text-gold transition-colors"
                                            >
                                                {term}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence >

            {/* Overlay backdrop for mobile menu */}
            {
                isMobileMenuOpen && (
                    <div
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
                        onClick={() => setIsMobileMenuOpen(false)}
                    />
                )
            }
        </>
    );
};

export default Header;
