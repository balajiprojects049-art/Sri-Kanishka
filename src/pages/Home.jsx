import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Code, Heart, Flower, Star, Quote, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { stats, testimonials } from '../data/mockData';

const Home = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const nextTestimonial = () => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    const prevTestimonial = () => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    return (
        <div className="overflow-hidden bg-white">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2000"
                        alt="Sri Kanishka Associates - Holistic Growth"
                        className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-white/30"></div>
                </div>

                {/* Background Elements - Kept for depth */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-gold-100/40 to-transparent rounded-full blur-3xl -mr-40 -mt-40 pointer-events-none opacity-40"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-blue-100/30 to-transparent rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none opacity-40"></div>

                <div className="container-custom relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="pt-8 lg:pt-0 text-center lg:text-left"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gold-100 shadow-sm text-gold-600 font-bold text-sm tracking-wide mb-8 mx-auto lg:mx-0"
                        >
                            <Sparkles size={16} />
                            <span>Holistic Growth Ecosystem</span>
                        </motion.div>

                        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-[1.1] mb-6 tracking-tight">
                            Elevate Your <br />
                            <span className="text-gradient-gold">Career, Life</span> & <br />
                            <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">Inner Peace</span>
                        </h1>

                        <p className="text-xl text-gray-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            One platform integrating professional IT training, trusted matrimonial services, and spiritual guidance for a complete and fulfilled life.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link to="/services" className="btn-primary hover:scale-105 transition-transform flex items-center justify-center gap-2">
                                Explore Services <ArrowRight size={18} />
                            </Link>
                            <Link to="/contact" className="btn-ghost border border-gray-200 bg-white hover:bg-gold-50 hover:shadow-md transition-all">
                                Get Started
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative hidden lg:block h-full min-h-[500px]"
                    >
                        {/* Abstract visual composition */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-10 right-10 bg-white p-6 rounded-3xl shadow-xl border border-gray-50 z-20 max-w-[260px]"
                            >
                                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-4"><Code size={24} /></div>
                                <h3 className="font-bold text-lg mb-1">Tech Mastery</h3>
                                <p className="text-gray-500 text-sm">Full-stack & Cloud training for modern careers.</p>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 20, 0] }}
                                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute bottom-20 left-10 bg-white p-6 rounded-3xl shadow-xl border border-gray-50 z-20 max-w-[260px]"
                            >
                                <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-4"><Flower size={24} /></div>
                                <h3 className="font-bold text-lg mb-1">Inner Balance</h3>
                                <p className="text-gray-500 text-sm">Ancient wisdom for modern peace of mind.</p>
                            </motion.div>

                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-tr from-gold-200 to-amber-100 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-gradient-to-tl from-blue-200 to-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-2000"></div>

                            <motion.div
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 5, repeat: Infinity }}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 glass p-8 rounded-full shadow-2xl"
                            >
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-amber-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-2 shadow-lg">
                                        SK
                                    </div>
                                    <p className="font-serif font-bold text-gray-900">Est. 2018</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 bg-white border-y border-gray-50">
                <div className="container-custom">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-gray-100/50">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="text-center px-4">
                                <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 font-display">
                                    {stat.value}
                                </h3>
                                <p className="text-gray-500 font-medium uppercase tracking-wider text-xs">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Impact Section */}
            <section className="py-24 bg-gradient-to-b from-white to-slate-50">
                <div className="container-custom">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <span className="text-gold-600 font-bold uppercase tracking-widest text-xs mb-2 block">Our Core Pillars</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-display">Designed for Your Complete Journey</h2>
                        <p className="text-gray-600 text-lg">We don't just focus on one aspect of life. We believe true success comes from a balance of professional achievement, personal love, and inner spiritual growth.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Empowering Careers", desc: "Equipping graduates with the skills they need to excel in the global IT landscape.", icon: Code, color: "blue" },
                            { title: "Building Families", desc: "Facilitating meaningful connections and happy marriages built on trust.", icon: Heart, color: "rose" },
                            { title: "Nurturing Souls", desc: "Guiding individuals towards mental clarity and inner peace in a busy world.", icon: Flower, color: "purple" }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white p-8 rounded-[2rem] card-shadow group border border-gray-50 hover:border-gold-100"
                            >
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 bg-${item.color}-50 text-${item.color}-500 group-hover:bg-${item.color}-500 group-hover:text-white group-hover:shadow-lg`}>
                                    <item.icon size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3 font-display">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed mb-6">{item.desc}</p>
                                <Link to={`/services`} className={`inline-flex items-center text-sm font-bold text-${item.color}-500 hover:gap-2 transition-all`}>
                                    Learn more <ArrowRight size={14} className="ml-1" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gold-50/50"></div>
                <div className="container-custom relative">
                    <div className="text-center mb-16">
                        <span className="text-gold-600 font-bold uppercase tracking-widest text-xs">Testimonials</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-3 text-gray-900 font-display">Success Stories</h2>
                    </div>

                    <div className="max-w-5xl mx-auto">
                        <div className="glass rounded-[3rem] p-8 md:p-16 shadow-2xl relative min-h-[400px] flex flex-col items-center text-center justify-center border border-white">
                            <div className="absolute top-0 -translate-y-1/2 bg-gradient-to-r from-gold-400 to-amber-500 text-white p-5 rounded-full shadow-lg shadow-gold-200">
                                <Quote size={28} />
                            </div>

                            <AnimatePresence mode='wait'>
                                <motion.div
                                    key={currentTestimonial}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.4 }}
                                    className="space-y-8 max-w-3xl"
                                >
                                    <div className="flex justify-center gap-1 mb-4">
                                        {[1, 2, 3, 4, 5].map(i => <Star key={i} size={20} className="fill-gold-400 text-gold-400" />)}
                                    </div>
                                    <p className="text-xl md:text-3xl text-gray-800 leading-normal font-serif font-medium">
                                        "{testimonials[currentTestimonial].content}"
                                    </p>
                                    <div className="flex flex-col items-center pt-4">
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-gold-200 rounded-full blur opacity-50 transform translate-y-2"></div>
                                            <img
                                                src={testimonials[currentTestimonial].avatar}
                                                alt={testimonials[currentTestimonial].name}
                                                className="relative w-20 h-20 rounded-full object-cover mb-4 border-4 border-white shadow-md"
                                            />
                                        </div>
                                        <h4 className="font-bold text-xl text-gray-900">{testimonials[currentTestimonial].name}</h4>
                                        <p className="text-gold-600 font-medium">{testimonials[currentTestimonial].role}</p>
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            {/* Controls */}
                            <button onClick={prevTestimonial} className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white hover:bg-gold-50 text-gray-400 hover:text-gold-600 shadow-lg transition-all hover:scale-110 group">
                                <ChevronLeft size={24} className="transform group-hover:-translate-x-1 transition-transform" />
                            </button>
                            <button onClick={nextTestimonial} className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white hover:bg-gold-50 text-gray-400 hover:text-gold-600 shadow-lg transition-all hover:scale-110 group">
                                <ChevronRight size={24} className="transform group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-24 bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-gold-600 font-bold uppercase tracking-widest text-xs mb-2 block">Process</span>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display text-gray-900">Simple Steps To <br />Start Your Journey</h2>
                            <p className="text-gray-600 text-lg mb-8">Whether you are looking to upskill, find a partner, or seek peace, our onboarding is seamless and supportive.</p>

                            <div className="space-y-8">
                                {[
                                    { title: "Discover", desc: "Browse our services to find what matches your current life goals.", icon: Sparkles },
                                    { title: "Connect", desc: "Reach out to our experts for a personalized consultation.", icon: ArrowRight },
                                    { title: "Transform", desc: "Begin your program and experience the positive change.", icon: Star }
                                ].map((step, idx) => (
                                    <div key={idx} className="flex gap-4">
                                        <div className="w-12 h-12 rounded-full bg-gold-50 flex items-center justify-center text-gold-600 shrink-0 font-bold text-lg border border-gold-100">
                                            {idx + 1}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-xl text-gray-900 mb-1">{step.title}</h4>
                                            <p className="text-gray-600">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-gold-100 to-blue-50 rounded-[3rem] transform rotate-3 scale-105 opacity-50"></div>
                            <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden relative border border-gray-100">
                                <img
                                    src="/images/timeline-home.jpg"
                                    onError={(e) => e.target.src = 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800'}
                                    alt="Collaboration"
                                    className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900/80 to-transparent p-8">
                                    <p className="text-white font-medium text-lg">"The first step towards change is awareness. The second step is acceptance."</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Programs */}
            <section className="py-24 bg-brand-blue/30">
                <div className="container-custom">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-4">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-display">Featured Programs</h2>
                            <p className="text-gray-600 mt-2 max-w-xl">Curated offerings designed to provide immediate value and long-term impact.</p>
                        </div>
                        <Link to="/services" className="text-gold-600 font-bold hover:gap-2 flex items-center transition-all bg-white px-6 py-3 rounded-full shadow-sm hover:shadow-md">
                            View all services <ArrowRight size={16} className="ml-1" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Link to="/services/it" className="group bg-white rounded-3xl p-2 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            <div className="h-48 rounded-2xl bg-gray-100 overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-indigo-600 opacity-90 group-hover:opacity-100 transition-opacity"></div>
                                <Code className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-20 group-hover:scale-110 transition-transform duration-500" size={80} />
                                <div className="absolute bottom-4 left-4">
                                    <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-white/30">Technology</span>
                                </div>
                            </div>
                            <div className="p-6">
                                <h4 className="font-bold text-xl mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">IT Training & Consultancy</h4>
                                <p className="text-gray-500 text-sm mb-4">Master Full Stack, Cloud, and AI with our intensive bootcamps.</p>
                                <span className="text-blue-600 font-bold text-sm flex items-center group-hover:translate-x-1 transition-transform">Explore <ArrowRight size={14} className="ml-1" /></span>
                            </div>
                        </Link>

                        <Link to="/services/marriage" className="group bg-white rounded-3xl p-2 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            <div className="h-48 rounded-2xl bg-gray-100 overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-tr from-rose-400 to-orange-500 opacity-90 group-hover:opacity-100 transition-opacity"></div>
                                <Heart className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-20 group-hover:scale-110 transition-transform duration-500" size={80} />
                                <div className="absolute bottom-4 left-4">
                                    <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-white/30">Matrimony</span>
                                </div>
                            </div>
                            <div className="p-6">
                                <h4 className="font-bold text-xl mb-2 text-gray-900 group-hover:text-rose-500 transition-colors">Marriage Matches</h4>
                                <p className="text-gray-500 text-sm mb-4">Find your soulmate with our trusted and personalized matching service.</p>
                                <span className="text-rose-500 font-bold text-sm flex items-center group-hover:translate-x-1 transition-transform">Explore <ArrowRight size={14} className="ml-1" /></span>
                            </div>
                        </Link>

                        <Link to="/services/meditation" className="group bg-white rounded-3xl p-2 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            <div className="h-48 rounded-2xl bg-gray-100 overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-tr from-purple-400 to-indigo-500 opacity-90 group-hover:opacity-100 transition-opacity"></div>
                                <Flower className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-20 group-hover:scale-110 transition-transform duration-500" size={80} />
                                <div className="absolute bottom-4 left-4">
                                    <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-white/30">Wellness</span>
                                </div>
                            </div>
                            <div className="p-6">
                                <h4 className="font-bold text-xl mb-2 text-gray-900 group-hover:text-purple-600 transition-colors">Meditation & Spirituality</h4>
                                <p className="text-gray-500 text-sm mb-4">Reconnect with yourself through guided meditation and retreat programs.</p>
                                <span className="text-purple-600 font-bold text-sm flex items-center group-hover:translate-x-1 transition-transform">Explore <ArrowRight size={14} className="ml-1" /></span>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-white">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto">
                        <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center font-display">Frequently Asked Questions</h3>
                        <div className="space-y-4">
                            {[
                                { q: "What kind of IT courses do you offer?", a: "We offer full-stack, cloud, and data-focused bootcamps designed for practical job readiness." },
                                { q: "How does the matrimony service work?", a: "Our team curates matches based on preferences and conducts profiles screening and counseling." },
                                { q: "Do you offer trial sessions?", a: "Yes — many programs include demo sessions or an initial consultation to help you decide." }
                            ].map((faq, i) => (
                                <details key={i} className="group bg-white rounded-2xl border border-gray-100 overflow-hidden open:shadow-md transition-shadow">
                                    <summary className="font-bold cursor-pointer p-6 list-none flex justify-between items-center text-gray-800">
                                        {faq.q}
                                        <span className="transform group-open:rotate-180 transition-transform duration-300 text-gold-500">
                                            <ChevronDownIcon />
                                        </span>
                                    </summary>
                                    <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                                        {faq.a}
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Banner */}
            <section className="py-20">
                <div className="container-custom">
                    <div className="relative rounded-[3rem] p-12 overflow-hidden text-center">
                        <div className="absolute inset-0 bg-amber-500"></div>
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

                        <div className="relative z-10 max-w-2xl mx-auto text-white">
                            <h3 className="text-3xl md:text-5xl font-bold font-display mb-6 text-white">Ready to transform your life?</h3>
                            <p className="text-white/90 text-lg mb-10">Join thousands of others who have found success, love, and peace with Sri Kanishka Associates.</p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Link to="/contact" className="px-8 py-4 bg-white text-amber-600 font-bold rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all">
                                    Get in Touch
                                </Link>
                                <Link to="/services" className="px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all">
                                    Explore Services
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

const ChevronDownIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
);

export default Home;
