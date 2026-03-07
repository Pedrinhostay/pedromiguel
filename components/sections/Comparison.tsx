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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

                    {/* BEFORE: Manual */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative p-8 md:p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/5 overflow-hidden group hover:border-red-500/20 transition-colors duration-500"
                    >
                        {/* Icon Header */}
                        <div className="flex flex-col items-center text-center mb-12">
                            <div className="w-20 h-20 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_30px_rgba(239,68,68,0.1)]">
                                <ThumbsDown className="w-8 h-8" />
                            </div>
                            <h3 className="text-white font-semibold text-2xl md:text-3xl">
                                {t("comparison.before.title")}
                            </h3>
                        </div>

                        {/* Items */}
                        <div className="space-y-6">
                            {items.map((i) => (
                                <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-red-500/[0.02] border border-red-500/5 group-hover:border-red-500/10 transition-colors">
                                    <XCircle className="w-5 h-5 text-red-500/50 mt-1 flex-shrink-0" />
                                    <span className="text-zinc-400 text-lg font-light leading-snug">
                                        {t(`comparison.before.item${i}`)}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* AFTER: Intelligent */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative p-8 md:p-12 rounded-[2.5rem] bg-emerald-500/[0.02] border border-emerald-500/10 overflow-hidden group hover:border-emerald-500/30 transition-colors duration-500 shadow-[0_0_50px_rgba(16,185,129,0.05)]"
                    >
                        {/* Icon Header */}
                        <div className="flex flex-col items-center text-center mb-12">
                            <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 mb-6 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_30px_rgba(16,185,129,0.15)]">
                                <ThumbsUp className="w-8 h-8" />
                            </div>
                            <h3 className="text-white font-semibold text-2xl md:text-3xl">
                                {t("comparison.after.title")}
                            </h3>
                        </div>

                        {/* Items */}
                        <div className="space-y-6">
                            {items.map((i) => (
                                <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10 group-hover:border-emerald-500/20 transition-colors">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                                    <span className="text-zinc-200 text-lg font-medium leading-snug">
                                        {t(`comparison.after.item${i}`)}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Bottom bar indicator like the reference image */}
                        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-600 to-emerald-400 opacity-50" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
