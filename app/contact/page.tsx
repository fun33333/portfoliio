"use client"

import { PageHeroBanner } from "@/components/page-hero-banner"
import { FooterSection } from "@/components/footer-section"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react"
import { useState } from "react"

const contactInfo = [
    {
        icon: Mail,
        title: "Email",
        value: "info@quadgentics.com",
        link: "mailto:info@quadgentics.com"
    },
    {
        icon: Phone,
        title: "Phone",
        value: "++92 310 2104511",
        link: "tel:+92 310 2104511"
    },
    {
        icon: MapPin,
        title: "Location",
        value: "Karachi, Pakistan",
        link: "#"
    }
]

const socialLinks = [
    {
        icon: Github,
        name: "GitHub",
        url: "https://github.com/quadgentics"
    },
    {
        icon: Linkedin,
        name: "LinkedIn",
        url: "https://linkedin.com/company/quadgentics"
    },
    {
        icon: Twitter,
        name: "Twitter",
        url: "https://twitter.com/quadgentics"
    }
]

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })

   const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
        const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        const data = await res.json();

        if (data.success) {
            alert("Message sent ");
            setFormData({ name: "", email: "", subject: "", message: "" });
        } else {
            alert("Failed to send ");
            console.error(data.error);
        }
    } catch (error) {
        alert("Something went wrong ");
        console.error(error);
    }
};

// const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     await fetch("https://n8n.laconsultingcorp.com/webhook-test/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData)
//     });

//     alert("Message sent via Webhook ✅");
//     setFormData({ name: "", email: "", subject: "", message: "" });
// };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Banner */}
            <PageHeroBanner
                title="Get in Touch"
                subtitle="CONTACT US"
                description="Have a project in mind? Let's discuss how we can help bring your vision to life. We're here to answer your questions and start building something amazing together."
                imagePath="/images/project_banner.png"
                badge="24/7 Support"
            />

            {/* Contact Section - Light Background */}
            <section className="relative py-20 md:py-32 bg-white">
                <div className="max-w-[1400px] mx-auto px-4 md:px-12 lg:px-24">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                        {/* Left: Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-lastica text-[#172222] leading-[1.1] mb-8 uppercase">
                                LET'S <span className="text-primary italic">CONNECT</span> <br />
                                <span className="text-primary/60 font-mono block text-3xl md:text-5xl mt-2">WITH US</span>
                            </h2>
                            <p className="text-[#172222]/70 text-lg font-raleway mb-12 leading-relaxed">
                                Whether you have a question, want to start a project, or just want to say hi,
                                we'd love to hear from you.
                            </p>

                            {/* Contact Info Cards */}
                            <div className="space-y-6 mb-12">
                                {contactInfo.map((info, index) => (
                                    <motion.a
                                        key={index}
                                        href={info.link}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="group flex items-center gap-4 p-6 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                                    >
                                        <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-all">
                                            <info.icon className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-raleway font-bold text-[#172222]/60 uppercase tracking-wider mb-1">
                                                {info.title}
                                            </h3>
                                            <p className="text-lg font-raleway font-bold text-[#172222]">
                                                {info.value}
                                            </p>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>

                            {/* Social Links */}
                            <div>
                                <h3 className="text-lg font-raleway font-bold text-[#172222] mb-4">
                                    Follow Us
                                </h3>
                                <div className="flex gap-4">
                                    {socialLinks.map((social, index) => (
                                        <motion.a
                                            key={index}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            initial={{ opacity: 0, scale: 0 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            whileHover={{ scale: 1.1 }}
                                            className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all group"
                                        >
                                            <social.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Right: Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-raleway font-bold text-[#172222] mb-2">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-6 py-4 bg-white border border-gray-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-raleway"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-raleway font-bold text-[#172222] mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-6 py-4 bg-white border border-gray-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-raleway"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-raleway font-bold text-[#172222] mb-2">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-6 py-4 bg-white border border-gray-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-raleway"
                                        placeholder="Project Inquiry"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-raleway font-bold text-[#172222] mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        className="w-full px-6 py-4 bg-white border border-gray-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-raleway resize-none"
                                        placeholder="Tell us about your project..."
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="group w-full px-8 py-4 bg-primary text-white font-raleway font-bold text-base uppercase tracking-wider rounded-xl overflow-hidden shadow-lg hover:shadow-primary/50 transition-all duration-300 flex items-center justify-center gap-2"
                                >
                                    <span>Send Message</span>
                                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </motion.button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Office Hours - Dark Background */}
            <section className="relative py-20 md:py-32 bg-[#0A1515]">
                <div className="max-w-[1200px] mx-auto px-4 md:px-12 lg:px-24 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-lastica text-white leading-[1.1] mb-8 uppercase">
                            OUR OFFICE <br />
                            <span className="text-primary/60 font-mono block text-3xl md:text-5xl mt-2 italic shadow-primary/20">HOURS</span>
                        </h2>
                        <div className="inline-block bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12">
                            <div className="grid md:grid-cols-2 gap-8 text-left">
                                <div>
                                    <h3 className="text-primary font-raleway font-bold text-sm uppercase tracking-wider mb-3">
                                        Monday - Friday
                                    </h3>
                                    <p className="text-white text-2xl font-lastica">
                                        9:00 AM - 6:00 PM
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-primary font-raleway font-bold text-sm uppercase tracking-wider mb-3">
                                        Weekend
                                    </h3>
                                    <p className="text-white text-2xl font-lastica">
                                        By Appointment
                                    </p>
                                </div>
                            </div>
                            <p className="text-white/60 font-raleway text-sm mt-6">
                                Pakistan Standard Time (PKT, UTC+5)
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <FooterSection />
        </div>
    )
}
