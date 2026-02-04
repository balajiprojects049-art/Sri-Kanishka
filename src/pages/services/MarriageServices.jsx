import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Shield, Users, Search, Sparkles, ChevronDown } from 'lucide-react';
import { useUI } from '../../context/UIContext';

const MarriageServices = () => {
    const [step, setStep] = useState(1);
    const { openServiceModal } = useUI();

    return (
        <div className="min-h-screen bg-white">
            {/* Hero */}
            <section className="relative pt-32 pb-12 mb-20 text-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-white to-pink-50/50"></div>
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-rose-100/40 rounded-full blur-3xl -ml-20 -mt-20 pointer-events-none"></div>

                <div className="container-custom relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center justify-center px-4 py-2 bg-white rounded-full shadow-md mb-8 border border-rose-100 text-rose-500 font-bold text-sm tracking-wide gap-2"
                    >
                        <Heart className="fill-rose-500" size={16} />
                        <span>Trusted by 5000+ Couples</span>
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 font-display">
                        Find Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-600">Soulmate</span>.
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
                        We blend traditional values with modern preferences to help you write your perfect love story. Verified profiles, absolute privacy, and personalized matchmaking.
                    </p>

                    {/* Simple Search Mockup */}
                    <div className="bg-white p-3 rounded-full shadow-xl shadow-rose-100/50 max-w-4xl mx-auto flex flex-col md:flex-row gap-2 items-center border border-rose-100">
                        <div className="flex-1 w-full relative group">
                            <select className="appearance-none w-full p-4 bg-transparent border-none outline-none font-bold text-gray-700 cursor-pointer">
                                <option>Looking for a Bride</option>
                                <option>Looking for a Groom</option>
                            </select>
                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-rose-400 group-hover:text-rose-600 pointer-events-none" size={16} />
                        </div>
                        <div className="w-px h-8 bg-gray-200 hidden md:block"></div>
                        <div className="flex-1 w-full relative group">
                            <select className="appearance-none w-full p-4 bg-transparent border-none outline-none font-bold text-gray-700 cursor-pointer">
                                <option>Age 22 - 28</option>
                                <option>Age 28 - 35</option>
                                <option>Age 35+</option>
                            </select>
                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-rose-400 group-hover:text-rose-600 pointer-events-none" size={16} />
                        </div>
                        <div className="w-px h-8 bg-gray-200 hidden md:block"></div>
                        <div className="flex-1 w-full relative group">
                            <select className="appearance-none w-full p-4 bg-transparent border-none outline-none font-bold text-gray-700 cursor-pointer">
                                <option>Any Religion</option>
                                <option>Hindu</option>
                                <option>Muslim</option>
                                <option>Christian</option>
                            </select>
                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-rose-400 group-hover:text-rose-600 pointer-events-none" size={16} />
                        </div>
                        <button className="bg-gradient-to-r from-rose-500 to-pink-600 text-white px-8 py-3 rounded-full font-bold hover:shadow-lg hover:shadow-rose-500/30 transition-all w-full md:w-auto shrink-0">
                            Search
                        </button>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <h2 className="text-3xl font-bold text-center mb-16 font-display text-gray-900">How It Works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-[3.5rem] left-20 right-20 h-0.5 bg-rose-100 -z-10 border-t-2 border-dashed border-rose-200"></div>

                        {[
                            { icon: Users, title: "Register", desc: "Create your profile for free" },
                            { icon: Search, title: "Connect", desc: "Filter & match preferences" },
                            { icon: Shield, title: "Verify", desc: "Safe interactions" },
                            { icon: Sparkles, title: "Marry", desc: "Start your forever" }
                        ].map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center group">
                                <div className="w-28 h-28 bg-white border-2 border-rose-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-rose-400 group-hover:shadow-xl transition-all duration-300 shadow-sm relative">
                                    <div className="absolute inset-2 bg-rose-50 rounded-full"></div>
                                    <item.icon className="text-rose-500 relative z-10" size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2 font-display">{item.title}</h3>
                                <p className="text-gray-500">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Approach Text */}
            <section className="py-16 bg-rose-50/50">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="text-rose-500 font-bold tracking-widest uppercase text-xs mb-3 block">Our Commitment</span>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 font-display">A Union of Souls & Families</h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            Marriage is more than just a ceremony; it is a lifetime commitment of two families. At Sri Kanishka, we understand the delicate balance between modern aspirations and traditional family values.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Our dedicated relationship managers spend time understanding not just your biodata, but your personality, life goals, and family dynamics to suggest matches that truly resonate on a deeper level. We believe in creating alliances that stand the test of time.
                        </p>
                    </div>
                </div>
            </section>

            {/* Features Detail */}
            <section className="py-12 mb-20">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "100% Verified Profiles", desc: "Every profile is screened physically to ensure safety.", icon: Shield },
                            { title: "Privacy Control", desc: "You decide who sees your photos and contact details.", icon: Search },
                            { title: "Personalized Support", desc: "Dedicated relationship managers to help you search.", icon: Users },
                            { title: "25+ Years of Trust", desc: "Helping families unite across generations with integrity.", icon: Heart }
                        ].map((feature, idx) => (
                            <div key={idx} className="bg-rose-50 p-8 rounded-3xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-rose-100 group">
                                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-rose-500 mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                    <feature.icon size={28} />
                                </div>
                                <h3 className="font-bold text-lg text-gray-900 mb-3">{feature.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Marriage Stats */}
            <section className="py-20 bg-rose-900 text-white rounded-[3rem] mx-4 mb-20">
                <div className="container-custom text-center">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 divide-x divide-rose-800">
                        <div>
                            <div className="text-4xl md:text-5xl font-bold mb-2">10k+</div>
                            <div className="text-rose-200">Matches Made</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold mb-2">50k+</div>
                            <div className="text-rose-200">Active Profiles</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
                            <div className="text-rose-200">Verification Rate</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
                            <div className="text-rose-200">Support Team</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Success Story Teaser */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[#f43f5e]"></div>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/hearts.png')] opacity-10"></div>

                <div className="container-custom relative z-10 text-center text-white">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8 font-display text-white">Ready to begin your journey?</h2>
                    <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">Your soulmate might be just one click away. Join our community of genuine people looking for meaningful connections.</p>
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => openServiceModal('marriage', 'Register Profile')}
                        className="bg-white text-rose-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-rose-50 transition-colors shadow-2xl hover:shadow-white/20"
                    >
                        Create Free Profile
                    </motion.button>
                </div>
            </section>
        </div>
    );
};

export default MarriageServices;
