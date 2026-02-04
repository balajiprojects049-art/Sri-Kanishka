import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-slate-900 pt-20 pb-10 border-t border-slate-800">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-6">
                        <Link to="/" className="inline-block">
                            <h3 className="text-3xl font-bold text-white font-display">
                                Sri Kanishka
                            </h3>
                        </Link>
                        <p className="text-slate-400 leading-relaxed text-sm">
                            Empowering lives through career growth, relationship harmony, and inner peace. Your holistic partner for success and well-being.
                        </p>
                        <div className="flex space-x-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 text-slate-400 flex items-center justify-center hover:bg-amber-500 hover:text-white hover:border-amber-500 transition-all transform hover:-translate-y-1 shadow-sm">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white font-display">Quick Links</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link to="/" className="text-slate-400 hover:text-amber-500 transition-colors">Home</Link></li>
                            <li><Link to="/about" className="text-slate-400 hover:text-amber-500 transition-colors">About Us</Link></li>
                            <li><Link to="/services" className="text-slate-400 hover:text-amber-500 transition-colors">Services</Link></li>
                            <li><Link to="/contact" className="text-slate-400 hover:text-amber-500 transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white font-display">Our Services</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link to="/services/it" className="text-slate-400 hover:text-amber-500 transition-colors">IT Training</Link></li>
                            <li><Link to="/services/marriage" className="text-slate-400 hover:text-amber-500 transition-colors">Matrimony</Link></li>
                            <li><Link to="/services/meditation" className="text-slate-400 hover:text-amber-500 transition-colors">Meditation</Link></li>
                            <li><Link to="/services" className="text-slate-400 hover:text-amber-500 transition-colors">All Services</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white font-display">Stay Updated</h4>
                        <p className="text-slate-400 text-sm mb-4">Subscribe to our newsletter to receive updates and insights.</p>
                        <form className="relative" onSubmit={(e) => e.preventDefault()} aria-label="Subscribe to newsletter">
                            <input
                                type="email"
                                aria-label="Email address"
                                placeholder="Enter email address"
                                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none pr-12 transition-all shadow-sm placeholder-slate-500"
                            />
                            <button type="submit" aria-label="Subscribe" className="absolute right-2 top-2 bg-amber-500 text-white p-1.5 rounded-md hover:bg-amber-600 transition-colors shadow-md">
                                <ArrowRight size={16} />
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
                    <p>&copy; {new Date().getFullYear()} Sri Kanishka Associates. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-amber-500 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-amber-500 transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
