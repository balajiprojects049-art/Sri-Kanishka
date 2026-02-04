import React from 'react';
import { motion } from 'framer-motion';
import { Flower, Sun, Moon, Wind, Calendar, Sparkles } from 'lucide-react';
import { useUI } from '../../context/UIContext';

const MeditationServices = () => {
    const { openServiceModal } = useUI();
    return (
        <div className="bg-white min-h-screen">
            {/* Zen Hero */}
            <section className="relative pt-32 pb-12 mb-20 text-center overflow-hidden">
                <div className="absolute inset-0">
                    <img src="/images/meditation/hero-meditation.png" alt="Meditation" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-white/30"></div>
                </div>

                <div className="container-custom relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-indigo-100 text-indigo-600 text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-md"
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
                        Find Peace in <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">Chaos</span>.
                    </motion.h1>
                    <p className="text-xl text-gray-800 leading-relaxed mb-10 max-w-2xl mx-auto font-medium">
                        Reconnect with your inner self through our guided meditation and spiritual awakening sessions. Designed for the modern mind to find balance and clarity.
                    </p>
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => openServiceModal('meditation', 'Book Meditation Session')}
                        className="bg-indigo-600 text-white px-8 py-4 rounded-full font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 flex items-center gap-2 mx-auto"
                    >
                        <Calendar size={18} /> Book a Session
                    </motion.button>
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

            {/* Visual Break - Group Class */}
            <section className="py-12">
                <div className="container-custom">
                    <div className="rounded-[3rem] overflow-hidden relative min-h-[400px] flex items-center justify-center text-center">
                        <div className="absolute inset-0">
                            <img src="/images/meditation/group-class.jpg" alt="Group Meditation Class" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gray-900/40"></div>
                        </div>
                        <div className="relative z-10 p-10 max-w-3xl">
                            <h2 className="text-3xl md:text-5xl font-bold text-white font-display mb-6">Community Healing</h2>
                            <p className="text-white/90 text-xl">Join a community of like-minded souls. Our group sessions amplify the collective energy, making it easier to go deep within.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Classes Grid */}
            <section className="container-custom py-24">
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

            {/* Why Meditation / Holistic Benefits */}
            <section className="py-24 relative overflow-hidden mb-20 rounded-[3rem] mx-4">
                <div className="absolute inset-0">
                    <img src="/images/meditation/zen-wellness.png" alt="Zen Wellness" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-indigo-900/80"></div>
                </div>

                <div className="container-custom relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4 font-display">Holistic Benefits</h2>
                        <p className="text-indigo-100">Regular practice can transform your life in numerous ways, scientifically and spiritually.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Stress Reduction", desc: "Lower cortisol levels and find deep relaxation.", icon: Wind },
                            { title: "Emotional Balance", desc: "Gain control over anxiety and negative thoughts.", icon: Sparkles },
                            { title: "Mental Clarity", desc: "Sharpen focus and improve cognitive function.", icon: Sun }
                        ].map((benefit, idx) => (
                            <div key={idx} className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 flex items-start gap-4 hover:bg-white/20 transition-colors">
                                <div className="p-3 bg-white/20 rounded-xl text-white shrink-0">
                                    <benefit.icon size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-white mb-2">{benefit.title}</h4>
                                    <p className="text-indigo-100 text-sm">{benefit.desc}</p>
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
        </div >
    );
};

export default MeditationServices;
