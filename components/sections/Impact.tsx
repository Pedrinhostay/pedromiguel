"use client";

import { motion } from "framer-motion";
import { TrendingUp, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { StaggerText } from "@/components/ui/StaggerText";

export function Impact() {
    const { t, language } = useLanguage();

    return (
        <section className="relative w-full bg-[#050505] py-24 md:py-32 overflow-hidden border-t border-white/5">
            {/* Emerald ambient glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent opacity-50" />

            <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left: Visualization */}
                    <div className="relative p-8 md:p-12 rounded-[2.5rem] bg-emerald-950/20 border border-emerald-500/20 overflow-hidden group">
                        <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:scale-110 transition-transform duration-700">
                            <TrendingUp className="w-32 h-32 text-emerald-500" />
                        </div>
                        <div className="relative z-10 space-y-6">
                            <div className="w-16 h-16 rounded-2xl bg-emerald-500 flex items-center justify-center text-black mb-10 shadow-[0_0_30px_rgba(16,185,129,0.4)]">
                                <TrendingUp className="w-8 h-8" />
                            </div>
                            <h3 className="text-white font-semibold text-3xl md:text-4xl leading-tight">
                                {language === "en" ? "Real scale through automation." : "Escala real através da automação."}
                            </h3>
                            <p className="text-zinc-400 text-lg font-light leading-relaxed">
                                {language === "en" ? "We don't just build systems; we build growth engines." : "Não construímos apenas sistemas; construímos máquinas de crescimento."}
                            </p>
                        </div>
                    </div>

                    {/* Right: Results List */}
                    <div className="space-y-10">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-emerald-950/30 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest backdrop-blur-md"
                        >
                            {t("impact.badge")}
                        </motion.div>

                        <StaggerText
                            text={t("impact.title")}
                            highlightWords={language === "en" ? ["impacts", "automation", "generate"] : ["impactos", "automação", "gerar"]}
                            className="text-4xl md:text-5xl lg:text-5xl font-semibold tracking-tight text-white leading-[1.1]"
                        />

                        <div className="space-y-6">
                            {[1, 2, 3, 4].map((i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * i }}
                                    className="flex items-center gap-4 text-zinc-300 group"
                                >
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-black transition-all duration-300">
                                        <CheckCircle2 className="w-5 h-5" />
                                    </div>
                                    <span className="text-lg md:text-xl font-light group-hover:text-white transition-colors">{t(`impact.item${i}`)}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
