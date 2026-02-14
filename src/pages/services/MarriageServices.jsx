import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Shield, Users, Search, Sparkles, ChevronDown, CheckCircle, Star } from 'lucide-react';
import { useUI } from '../../context/UIContext';

const MarriageServices = () => {
    const [step, setStep] = useState(1);
    const { openServiceModal } = useUI();

    return (
        <div className="min-h-screen">
            {/* Hero */}
            {/* Hero */}
            {/* Hero */}
            <section className="relative rounded-[2.5rem] margin-x-custom mx-4 md:mx-6 mb-16 overflow-hidden min-h-[600px] flex items-center shadow-2xl shadow-rose-100/50">
                <div className="absolute inset-0">
                    <img src="/images/marriage/hero-couple.png" alt="Happy Couple" className="w-full h-full object-cover object-top" />
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-rose-900/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none mix-blend-multiply"></div>

                <div className="container-custom relative z-10 px-8 md:px-12 py-12">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-5xl p-8 md:p-12 rounded-[2.5rem] bg-white/5 backdrop-blur-sm border border-white/10 shadow-xl relative overflow-hidden group"
                    >
                        {/* Mirror Reflection */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/5 to-transparent opacity-30 pointer-events-none"></div>

                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/50 text-rose-800 text-xs font-bold uppercase tracking-wider mb-8 shadow-sm">
                                <Heart size={14} className="text-rose-600 fill-rose-600" />
                                Trusted Matrimony
                            </div>

                            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 font-display leading-tight drop-shadow-sm">
                                Find Your <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-700">Soulmate Today</span>
                            </h1>
                            <p className="text-xl text-gray-800 max-w-2xl mb-12 leading-relaxed font-sans font-medium">
                                We blend traditional values with modern preferences to help you write your perfect love story. Verified profiles, absolute privacy, and personalized matchmaking.
                            </p>

                            {/* Search Bar Integration */}
                            <div className="bg-white/40 p-3 rounded-[2rem] shadow-xl border border-white/50 flex flex-col md:flex-row gap-2 items-center backdrop-blur-md">
                                <div className="flex-1 w-full relative group bg-white/60 rounded-xl hover:bg-white/80 transition-colors">
                                    <select className="appearance-none w-full p-3 bg-transparent border-none outline-none font-bold text-gray-800 cursor-pointer pl-5 text-sm">
                                        <option>Looking for a Bride</option>
                                        <option>Looking for a Groom</option>
                                    </select>
                                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-rose-500 pointer-events-none" size={14} />
                                </div>
                                <div className="w-px h-8 bg-gray-400/30 hidden md:block"></div>
                                <div className="flex-1 w-full relative group bg-white/60 rounded-xl hover:bg-white/80 transition-colors">
                                    <select className="appearance-none w-full p-3 bg-transparent border-none outline-none font-bold text-gray-800 cursor-pointer pl-5 text-sm">
                                        <option>Age 22 - 28</option>
                                        <option>Age 28 - 35</option>
                                        <option>Age 35+</option>
                                    </select>
                                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-rose-500 pointer-events-none" size={14} />
                                </div>
                                <div className="w-px h-8 bg-gray-400/30 hidden md:block"></div>
                                <div className="flex-1 w-full relative group bg-white/60 rounded-xl hover:bg-white/80 transition-colors">
                                    <select className="appearance-none w-full p-3 bg-transparent border-none outline-none font-bold text-gray-800 cursor-pointer pl-5 text-sm">
                                        <option>Any Religion</option>
                                        <option>Hindu</option>
                                        <option>Muslim</option>
                                        <option>Christian</option>
                                    </select>
                                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-rose-400 pointer-events-none" size={14} />
                                </div>
                                <button className="bg-gradient-to-r from-rose-500 to-pink-600 text-white px-8 py-3 rounded-full font-bold hover:shadow-lg hover:shadow-rose-500/30 transition-all w-full md:w-auto shrink-0 text-sm">
                                    Search
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>


            {/* Process Section */}
            <section className="py-20">
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
            <section className="py-16">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="text-rose-500 font-bold tracking-widest uppercase text-xs mb-3 block">Our Commitment</span>
                        <h2 className="text-3xl font-bold text-black mb-6 font-display">A Union of Souls & Families</h2>
                        <p className="text-lg text-black leading-relaxed mb-6">
                            Marriage is more than just a ceremony; it is a lifetime commitment of two families. At Sri Kanishka, we understand the delicate balance between modern aspirations and traditional family values.
                        </p>
                        <p className="text-lg text-black leading-relaxed">
                            Our dedicated relationship managers spend time understanding not just your biodata, but your personality, life goals, and family dynamics to suggest matches that truly resonate on a deeper level. We believe in creating alliances that stand the test of time.
                        </p>
                    </div>
                </div>
            </section>

            {/* Royal Gold Experience Section */}
            <section className="py-20 overflow-hidden">
                <div className="container-custom">
                    <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
                        <div className="lg:w-1/2 relative group">
                            <div className="absolute -inset-4 bg-gradient-to-r from-rose-200 to-orange-100 rounded-[2.5rem] -z-10 blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <img
                                src="/images/marriage/indian_wedding_royal_couple_1770706214572.png"
                                alt="Royal Couple"
                                className="rounded-[2rem] shadow-2xl w-full object-cover h-[500px] transform group-hover:scale-[1.02] transition-transform duration-500"
                            />
                            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-rose-100">
                                <div className="flex items-center gap-2 text-rose-600 font-bold">
                                    <Sparkles size={20} />
                                    <span>Premium verified profiles</span>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <span className="text-rose-600 font-bold tracking-widest uppercase text-xs mb-4 block">The Gold Standard</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-display leading-tight">
                                Exclusive Matchmaking <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-orange-600">for Elite Families</span>
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                Embark on a journey to find a partner who shares your values, heritage, and status. Our premium service is designed for families who seek dignity, discretion, and a perfect union of equals.
                            </p>

                            <ul className="space-y-4 mb-10">
                                {[
                                    "Dedicated Relationship Manager for personalized searching",
                                    "Enhanced Privacy Controls & Profile Highlighting",
                                    "Background Checks & Family Verification Reports",
                                    "Priority Access to New Premium Profiles"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="mt-1 bg-rose-100 p-1 rounded-full text-rose-600">
                                            <CheckCircle size={14} />
                                        </div>
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <button onClick={() => openServiceModal('marriage', 'Inquire Gold Membership')} className="bg-gray-900 text-white px-8 py-3 rounded-full font-bold hover:bg-rose-600 transition-colors shadow-lg shadow-rose-200">
                                Upgrade to Gold
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <h3 className="text-3xl font-bold text-gray-900 mb-6 font-display">Deep Compatibility & Sacred Rituals</h3>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                We understand that an Indian wedding is not just a union of two individuals, but a coming together of two joyous families and sacred traditions.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                From detailed Horoscope Matching (Gun Milan) to ensuring cultural alignment, we help lay the spiritual foundation for a bond that is celebrated with timeless rituals.
                            </p>
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-rose-50 flex items-center gap-4">
                                <div className="bg-orange-100 p-3 rounded-full text-orange-600">
                                    <Star size={24} fill="currentColor" />
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900">Expert Astrology Team</div>
                                    <div className="text-sm text-gray-500">Available for consultation 24/7</div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 relative group">
                            <div className="absolute -inset-4 bg-gradient-to-l from-orange-100 to-rose-200 rounded-[2.5rem] -z-10 blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <img
                                src="/images/marriage/indian_wedding_rituals_hands_1770706233016.png"
                                alt="Traditional Rituals"
                                className="rounded-[2rem] shadow-2xl w-full object-cover h-[400px] transform group-hover:scale-[1.02] transition-transform duration-500"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center gap-16 mt-24">
                        <div className="lg:w-1/2 relative group">
                            <div className="absolute -inset-4 bg-gradient-to-r from-orange-100 to-rose-200 rounded-[2.5rem] -z-10 blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <img
                                src="/images/marriage/indian_wedding_couple_v3_1770706270419.png"
                                alt="Happy Couple"
                                className="rounded-[2rem] shadow-2xl w-full object-cover h-[500px] transform group-hover:scale-[1.02] transition-transform duration-500"
                            />
                        </div>
                        <div className="lg:w-1/2">
                            <span className="text-rose-600 font-bold tracking-widest uppercase text-xs mb-4 block">A Lifetime of Happiness</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-display leading-tight">
                                Celebrate Your <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-orange-600">Love Story</span>
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                Every "Happy Ending" starts with a beautiful beginning. Join the thousands of couples who have found their perfect companion through us.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                Whether you dream of a grand celebration or an intimate ceremony, finding the right person is the first step. Let us help you write the first chapter of your forever.
                            </p>
                            <button onClick={() => openServiceModal('marriage', 'Start Your Journey')} className="flex items-center gap-2 text-rose-600 font-bold hover:text-rose-700 transition-colors group">
                                <span>Start Your Journey</span>
                                <ChevronDown className="transform -rotate-90 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
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
                            <div key={idx} className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-rose-100 group">
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

            {/* Placement Stats & Partners - Footer Style */}
            <section className="py-20 bg-[#1F1209] text-white rounded-t-[3rem] mt-auto">
                <div className="container-custom">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 text-center divide-x divide-white/10">
                        <div>
                            <div className="text-4xl md:text-5xl font-bold text-rose-500 mb-2 font-display">10k+</div>
                            <div className="text-sm md:text-base text-rose-100/60 font-medium">Matches Made</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold text-rose-500 mb-2 font-display">50k+</div>
                            <div className="text-sm md:text-base text-rose-100/60 font-medium">Active Profiles</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold text-rose-500 mb-2 font-display">98%</div>
                            <div className="text-sm md:text-base text-rose-100/60 font-medium">Verification Rate</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold text-rose-500 mb-2 font-display">24/7</div>
                            <div className="text-sm md:text-base text-rose-100/60 font-medium">Support Team</div>
                        </div>
                    </div>

                    <div className="text-center">
                        <p className="text-rose-100/40 text-sm uppercase tracking-widest mb-8 font-bold">Featured In</p>
                        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                            {['Vogue Weddings', 'The Knot', 'Brides', 'WeddingWire', 'Shaadi Sagan', 'WedMeGood'].map((company, i) => (
                                <span key={i} className="text-xl md:text-2xl font-bold font-display text-white">{company}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div >
    );
};

export default MarriageServices;
