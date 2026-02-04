import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Terminal, Database, CheckCircle, ArrowRight, Briefcase, Sparkles } from 'lucide-react';
import { courses, jobOffers } from '../../data/mockData';
import { useUI } from '../../context/UIContext';

const ITServices = () => {
    const [activeTab, setActiveTab] = useState('courses');
    const { openServiceModal } = useUI();

    return (
        <div className="pt-24 bg-white min-h-screen">
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
        </div>
    );
};

export default ITServices;
