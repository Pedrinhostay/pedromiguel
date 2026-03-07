"use client";

import { motion } from "framer-motion";

interface StaggerTextProps {
    text: string;
    className?: string;
    delay?: number;
    highlightWords?: string[];
    highlightClassName?: string;
}

export function StaggerText({
    text,
    className = "",
    delay = 0,
    highlightWords = [],
    highlightClassName = "text-emerald-400 font-bold drop-shadow-[0_0_15px_rgba(52,211,153,0.3)]"
}: StaggerTextProps) {
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
                    <motion.span
                        variants={child}
                        style={{ marginRight: "0.25em" }}
                        key={index}
                        className={isHighlight ? highlightClassName : "text-inherit"}
                        {...(isHighlight ? {
                            animate: {
                                opacity: [0.9, 1, 0.9],
                                filter: ["drop-shadow(0 0 5px rgba(52,211,153,0.3))", "drop-shadow(0 0 15px rgba(52,211,153,0.5))", "drop-shadow(0 0 5px rgba(52,211,153,0.3))"],
                            },
                            transition: {
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }
                        } : {})}
                    >
                        {word}
                    </motion.span>
                );
            })}
        </motion.div>
    );
}
