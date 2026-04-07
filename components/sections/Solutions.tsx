"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { Cpu, Workflow, Layers, BarChart3 } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { StaggerText } from "@/components/ui/StaggerText";

const features = [
    {
        id: 1,
        titleKey: "features.card1.title",
        descriptionKey: "features.card1.desc",
        icon: Cpu,
    },
    {
        id: 2,
        titleKey: "features.card2.title",
        descriptionKey: "features.card2.desc",
        icon: Workflow,
    },
    {
        id: 3,
        titleKey: "features.card3.title",
        descriptionKey: "features.card3.desc",
        icon: Layers,
    },
    {
        id: 4,
        titleKey: "features.card4.title",
        descriptionKey: "features.card4.desc",
        icon: BarChart3,
    },
];

export function Solutions() {
    const { t, language } = useLanguage();
    const sectionRef = useRef<HTMLDivElement>(null);

    return (
        <section ref={sectionRef} className="relative w-full bg-[#050505] py-24 md:py-32 overflow-hidden border-t border-white/5">
            {/* Ambient glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-500/5 via-transparent to-transparent" />

            <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 relative z-10">

                {/* 5. Implementation Cards Part */}
                <div className="space-y-16">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-zinc-900 border border-white/10 text-zinc-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-6"
                        >
                            {t("features.badge")}
                        </motion.div>
                        <StaggerText
                            text={t("features.title")}
                            highlightWords={language === "en" ? ["automation structure", "your business"] : ["Estrutura de automação", "seu negócio"]}
                            className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-white/[0.06]">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            const number = String(index + 1).padStart(2, "0");
                            return (
                                <motion.div
                                    key={feature.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
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
                                        {t(feature.titleKey)}
                                    </h3>
                                    <p className="text-zinc-500 text-[0.9rem] leading-[1.7]">
                                        {t(feature.descriptionKey)}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
}
