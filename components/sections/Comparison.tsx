"use client";

import { motion } from "framer-motion";
import { ThumbsDown, ThumbsUp, XCircle, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { StaggerText } from "../ui/StaggerText";

export function Comparison() {
    const { t, language } = useLanguage();

    const items = [1, 2, 3, 4];

    return (
        <section className="relative w-full bg-[#050505] py-24 md:py-32 overflow-hidden border-t border-white/5">
            {/* Ambient glows */}
            <div className="absolute top-0 left-0 w-1/2 h-full bg-red-500/5 blur-[120px] rounded-full -translate-x-1/2" />
            <div className="absolute bottom-0 right-0 w-1/2 h-full bg-emerald-500/5 blur-[120px] rounded-full translate-x-1/2" />

            <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 relative z-10">
                <div className="text-center mb-20 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-zinc-900 border border-white/10 text-zinc-400 text-xs font-bold uppercase tracking-widest backdrop-blur-md"
                    >
                        {t("comparison.badge")}
                    </motion.div>

                    <StaggerText
                        text={t("comparison.title")}
                        highlightWords={language === "en" ? ["impact", "transformation"] : ["impacto", "transformação"]}
                        className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.1] justify-center"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-white/[0.06]">

                    {/* BEFORE: Manual */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="group relative overflow-hidden bg-[#0a0a0a] hover:bg-[#111] transition-colors duration-400 border-r border-white/[0.06] max-md:border-r-0 max-md:border-b max-md:border-white/[0.06]"
                    >
                        {/* Animated top line - red */}
                        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-red-400 to-red-600 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />

                        <div className="p-10 md:p-12">
                            <div className="flex items-center gap-4 mb-10">
                                <div className="w-10 h-10 border border-white/[0.08] rounded-[10px] flex items-center justify-center text-red-400 group-hover:border-red-400/40 group-hover:bg-red-400/[0.08] transition-all duration-300">
                                    <ThumbsDown className="w-5 h-5" />
                                </div>
                                <h3 className="font-semibold text-[1.3rem] text-white tracking-tight">
                                    {t("comparison.before.title")}
                                </h3>
                            </div>

                            <div className="space-y-0 border-t border-white/[0.06]">
                                {items.map((i) => (
                                    <div key={i} className="flex items-center gap-4 py-5 border-b border-white/[0.06] last:border-b-0">
                                        <XCircle className="w-4 h-4 text-red-400/60 flex-shrink-0" />
                                        <span className="text-zinc-400 text-[0.95rem] leading-snug">
                                            {t(`comparison.before.item${i}`)}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* AFTER: Intelligent */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="group relative overflow-hidden bg-[#0a0a0a] hover:bg-[#111] transition-colors duration-400"
                    >
                        {/* Animated top line - emerald */}
                        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-emerald-400 to-emerald-600 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />

                        <div className="p-10 md:p-12">
                            <div className="flex items-center gap-4 mb-10">
                                <div className="w-10 h-10 border border-white/[0.08] rounded-[10px] flex items-center justify-center text-emerald-400 group-hover:border-emerald-400/40 group-hover:bg-emerald-400/[0.08] transition-all duration-300">
                                    <ThumbsUp className="w-5 h-5" />
                                </div>
                                <h3 className="font-semibold text-[1.3rem] text-white tracking-tight">
                                    {t("comparison.after.title")}
                                </h3>
                            </div>

                            <div className="space-y-0 border-t border-white/[0.06]">
                                {items.map((i) => (
                                    <div key={i} className="flex items-center gap-4 py-5 border-b border-white/[0.06] last:border-b-0">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                                        <span className="text-zinc-200 text-[0.95rem] font-medium leading-snug">
                                            {t(`comparison.after.item${i}`)}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Bottom bar */}
                        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-600 to-emerald-400 opacity-50" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
