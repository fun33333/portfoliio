"use client";

import React from "react";
import { motion } from "framer-motion";

export const TechBorder = ({ className }: { className?: string }) => {
    return (
        <div className={`absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] pointer-events-none z-10 transition-opacity duration-1000 select-none ${className || "top-0 left-0"}`}>
            <svg
                viewBox="0 0 500 500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
            >
                {/* Corner Main Bracket - Thick L-Shape */}
                <path
                    d="M10 140 V40 C10 23.4315 23.4315 10 40 10 H140"
                    stroke="#2EADA7"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="opacity-90"
                />

                {/* Parallel Inner Bracket - Thinner */}
                <path
                    d="M30 160 V60 C30 43.4315 43.4315 30 60 30 H160"
                    stroke="#2EADA7"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    className="opacity-40"
                />

                {/* Circuit Node - Corner Square */}
                <rect x="20" y="20" width="12" height="12" rx="2" fill="#2EADA7" className="opacity-90" />

                {/* Vertical Circuit Lines */}
                <g className="opacity-60">
                    <path d="M50 160 V300" stroke="#2EADA7" strokeWidth="2" />
                    <circle cx="50" cy="300" r="4" fill="#2EADA7" />

                    <path d="M70 160 V220 L85 235 V380" stroke="#2EADA7" strokeWidth="1.5" strokeDasharray="4 4" />
                    <rect x="81" y="380" width="8" height="24" rx="1" fill="#2EADA7" />
                </g>

                {/* Horizontal Circuit Lines */}
                <g className="opacity-60">
                    <path d="M160 50 H300" stroke="#2EADA7" strokeWidth="2" />
                    <circle cx="300" cy="50" r="4" fill="#2EADA7" />

                    <path d="M160 70 H220 L235 85 H380" stroke="#2EADA7" strokeWidth="1.5" strokeDasharray="4 4" />
                    <rect x="380" y="81" width="24" height="8" rx="1" fill="#2EADA7" />
                </g>

                {/* Decorative Tech Elements */}
                <rect x="180" y="10" width="60" height="4" rx="2" fill="#2EADA7" className="opacity-50" />
                <rect x="10" y="180" width="4" height="60" rx="2" fill="#2EADA7" className="opacity-50" />

                {/* Small Accent Nodes */}
                <circle cx="200" cy="30" r="2" fill="#2EADA7" className="opacity-30" />
                <circle cx="30" cy="200" r="2" fill="#2EADA7" className="opacity-30" />

                {/* Animated Pulsing Elements */}
                <motion.circle
                    cx="50"
                    cy="300"
                    r="12"
                    stroke="#2EADA7"
                    strokeWidth="1"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: [1, 2], opacity: [0.4, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
                />

                <motion.circle
                    cx="300"
                    cy="50"
                    r="12"
                    stroke="#2EADA7"
                    strokeWidth="1"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: [1, 2], opacity: [0.4, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut", delay: 1.25 }}
                />

                {/* Glowing Scan Line Effect (Subtle) */}
                <motion.path
                    d="M10 20 H180"
                    stroke="white"
                    strokeWidth="1"
                    initial={{ x: -200, opacity: 0 }}
                    animate={{ x: 400, opacity: [0, 1, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 2 }}
                    className="opacity-20"
                />
            </svg>
        </div>
    );
};
