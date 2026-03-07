"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Code2, LineChart } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { StaggerText } from "@/components/ui/StaggerText";

const steps = [
    { id: 1, key: "method.step1", icon: Search },
    { id: 2, key: "method.step2", icon: PenTool },
    { id: 3, key: "method.step3", icon: Code2 },
    { id: 4, key: "method.step4", icon: LineChart },
];

export function Method() {
    const { t, language } = useLanguage();

    return (
        <section className="relative w-full bg-[#050505] py-24 md:py-32 overflow-hidden border-t border-white/5">
            <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 relative z-10">

                <div className="text-center mb-20 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-emerald-950/30 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest backdrop-blur-md"
                    >
                        {t("method.badge")}
                    </motion.div>

                    <StaggerText
                        text={t("method.title")}
                        highlightWords={language === "en" ? ["How we structure", "automation system"] : ["Como estruturamos", "sistema de automação"]}
                        className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.1] justify-center"
                    />
                </div>

                <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Connecting line (Desktop) */}
                    <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent z-0" />

                    {steps.map((step, idx) => {
                        const Icon = step.icon;
                        return (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="relative z-10 flex flex-col items-center text-center group"
                            >
                                <div className="w-20 h-20 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center mb-8 relative group-hover:border-emerald-500/50 group-hover:bg-emerald-950/30 transition-all duration-500">
                                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full border border-white/10 bg-zinc-900 flex items-center justify-center text-xs font-bold text-emerald-400 group-hover:border-emerald-500/50">
                                        {step.id}
                                    </div>
                                    <Icon className="w-8 h-8 text-zinc-400 group-hover:text-emerald-400 transition-colors" />
                                </div>
                                <h3 className="text-white font-semibold text-xl mb-4 group-hover:text-emerald-400 transition-colors">
                                    {t(`${step.key}.title`)}
                                </h3>
                                <p className="text-zinc-500 text-base font-light leading-relaxed max-w-[240px]">
                                    {t(`${step.key}.desc`)}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
