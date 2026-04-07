"use client";

import { motion } from "framer-motion";
import { XCircle, AlertCircle } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { StaggerText } from "../ui/StaggerText";

export function Problem() {
    const { t, language } = useLanguage();

    const items = [1, 2, 3];

    return (
        <section className="relative w-full bg-[#050505] py-24 md:py-32 overflow-hidden border-t border-white/5">
            {/* Subtle red ambient glow to represent tension/problem */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-500/5 via-transparent to-transparent opacity-50" />

            <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                    {/* Left: Text Content */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-red-950/30 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-widest backdrop-blur-md"
                        >
                            <AlertCircle className="w-3 h-3" />
                            {t("problem.badge")}
                        </motion.div>

                        <StaggerText
                            text={t("problem.title")}
                            highlightWords={language === "en" ? ["manually"] : ["manual"]}
                            className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.1]"
                        />

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-zinc-500 text-lg md:text-xl leading-relaxed font-light"
                        >
                            {t("problem.text")}
                        </motion.p>
                    </div>

                    {/* Right: Pain Points Grid */}
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 gap-0 border border-white/[0.06]">
                            {items.map((i, idx) => {
                                const number = String(i).padStart(2, "0");
                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.1 * i }}
                                        className="group relative overflow-hidden p-8 bg-[#0a0a0a] hover:bg-[#111] transition-colors duration-400 cursor-default border-b border-white/[0.06] last:border-b-0"
                                    >
                                        {/* Animated top line */}
                                        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-red-400 to-red-600 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />

                                        <div className="flex items-start gap-5">
                                            <div className="flex flex-col items-center gap-3">
                                                <span className="block font-semibold text-[0.7rem] text-red-400 tracking-[0.1em]">
                                                    {number}
                                                </span>
                                                <div className="w-10 h-10 border border-white/[0.08] rounded-[10px] flex items-center justify-center text-red-400 group-hover:border-red-400/40 group-hover:bg-red-400/[0.08] transition-all duration-300">
                                                    <XCircle className="w-5 h-5" />
                                                </div>
                                            </div>
                                            <h4 className="font-semibold text-[1.1rem] text-white tracking-tight pt-6">
                                                {t(`problem.item${i}`)}
                                            </h4>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="text-zinc-500 italic text-sm border-l-2 border-emerald-500/30 pl-4 py-2"
                        >
                            {t("problem.footer")}
                        </motion.p>
                    </div>

                </div>
            </div>
        </section>
    );
}
