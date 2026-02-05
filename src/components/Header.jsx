import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, User, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useUI } from '../context/UIContext';
import LoginModal from './LoginModal';
import ServiceModal from './ServiceModal';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [hoveredService, setHoveredService] = useState(null);
    const location = useLocation();
    const { openLogin, isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useUI();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        closeMobileMenu();
    }, [location]);

    const services = [
        { title: "IT Training & Consultancy", path: "/services/it", desc: "Master robust tech skills" },
        { title: "Marriage Matches", path: "/services/marriage", desc: "Find your perfect partner" },
        { title: "Meditation & Spirituality", path: "/services/meditation", desc: "Discover inner peace" }
    ];

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3 border-gray-100' : 'bg-white/5 backdrop-blur-sm py-5 border-white/10'
                    }`}
            >
                <div className="container-custom flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-3 text-2xl font-semibold transform hover:scale-105 transition-transform duration-300" aria-label="Go to homepage">
                        <img src="/logo.png" alt="Sri Kanishka Associates" className="h-20 w-auto object-contain mix-blend-multiply" />
                        <span className="sr-only">Sri Kanishka Associates</span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link to="/" className={`font-bold text-sm tracking-wide transition-colors ${location.pathname === '/' ? 'text-gold-600' : 'text-gray-900 hover:text-gold-600'}`}>HOME</Link>

                        <div
                            className="relative group"
                            onMouseEnter={() => setHoveredService(true)}
                            onMouseLeave={() => setHoveredService(false)}
                        >
                            <button className={`flex items-center space-x-1 font-bold text-sm tracking-wide transition-colors ${location.pathname.includes('/services') ? 'text-gold-600' : 'text-gray-900 group-hover:text-gold-600'}`}>
                                <span>SERVICES</span>
                                <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                            </button>

                            {/* Mega Menu */}
                            <AnimatePresence>
                                {hoveredService && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[600px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden p-6 grid grid-cols-2 gap-6"
                                    >
                                        <div className="col-span-2 text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Our Expertise</div>
                                        {services.map((service, idx) => (
                                            <Link
                                                key={idx}
                                                to={service.path}
                                                className="flex flex-col p-4 rounded-xl hover:bg-gold-50 transition-colors group/item"
                                            >
                                                <span className="font-bold text-gray-800 group-hover/item:text-gold-700">{service.title}</span>
                                                <span className="text-sm text-gray-500 mt-1">{service.desc}</span>
                                            </Link>
                                        ))}
                                        <div className="col-span-2 bg-slate-50 rounded-xl p-4 flex items-center justify-between mt-2">
                                            <div>
                                                <span className="block font-bold text-gray-800 text-sm">Not sure what you need?</span>
                                                <span className="text-xs text-gray-500">Contact our experts for a free consultation.</span>
                                            </div>
                                            <Link to="/contact" className="text-xs font-bold text-gold-600 flex items-center hover:underline">
                                                Contact Us <ArrowRight size={12} className="ml-1" />
                                            </Link>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <Link to="/about" className={`font-bold text-sm tracking-wide transition-colors ${location.pathname === '/about' ? 'text-gold-600' : 'text-gray-900 hover:text-gold-600'}`}>ABOUT</Link>
                        <Link to="/contact" className={`font-bold text-sm tracking-wide transition-colors ${location.pathname === '/contact' ? 'text-gold-600' : 'text-gray-900 hover:text-gold-600'}`}>CONTACT</Link>
                    </nav>

                    <div className="hidden md:flex items-center space-x-4">
                        <button
                            onClick={openLogin}
                            className="flex items-center space-x-2 px-6 py-2.5 btn-primary"
                        >
                            <User size={16} />
                            <span>Login</span>
                        </button>
                    </div>

                    {/* Mobile Toggle */}
                    <button className="md:hidden text-gray-800" onClick={toggleMobileMenu} aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}>
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
                        >
                            <div className="px-6 py-8 flex flex-col space-y-6">
                                <Link to="/" className="text-lg font-medium text-gray-800">Home</Link>
                                <div className="space-y-4">
                                    <span className="text-lg font-medium text-gray-800 block">Services</span>
                                    <div className="pl-4 space-y-3 border-l-2 border-gold-200">
                                        {services.map((s) => (
                                            <Link key={s.path} to={s.path} className="block text-gray-600">{s.title}</Link>
                                        ))}
                                    </div>
                                </div>
                                <Link to="/about" className="text-lg font-medium text-gray-800">About</Link>
                                <Link to="/contact" className="text-lg font-medium text-gray-800">Contact</Link>
                                <button
                                    onClick={openLogin}
                                    className="w-full py-3 bg-gold-500 text-white font-bold rounded-lg shadow-md mt-4"
                                >
                                    Login
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>

            <LoginModal />
            <ServiceModal />
        </>
    );
};

export default Header;
