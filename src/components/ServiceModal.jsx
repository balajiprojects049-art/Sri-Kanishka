import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Loader2, CheckCircle } from 'lucide-react';
import { useUI } from '../context/UIContext';

const ServiceModal = () => {
    const { serviceModal, closeServiceModal } = useUI();
    const [status, setStatus] = useState('idle'); // idle, loading, success

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('loading');
        setTimeout(() => setStatus('success'), 2000);
    };

    if (!serviceModal.isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={closeServiceModal}
                    className="absolute inset-0 bg-white/60 backdrop-blur-md"
                />

                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    className="relative w-full max-w-lg bg-white rounded-[2rem] shadow-2xl overflow-hidden z-10 border border-gray-100"
                >
                    <div className="p-8">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold text-gray-900 font-display">{serviceModal.title}</h2>
                            <button onClick={closeServiceModal} className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400 hover:text-gold-600">
                                <X size={20} />
                            </button>
                        </div>

                        {status === 'success' ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="py-12 text-center"
                            >
                                <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-100">
                                    <CheckCircle size={40} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2 font-display">Request Received!</h3>
                                <p className="text-gray-500 mb-8">Our team will get back to you within 24 hours.</p>
                                <button
                                    onClick={closeServiceModal}
                                    className="px-8 py-3 btn-primary text-white font-bold rounded-xl shadow-lg transition-all"
                                >
                                    Close
                                </button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">First Name</label>
                                        <input required type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-gold-500 outline-none" placeholder="John" />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Last Name</label>
                                        <input required type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-gold-500 outline-none" placeholder="Doe" />
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Email Address</label>
                                    <input required type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-gold-500 outline-none" placeholder="john@example.com" />
                                </div>

                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Phone Number</label>
                                    <input required type="tel" className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-gold-500 outline-none" placeholder="+91 99999 99999" />
                                </div>

                                {serviceModal.type === 'marriage' && (
                                    <div className="space-y-1">
                                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Profile For</label>
                                        <select className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-gold-500 outline-none">
                                            <option>Myself</option>
                                            <option>Son</option>
                                            <option>Daughter</option>
                                            <option>Sibling</option>
                                            <option>Friend</option>
                                        </select>
                                    </div>
                                )}

                                {serviceModal.type === 'it' && (
                                    <div className="space-y-1">
                                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Preferred Course</label>
                                        <select className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-gold-500 outline-none">
                                            <option>Full Stack Development</option>
                                            <option>Cloud & DevOps</option>
                                            <option>Data Science & AI</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                )}

                                <div className="pt-4">
                                    <button
                                        type="submit"
                                        disabled={status === 'loading'}
                                        className="w-full py-4 btn-primary text-white font-bold rounded-xl shadow-lg shadow-gold-200 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
                                    >
                                        {status === 'loading' ? <Loader2 className="animate-spin" size={20} /> : <>Submit Application <Send size={18} /></>}
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default ServiceModal;
