import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Terminal, Database, CheckCircle, ArrowRight, Briefcase, Sparkles } from 'lucide-react';
import { courses, jobOffers } from '../../data/mockData';
import { useUI } from '../../context/UIContext';

const ITServices = () => {
    const [activeTab, setActiveTab] = useState('courses');
    const { openServiceModal } = useUI();

    return (
        <div className="pt-3 bg-white min-h-screen">
            {/* Hero */}
            <section className="relative rounded-[2.5rem] margin-x-custom mx-4 md:mx-6 mb-16 overflow-hidden min-h-[400px] flex items-center border border-blue-100/50">
                <div className="absolute inset-0 bg-blue-50"></div>
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-blue-100/30 to-transparent rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>

                <div className="container-custom relative z-10 px-8 md:px-12 py-12">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6 shadow-sm"
                    >
                        <Sparkles size={14} />
                        Tech Academy
                    </motion.div>

                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 font-display">Launch Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">IT Career</span></h1>
                    <p className="text-xl text-gray-600 max-w-2xl mb-10 leading-relaxed font-sans">
                        Master the latest technologies with our industry-aligned curriculum. From full-stack development to cloud engineers, we build the future workforce.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <button
                            onClick={() => setActiveTab('courses')}
                            className={`px-8 py-3 rounded-full font-bold transition-all shadow-lg ${activeTab === 'courses' ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-blue-200' : 'bg-white text-gray-600 hover:text-blue-600 border border-gray-100'}`}
                        >
                            Browse Courses
                        </button>
                        <button
                            onClick={() => setActiveTab('jobs')}
                            className={`px-8 py-3 rounded-full font-bold transition-all shadow-lg ${activeTab === 'jobs' ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-green-200' : 'bg-white text-gray-600 hover:text-green-600 border border-gray-100'}`}
                        >
                            View Job Offers
                        </button>
                    </div>
                </div>
            </section>

            {/* Features & Benefits */}
            <section className="py-12 bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { title: "Live Projects", desc: "Gain hands-on experience with real-world industry scenarios.", icon: Terminal },
                            { title: "Expert Mentors", desc: "Learn directly from architects working in top MNCs.", icon: CheckCircle },
                            { title: "Placement Support", desc: "Dedicated HR team for resume building and interview coaching.", icon: Briefcase },
                            { title: "Corporate Consultancy", desc: "We provide specialized staffing and corporate training solutions.", icon: Database }
                        ].map((feature, idx) => (
                            <div key={idx} className="p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:border-blue-100 transition-all duration-300 group">
                                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm text-blue-600 flex items-center justify-center mb-4 border border-slate-100 group-hover:scale-110 transition-transform">
                                    <feature.icon size={24} />
                                </div>
                                <h3 className="font-bold text-lg text-gray-900 mb-2 font-display">{feature.title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Methodology Text */}
            <section className="py-16 bg-white border-y border-slate-50">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-3 block">Our Philosophy</span>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 font-display">From Classroom to Boardroom</h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            Our curriculum isn't just about code; it's about career architecture. We painstakingly design every module to mirror real-world software engineering challenges. You won't just learn syntax; you'll learn system design, scalability, and agile methodologies.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Our goal is to transform you into a <strong>Day-1 ready professional</strong> who can contribute to major projects immediately. We bridge the gap between academic theory and industrial application through immersive, project-based learning.
                        </p>
                    </div>
                </div>
            </section>

            <div className="container-custom pb-20">
                {activeTab === 'courses' ? (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {courses.map((course) => (
                            <div key={course.id} className="bg-white rounded-[2rem] overflow-hidden card-shadow border border-gray-100 hover:border-blue-200 hover:-translate-y-1 transition-all duration-300 group">
                                <div className="h-52 overflow-hidden relative">
                                    <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                                    <div className="absolute bottom-4 left-4 text-white font-bold bg-white/20 px-3 py-1 rounded-full backdrop-blur-md text-sm border border-white/30">
                                        {course.duration}
                                    </div>
                                </div>
                                <div className="p-8">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">{course.title}</h3>
                                    <div className="flex flex-wrap items-center gap-2 mb-6">
                                        {course.tech.slice(0, 3).map((t, i) => (
                                            <span key={i} className="text-xs font-bold bg-blue-50 text-blue-600 px-3 py-1 rounded-full">{t}</span>
                                        ))}
                                        {course.tech.length > 3 && <span className="text-xs font-bold bg-gray-50 text-gray-400 px-2 py-1 rounded-full">+{course.tech.length - 3}</span>}
                                    </div>
                                    <div className="flex justify-between items-center text-sm font-medium text-gray-500 mb-6 border-t border-gray-50 pt-4">
                                        <span className="flex items-center gap-1"><Sparkles size={14} className="text-gold-400 fill-gold-400" /> {course.rating} ({course.reviews})</span>
                                        <span>{course.level}</span>
                                    </div>
                                    <motion.button
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => openServiceModal('it', `Enroll: ${course.title}`)}
                                        className="w-full py-4 bg-gray-900 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-600 transition-colors shadow-lg shadow-gray-200"
                                    >
                                        Enroll Now <ArrowRight size={16} />
                                    </motion.button>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    >
                        {jobOffers.map((job) => (
                            <div key={job.id} className="bg-white p-8 rounded-[2rem] card-shadow border border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 hover:border-green-100 transition-colors">
                                <div>
                                    <div className="inline-block px-3 py-1 rounded-md bg-green-50 text-green-700 text-xs font-bold mb-3">Hiring Now</div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-1 font-display">{job.role}</h3>
                                    <p className="text-gray-500 font-medium mb-4">{job.company}</p>
                                    <div className="flex gap-3 text-sm font-medium">
                                        <span className="flex items-center gap-1 text-gray-600"><Briefcase size={14} className="text-green-500" /> {job.package}</span>
                                        <span className="flex items-center gap-1 text-gray-400">|</span>
                                        <span className="flex items-center gap-1 text-gray-600">{job.location}</span>
                                    </div>
                                </div>
                                <motion.button
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => openServiceModal('it', `Job Application: ${job.role}`)}
                                    className="px-8 py-3 bg-gray-900 text-white rounded-full font-bold hover:bg-green-600 transition-all shadow-lg shrink-0 w-full sm:w-auto"
                                >
                                    Apply
                                </motion.button>
                            </div>
                        ))}
                    </motion.div>
                )}
            </div>

            {/* Placement Stats & Partners */}
            <section className="py-20 bg-slate-900 text-white rounded-t-[3rem] mt-auto">
                <div className="container-custom">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 text-center divide-x divide-slate-800">
                        <div>
                            <div className="text-4xl md:text-5xl font-bold text-amber-500 mb-2 font-display">500+</div>
                            <div className="text-sm md:text-base text-slate-400 font-medium">Students Placed</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold text-amber-500 mb-2 font-display">24 LPA</div>
                            <div className="text-sm md:text-base text-slate-400 font-medium">Highest Package</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold text-amber-500 mb-2 font-display">50+</div>
                            <div className="text-sm md:text-base text-slate-400 font-medium">Hiring Partners</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold text-amber-500 mb-2 font-display">92%</div>
                            <div className="text-sm md:text-base text-slate-400 font-medium">Success Rate</div>
                        </div>
                    </div>

                    <div className="text-center">
                        <p className="text-slate-400 text-sm uppercase tracking-widest mb-8 font-bold">Our Alumni Work At</p>
                        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                            {['Google', 'Microsoft', 'Amazon', 'TCS', 'Infosys', 'Wipro'].map((company, i) => (
                                <span key={i} className="text-xl md:text-2xl font-bold font-display text-white">{company}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ITServices;
