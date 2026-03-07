"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Zap } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { StaggerText } from "@/components/ui/StaggerText";
import { ShinyButton } from "@/components/ui/ShinyButton";
import { useQuiz } from "@/components/providers/QuizProvider";

export function FinalCTA() {
    const { t, language } = useLanguage();
    const { openQuiz } = useQuiz();

    return (
        <section className="relative w-full bg-[#050505] py-24 md:py-32 overflow-hidden border-t border-white/5">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-emerald-500/5 via-transparent to-transparent opacity-50" />

            <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 relative z-10">

                {/* Bonus Section: Processos que automatizamos */}
                <div className="mb-32">
                    <div className="text-center mb-16 space-y-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-zinc-900 border border-white/10 text-zinc-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-4"
                        >
                            {language === "en" ? "Extra Vision" : "Extra Visão"}
                        </motion.div>
                        <StaggerText
                            text={t("ctaFinal.bonusTitle")}
                            highlightWords={language === "en" ? ["Processes", "normally automate"] : ["Processos", "normalmente automatizamos"]}
                            className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight justify-center"
                        />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.05 * i }}
                                className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/20 transition-all group"
                            >
                                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-black transition-all">
                                    <Zap className="w-5 h-5" />
                                </div>
                                <span className="text-zinc-300 font-medium group-hover:text-white transition-colors">
                                    {t(`ctaFinal.bonus${i}`)}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Final CTA Box */}
                <div className="relative p-12 md:p-24 rounded-[3rem] bg-gradient-to-br from-zinc-900 to-zinc-950 border border-emerald-500/20 text-center overflow-hidden group">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                    <div className="relative z-10 max-w-3xl mx-auto space-y-10">
                        <StaggerText
                            text={t("ctaFinal.title")}
                            highlightWords={language === "en" ? ["automation", "transform your operation"] : ["automação", "transformar sua operação"]}
                            className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.1] justify-center"
                        />

                        <div className="space-y-6">
                            <p className="text-zinc-400 text-lg md:text-xl font-light">
                                {t("ctaFinal.text")}
                            </p>

                            <div className="flex flex-wrap justify-center gap-6">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="flex items-center gap-2 text-zinc-500 text-sm md:text-base font-medium uppercase tracking-wide">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                                        {t(`ctaFinal.item${i}`)}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-6">
                            <ShinyButton
                                text={t("ctaFinal.button")}
                                onClick={openQuiz}
                                size="lg"
                                className="w-full sm:w-auto"
                            />
                            <p className="text-zinc-500 text-xs font-medium tracking-wide uppercase opacity-70">
                                {t("hero.ctaSubtext")}
                            </p>
                        </div>
                    </div>

                    {/* Decorative abstract elements */}
                    <div className="absolute top-10 left-10 w-32 h-32 bg-emerald-500/5 blur-3xl rounded-full" />
                    <div className="absolute bottom-10 right-10 w-32 h-32 bg-emerald-500/5 blur-3xl rounded-full" />
                </div>

            </div>
        </section>
    );
}
