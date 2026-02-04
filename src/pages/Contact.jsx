import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
    const [focused, setFocused] = useState({});
    const [loading, setLoading] = useState(false);

    const handleFocus = (field) => setFocused(p => ({ ...p, [field]: true }));
    const handleBlur = (field, e) => setFocused(p => ({ ...p, [field]: e.target.value.length > 0 }));

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => setLoading(false), 2000);
    };

    const InputField = ({ label, name, type = "text", isTextArea = false }) => (
        <div className="relative mb-6">
            {isTextArea ? (
                <textarea
                    name={name}
                    rows="4"
                    className="peer w-full px-4 py-3 rounded-xl border-2 border-gray-100 outline-none focus:border-gold-400 focus:ring-4 focus:ring-gold-100/50 transition-all bg-gray-50/50 pt-6 font-medium text-gray-800"
                    onFocus={() => handleFocus(name)}
                    onBlur={(e) => handleBlur(name, e)}
                ></textarea>
            ) : (
                <input
                    type={type}
                    name={name}
                    className="peer w-full px-4 py-3 rounded-xl border-2 border-gray-100 outline-none focus:border-gold-400 focus:ring-4 focus:ring-gold-100/50 transition-all bg-gray-50/50 pt-6 font-medium text-gray-800"
                    onFocus={() => handleFocus(name)}
                    onBlur={(e) => handleBlur(name, e)}
                />
            )}
            <label
                className={`absolute left-4 transition-all duration-200 pointer-events-none ${focused[name] ? 'top-2 text-xs text-gold-600 font-bold' : 'top-4 text-gray-400 font-medium'
                    }`}
            >
                {label}
            </label>
        </div>
    );

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-gold-50"></div>
                <div className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-3xl pointer-events-none"></div>

                <div className="container-custom relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm text-gray-600 font-bold text-xs uppercase tracking-widest mb-6"
                    >
                        <Sparkles size={14} className="text-gold-500" />
                        We're Here For You
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 font-display"
                    >
                        Get in Touch
                    </motion.h1>
                    <p className="text-xl text-gray-600 max-w-xl mx-auto leading-relaxed">
                        We are here to answer any questions you may have about our holistic services. Reach out to us and we'll respond as soon as we can.
                    </p>
                </div>
            </section>

            <div className="container-custom -mt-10 relative z-20 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Info Cards */}
                    <div className="lg:col-span-1 space-y-4">
                        {[
                            { icon: MapPin, title: "Headquarters", text: "123 Business Park, Bangalore", sub: "Karnataka, 560001", color: "blue" },
                            { icon: Phone, title: "Phone", text: "+91 98765 43210", sub: "Mon-Fri 9am to 6pm", color: "gold" },
                            { icon: Mail, title: "Email", text: "hello@srikanishka.com", sub: "Online Support 24/7", color: "purple" }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white p-6 rounded-2xl card-shadow border border-gray-100 flex items-start gap-4 hover:border-gold-200 transition-colors"
                            >
                                <div className={`p-3 rounded-xl bg-${item.color}-50 text-${item.color}-500 ring-1 ring-${item.color}-100`}>
                                    <item.icon size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 font-display">{item.title}</h3>
                                    <p className="text-gray-700 font-medium">{item.text}</p>
                                    <p className="text-gray-400 text-sm">{item.sub}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="lg:col-span-2 bg-white rounded-[2rem] shadow-xl p-8 md:p-12 border border-gray-100 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>

                        <h3 className="text-2xl font-bold text-gray-900 mb-2 font-display">Send us a Message</h3>
                        <p className="text-gray-500 mb-8">Fill out the form below and our team will get back to you within 24 hours.</p>

                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                                <InputField label="Full Name" name="name" />
                                <InputField label="Email Address" name="email" type="email" />
                            </div>
                            <InputField label="Phone Number" name="phone" type="tel" />
                            <InputField label="Your Message" name="message" isTextArea />

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full md:w-auto px-10 py-4 btn-primary flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-gold-200"
                            >
                                {loading ? <Loader2 className="animate-spin" /> : <>Send Message <Send size={18} /></>}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
