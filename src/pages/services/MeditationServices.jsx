import React from 'react';
import { motion } from 'framer-motion';
import { Flower, Sun, Moon, Wind, Calendar, Sparkles } from 'lucide-react';
import { useUI } from '../../context/UIContext';

const MeditationServices = () => {
    const { openServiceModal } = useUI();
    return (
        <div className="bg-white min-h-screen pt-8">
            {/* Zen Hero */}
            <section className="container-custom mb-24 relative">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <div className="w-full md:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-bold uppercase tracking-wider mb-6"
                        >
                            <Sparkles size={14} />
                            Inner Sanctuary
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-bold font-display text-gray-900 mb-8"
                        >
                            Find Peace in <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">Chaos</span>.
                        </motion.h1>
                        <p className="text-xl text-gray-600 leading-relaxed mb-10">
                            Reconnect with your inner self through our guided meditation and spiritual awakening sessions. Designed for the modern mind to find balance and clarity.
                        </p>
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            onClick={() => openServiceModal('meditation', 'Book Meditation Session')}
                            className="bg-indigo-600 text-white px-8 py-4 rounded-full font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 flex items-center gap-2"
                        >
                            <Calendar size={18} /> Book a Session
                        </motion.button>
                    </div>
                    <div className="w-full md:w-1/2 relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-200 to-purple-200 rounded-[3rem] filter blur-3xl opacity-30 animate-pulse"></div>
                        <img
                            src="/images/hero-meditation.png"
                            alt="Meditation"
                            className="rounded-[3rem] shadow-2xl relative z-10 border-4 border-white"
                        />
                    </div>
                </div>
            </section>

            {/* Philosophy Text */}
            <section className="py-12 bg-white">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="text-indigo-500 font-bold tracking-widest uppercase text-xs mb-3 block">The Science of Stillness</span>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 font-display">Journey Within</h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            In a world that never stops, finding a moment of stillness is an act of rebellion and self-love. Our meditation practices are rooted in ancient Vedic traditions yet tailored for the contemporary lifestyle.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Whether you are dealing with corporate burnout, relationship stress, or simply seeking spiritual growth, our guided sessions provide the tools you need to build mental resilience and emotional intelligence.
                        </p>
                    </div>
                </div>
            </section>

            {/* Classes Grid */}
            <section className="container-custom pb-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { icon: Sun, title: "Morning Flow", time: "6:00 AM - 7:00 AM", desc: "Start your day with energy and clarity.", color: "orange" },
                        { icon: Wind, title: "Breath & Mind", time: "12:00 PM - 1:00 PM", desc: "Mid-day reset for focus and calm.", color: "cyan" },
                        { icon: Moon, title: "Deep Rest", time: "8:00 PM - 9:00 PM", desc: "Unwind and prepare for restful sleep.", color: "indigo" }
                    ].map((cls, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -5 }}
                            className="bg-white p-8 rounded-[2rem] card-shadow border border-gray-100 hover:border-indigo-100 transition-all group"
                        >
                            <div className={`w-16 h-16 rounded-2xl bg-${cls.color}-50 text-${cls.color}-500 flex items-center justify-center mb-6 px-4 ring-1 ring-${cls.color}-100`}>
                                <cls.icon size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2 font-display">{cls.title}</h3>
                            <span className="inline-block px-3 py-1 bg-gray-50 text-gray-500 text-sm font-bold rounded-full mb-4">{cls.time}</span>
                            <p className="text-gray-600 leading-relaxed">{cls.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Why Meditation */}
            <section className="py-12 bg-indigo-50/50 mb-20 rounded-[3rem] mx-4">
                <div className="container-custom">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">Holistic Benefits</h2>
                        <p className="text-gray-600">Regular practice can transform your life in numerous ways, scientifically and spiritually.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Stress Reduction", desc: "Lower cortisol levels and find deep relaxation.", icon: Wind },
                            { title: "Emotional Balance", desc: "Gain control over anxiety and negative thoughts.", icon: Sparkles },
                            { title: "Mental Clarity", desc: "Sharpen focus and improve cognitive function.", icon: Sun }
                        ].map((benefit, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-indigo-50 flex items-start gap-4">
                                <div className="p-3 bg-indigo-100 rounded-xl text-indigo-600 shrink-0">
                                    <benefit.icon size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-gray-900 mb-2">{benefit.title}</h4>
                                    <p className="text-gray-500 text-sm">{benefit.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-20 bg-indigo-900 text-white rounded-t-[3rem] mt-auto">
                <div className="container-custom text-center">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                        <div>
                            <div className="text-4xl font-bold text-indigo-300 mb-2">500+</div>
                            <div className="text-sm opacity-80">Retreats Conducted</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-indigo-300 mb-2">12k+</div>
                            <div className="text-sm opacity-80">Lives Touched</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-indigo-300 mb-2">50+</div>
                            <div className="text-sm opacity-80">Expert Masters</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-indigo-300 mb-2">10</div>
                            <div className="text-sm opacity-80">Global Centers</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MeditationServices;
