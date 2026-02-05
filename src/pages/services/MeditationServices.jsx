import React from 'react';
import { motion } from 'framer-motion';
import { Flower, Sun, Moon, Wind, Calendar, Sparkles, Heart, Star } from 'lucide-react';
import { useUI } from '../../context/UIContext';

const MeditationServices = () => {
    const { openServiceModal } = useUI();

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <div className="bg-white min-h-screen">
            {/* Zen Hero Section */}
            <section className="relative pt-40 pb-20 lg:pt-52 lg:pb-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src="/images/meditation/hero-meditation.png" alt="Meditation" className="w-full h-full object-cover" />
                    {/* Clear Image - No Overlay */}
                </div>

                {/* Background Decor Layered on top of base but below content */}
                <div className="absolute top-20 left-10 w-64 h-64 bg-gold-100/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob z-0"></div>
                <div className="absolute top-40 right-10 w-64 h-64 bg-orange-100/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000 z-0"></div>

                <div className="container-custom relative z-10 text-center">
                    <div className="max-w-4xl mx-auto p-8 md:p-12 rounded-[3rem] bg-white/5 backdrop-blur-sm border border-white/10 shadow-xl relative overflow-hidden group">
                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/5 to-transparent opacity-30 pointer-events-none"></div>

                        <div className="relative z-10">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/50 text-gold-700 text-xs font-bold uppercase tracking-widest mb-8 shadow-sm ring-1 ring-white/50"
                            >
                                <Sparkles size={14} className="text-gold-600" />
                                <span>Inner Sanctuary</span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                className="text-5xl md:text-7xl lg:text-8xl font-bold font-display text-gray-900 mb-8 leading-tight drop-shadow-sm"
                            >
                                Find Peace in <br />
                                <span className="text-gradient-gold relative py-2">
                                    Stillness
                                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-gold-200/80 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                        <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                                    </svg>
                                </span>.
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-12 max-w-3xl mx-auto font-medium"
                            >
                                Reconnect with your inner self through our guided meditation and spiritual awakening sessions. Ancient wisdom for the modern mind.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.8 }}
                                className="flex flex-col sm:flex-row items-center justify-center gap-4"
                            >
                                <button
                                    onClick={() => openServiceModal('meditation', 'Book Meditation Session')}
                                    className="btn-primary group shadow-gold-200/50"
                                >
                                    <Calendar size={18} className="mr-2" />
                                    Book a Session
                                </button>
                                <button className="px-8 py-3 rounded-full font-sans font-semibold text-gray-800 bg-white/40 hover:bg-white border border-white/50 hover:border-gold-200 transition-all flex items-center gap-2 hover:shadow-lg">
                                    Explore Programs <span className="group-hover:translate-x-1 transition-transform">→</span>
                                </button>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Philosophy / Intro */}
            <section className="py-24 bg-white relative">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gold-50 rounded-[3rem] -z-10 transform -rotate-2"></div>
                            <img
                                src="/images/meditation/zen-wellness.png" // Using existing image path or placeholder
                                alt="Meditation Philosophy"
                                className="rounded-[2.5rem] shadow-2xl w-full object-cover h-[600px]"
                                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80&w=2000'; }} // Fallback
                            />
                            <div className="absolute bottom-10 -right-10 bg-white p-6 rounded-2xl shadow-xl max-w-xs hidden md:block">
                                <div className="flex items-center gap-4 mb-3">
                                    <div className="bg-gold-100 p-3 rounded-full text-gold-600">
                                        <Heart size={24} fill="currentColor" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900 text-lg">Mindfulness</div>
                                        <div className="text-sm text-gray-500">Daily Practice</div>
                                    </div>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed">"Quiet the mind, and the soul will speak."</p>
                            </div>
                        </div>

                        <div>
                            <span className="text-gold-600 font-bold tracking-widest uppercase text-xs mb-4 block">The Science of Stillness</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 font-display leading-tight">Journey into <br />Self-Discovery</h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                In a world that never stops, finding a moment of stillness is an act of rebellion and self-love. Our meditation practices are rooted in ancient Vedic traditions yet tailored for the contemporary lifestyle.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed mb-10">
                                Whether you are dealing with corporate burnout, relationship stress, or simply seeking spiritual growth, our guided sessions provide the tools you need.
                            </p>

                            <div className="grid grid-cols-2 gap-8">
                                <div className="border-l-4 border-gold-200 pl-6">
                                    <h4 className="font-bold text-xl text-gray-900 mb-2">Vedic Wisdom</h4>
                                    <p className="text-gray-500">Authentic teachings from certified masters.</p>
                                </div>
                                <div className="border-l-4 border-gold-200 pl-6">
                                    <h4 className="font-bold text-xl text-gray-900 mb-2">Modern Approach</h4>
                                    <p className="text-gray-500">Techniques adapted for busy, urban lives.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Classes Grid */}
            <section className="py-24 bg-gray-50">
                <div className="container-custom">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="text-gold-600 font-bold tracking-widest uppercase text-xs mb-3 block">Our Sessions</span>
                        <h2 className="text-4xl font-bold text-gray-900 font-display mb-4">Choose Your Path</h2>
                        <p className="text-gray-600 text-lg">Curated sessions designed to align with your daily rhythm.</p>
                    </div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {[
                            { icon: Sun, title: "Morning Flow", time: "6:00 AM - 7:00 AM", desc: "Awaken your energy centers and set a positive intention for the day.", active: true },
                            { icon: Wind, title: "Breath & Mind", time: "12:00 PM - 1:00 PM", desc: "A mid-day reset to clear mental fog and restore focus.", active: false },
                            { icon: Moon, title: "Deep Rest", time: "8:00 PM - 9:00 PM", desc: "Yoga Nidra and relaxation techniques for profound sleep.", active: false }
                        ].map((cls, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeInUp}
                                className={`p-8 rounded-[2.5rem] transition-all duration-300 relative overflow-hidden group ${cls.active ? 'bg-gray-900 text-white shadow-2xl scale-105 z-10' : 'bg-white text-gray-900 hover:bg-white border border-gray-100 hover:border-gold-200 hover:shadow-xl'}`}
                            >
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${cls.active ? 'bg-white/10 text-gold-400' : 'bg-gold-50 text-gold-600'}`}>
                                    <cls.icon size={26} />
                                </div>
                                <h3 className={`text-2xl font-bold mb-2 font-display ${cls.active ? 'text-white' : 'text-gray-900'}`}>{cls.title}</h3>
                                <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full mb-4 ${cls.active ? 'bg-white/10 text-white/80' : 'bg-gray-100 text-gray-500'}`}>
                                    {cls.time}
                                </span>
                                <p className={`leading-relaxed ${cls.active ? 'text-gray-300' : 'text-gray-600'}`}>
                                    {cls.desc}
                                </p>

                                <button className={`mt-8 w-full py-3 rounded-xl font-bold text-sm transition-colors ${cls.active ? 'bg-gold-500 text-white hover:bg-gold-400' : 'bg-gray-100 text-gray-900 hover:bg-gold-50 hover:text-gold-600'}`}>
                                    Book Now
                                </button>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Benefits - Dark/Gold Elegant Section */}
            <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
                {/* Background Texture */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

                <div className="container-custom relative z-10">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                        <div className="max-w-xl">
                            <span className="text-gold-400 font-bold tracking-widest uppercase text-xs mb-3 block">Holistic Wellness</span>
                            <h2 className="text-3xl md:text-5xl font-bold font-display leading-tight">Transformation <br />Inside & Out</h2>
                        </div>
                        <button className="px-6 py-3 border border-gray-700 rounded-full hover:bg-gray-800 transition-colors text-sm font-semibold">
                            View All Benefits
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Stress Reduction", desc: "Lower cortisol levels dramatically.", icon: Moon },
                            { title: "Emotional Balance", desc: "Master your reactions and peace.", icon: Heart },
                            { title: "Mental Clarity", desc: "Sharpen focus and cognitive power.", icon: Sun },
                            { title: "Spiritual Growth", desc: "Connect with something greater.", icon: Star }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-8 rounded-3xl hover:bg-gray-800 transition-colors hover:-translate-y-1 duration-300">
                                <item.icon className="text-gold-400 mb-4" size={32} />
                                <h4 className="text-xl font-bold mb-2 font-display">{item.title}</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-white text-center relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-50/50 rounded-full blur-3xl -z-10"></div>
                <div className="container-custom">
                    <h2 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6">Begin Your Journey</h2>
                    <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                        Your path to peace is just one breath away. Join our community today.
                    </p>
                    <button
                        onClick={() => openServiceModal('meditation', 'Book Meditation Session')}
                        className="btn-primary transform hover:scale-105"
                    >
                        Start Free Trial
                    </button>
                </div>
            </section>
        </div >
    );
};

export default MeditationServices;

