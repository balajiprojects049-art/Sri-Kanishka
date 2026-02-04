import React from 'react';
import { Target, Eye, Globe, ChevronDown, Award, Briefcase, Heart, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
    const timeline = [
        { year: "2018", title: "Inception", desc: "Started as a small IT training center." },
        { year: "2020", title: "Expansion", desc: "Added Matrimonial services to help alumni." },
        { year: "2022", title: "Holistic Growth", desc: "Introduced Spiritual guidance for total well-being." },
        { year: "2024", title: "Going Global", desc: "Digital transformation and global outreach." }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative pt-0 pb-16 lg:pt-10 lg:pb-24 overflow-hidden bg-white">
                <div className="absolute inset-0 bg-gradient-to-br from-gold-50 via-white to-blue-50/60"></div>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-gold-100/40 to-transparent rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>

                <div className="container-custom relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gold-100 shadow-sm text-gold-600 font-bold text-xs uppercase tracking-widest mb-6"
                    >
                        <Sparkles size={14} />
                        Who We Are
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.8 }}
                        className="text-5xl md:text-7xl font-bold mb-8 text-gray-900 font-display"
                    >
                        Driven by Purpose, <br />
                        <span className="text-gradient-gold">United by Values.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12"
                    >
                        We are a unique organization dedicated to holistic human development. By bridging the gap between professional success, personal relationships, and spiritual well-being, we help you lead a complete life.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 1, repeat: Infinity, repeatType: "reverse" }}
                        className="flex justify-center"
                    >
                        <ChevronDown className="text-gold-500" size={32} />
                    </motion.div>
                </div>
            </section>

            <div className="container-custom py-20">
                {/* Vision & Mission */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
                    <div className="bg-white p-10 rounded-[2rem] card-shadow border border-gold-100 hover:border-gold-300 transition-all hover:-translate-y-1 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                            <Eye size={120} className="text-gold-500" />
                        </div>
                        <div className="w-16 h-16 bg-gold-50 rounded-2xl flex items-center justify-center text-gold-600 mb-6 relative z-10">
                            <Eye size={32} />
                        </div>
                        <h2 className="text-2xl font-bold mb-4 text-gray-900 font-display relative z-10">Our Vision</h2>
                        <p className="text-gray-600 leading-relaxed relative z-10">
                            To create a society where individuals are not only successful in their careers but also fulfilled in their personal lives and at peace with themselves. We envision a world balanced by technology, love, and spirituality.
                        </p>
                    </div>

                    <div className="bg-white p-10 rounded-[2rem] card-shadow border border-blue-50 hover:border-blue-200 transition-all hover:-translate-y-1 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                            <Target size={120} className="text-blue-500" />
                        </div>
                        <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 relative z-10">
                            <Target size={32} />
                        </div>
                        <h2 className="text-2xl font-bold mb-4 text-gray-900 font-display relative z-10">Our Mission</h2>
                        <p className="text-gray-600 leading-relaxed relative z-10">
                            To provide top-tier resources for skill development, reliable platforms for finding life partners, and accessible spiritual guidance. We strive to be the bridge that connects your aspirations with reality.
                        </p>
                    </div>
                </div>

                {/* Timeline */}
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 font-display">Our Journey</h2>
                    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-gold-100 before:via-gold-300 before:to-gold-100">
                        {timeline.map((item, idx) => (
                            <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-gold-100 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 group-hover:bg-gold-500 group-hover:text-white transition-colors text-gold-600 font-bold text-xs">
                                    {item.year.slice(-2)}
                                </div>
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl card-shadow border border-gray-100 hover:border-gold-200 transition-colors">
                                    <div className="flex items-center justify-between space-x-2 mb-1">
                                        <div className="font-bold text-gray-900 font-display">{item.title}</div>
                                        <time className="font-mono font-bold text-gold-600 text-sm">{item.year}</time>
                                    </div>
                                    <div className="text-gray-600 text-sm">{item.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
