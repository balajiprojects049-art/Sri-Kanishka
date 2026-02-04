import React from 'react';
import { motion } from 'framer-motion';
import { Flower, Sun, Moon, Wind, Calendar, Sparkles } from 'lucide-react';
import { useUI } from '../../context/UIContext';

const MeditationServices = () => {
    const { openServiceModal } = useUI();
    return (
        <div className="bg-white min-h-screen pt-24">
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
        </div>
    );
};

export default MeditationServices;
