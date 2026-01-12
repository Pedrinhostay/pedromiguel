"use client";

import { motion } from "framer-motion";

interface StaggerTextProps {
    text: string;
    className?: string;
    delay?: number;
    highlightWords?: string[];
}

export function StaggerText({ text, className = "", delay = 0, highlightWords = [] }: StaggerTextProps) {
    const words = text.split(" ");

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.04 * i + delay },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            filter: "blur(10px)",
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    } as any;

    return (
        <motion.div
            style={{ overflow: "hidden", display: "flex", flexWrap: "wrap", rowGap: "0.2em" }}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            className={className}
        >
            {words.map((word, index) => {
                const isHighlight = highlightWords.some(hw => word.toLowerCase().includes(hw.toLowerCase()));

                return (
                    <motion.span variants={child} style={{ marginRight: "0.25em" }} key={index} className={isHighlight ? "text-emerald-500 font-bold drop-shadow-[0_0_15px_rgba(16,185,129,0.4)]" : "text-inherit"}>
                        {word}
                    </motion.span>
                );
            })}
        </motion.div>
    );
}
