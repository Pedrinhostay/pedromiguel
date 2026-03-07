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
                        <div className="grid grid-cols-1 gap-4">
                            {items.map((i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * i }}
                                    className="flex items-start gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-red-500/20 transition-colors group"
                                >
                                    <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500">
                                        <XCircle className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium text-lg mb-1 group-hover:text-red-400 transition-colors">
                                            {t(`problem.item${i}`)}
                                        </h4>
                                    </div>
                                </motion.div>
                            ))}
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
