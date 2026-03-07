"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ShinyButtonProps {
    text: string;
    onClick?: () => void;
    className?: string;
    href?: string;
    target?: string;
    size?: "default" | "lg";
}

export function ShinyButton({ text, onClick, className = "", href, target, size = "default" }: ShinyButtonProps) {
    const Component = href ? motion.a : motion.button;

    return (
        <Component
            href={href}
            target={target}
            rel={target === "_blank" ? "noopener noreferrer" : undefined}
            onClick={onClick}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`
                relative group flex items-center justify-center overflow-hidden rounded-full 
                bg-zinc-950 border border-white/10
                transition-all duration-300
                ${size === "lg" ? "px-10 py-5 text-lg" : "px-8 py-3.5 text-base"}
                ${className}
            `}
        >
            {/* The Running Border Effect */}
            <div className="absolute inset-0 p-[2px] rounded-full overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_300deg,#10b981_360deg)]"
                    animate={{
                        rotate: [0, 360],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            </div>

            {/* Content Container (Layered above the border) */}
            <div className="relative z-10 flex items-center gap-2 font-bold text-white tracking-tight">
                {text}
                <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                    →
                </motion.span>
            </div>

            {/* Inner Background to cover the center of the conic gradient */}
            <div className="absolute inset-[1px] bg-zinc-950 rounded-full z-0" />

            {/* Subtle Inner Glow on Hover */}
            <div className="absolute inset-0 bg-emerald-500/0 group-hover:bg-emerald-500/5 transition-colors duration-500 rounded-full z-[1]" />
        </Component>
    );
}
