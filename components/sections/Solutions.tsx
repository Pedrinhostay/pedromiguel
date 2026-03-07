"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { Cpu, Workflow, Layers, BarChart3, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { StaggerText } from "@/components/ui/StaggerText";

const features = [
    {
        id: 1,
        titleKey: "features.card1.title",
        descriptionKey: "features.card1.desc",
        icon: Cpu,
        color: "from-emerald-950 to-emerald-900/50",
        iconColor: "text-emerald-400",
        border: "border-emerald-500/20",
    },
    {
        id: 2,
        titleKey: "features.card2.title",
        descriptionKey: "features.card2.desc",
        icon: Workflow,
        color: "from-zinc-900 to-zinc-950",
        iconColor: "text-emerald-400",
        border: "border-white/10",
    },
    {
        id: 3,
        titleKey: "features.card3.title",
        descriptionKey: "features.card3.desc",
        icon: Layers,
        color: "from-emerald-950 to-emerald-900/50",
        iconColor: "text-emerald-400",
        border: "border-emerald-500/20",
    },
    {
        id: 4,
        titleKey: "features.card4.title",
        descriptionKey: "features.card4.desc",
        icon: BarChart3,
        color: "from-zinc-900 to-zinc-950",
        iconColor: "text-emerald-400",
        border: "border-white/10",
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

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <motion.div
                                    key={feature.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                                    className={`group p-8 rounded-3xl border ${feature.border} bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.04] transition-all duration-500`}
                                >
                                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center ${feature.iconColor} border border-white/5 mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                                        <Icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-white font-semibold text-xl mb-3 group-hover:text-emerald-400 transition-colors">
                                        {t(feature.titleKey)}
                                    </h3>
                                    <p className="text-zinc-500 text-base leading-relaxed font-light">
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
