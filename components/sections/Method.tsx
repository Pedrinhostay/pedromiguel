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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-white/[0.06]">
                    {steps.map((step, idx) => {
                        const Icon = step.icon;
                        const number = String(idx + 1).padStart(2, "0");
                        return (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group relative overflow-hidden p-10 bg-[#0a0a0a] hover:bg-[#111] transition-colors duration-400 cursor-default border-r border-white/[0.06] last:border-r-0 max-lg:border-r-0 max-md:border-b max-md:border-white/[0.06] max-md:last:border-b-0 md:max-lg:even:border-r-0 md:max-lg:nth-child(-n+2):border-b md:max-lg:nth-child(-n+2):border-b-white/[0.06]"
                            >
                                {/* Animated top line */}
                                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-emerald-400 to-emerald-600 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />

                                <span className="block font-semibold text-[0.7rem] text-emerald-400 tracking-[0.1em] mb-6">
                                    {number}
                                </span>

                                <div className="w-10 h-10 border border-white/[0.08] rounded-[10px] flex items-center justify-center mb-6 text-emerald-400 group-hover:border-emerald-400/40 group-hover:bg-emerald-400/[0.08] transition-all duration-300">
                                    <Icon className="w-5 h-5" />
                                </div>

                                <h3 className="font-semibold text-[1.3rem] text-white tracking-tight mb-4">
                                    {t(`${step.key}.title`)}
                                </h3>
                                <p className="text-zinc-500 text-[0.9rem] leading-[1.7]">
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
