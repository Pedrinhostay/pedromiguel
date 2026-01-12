"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";

// Dados dos projetos com chaves de tradução
const solutionKeys = [
    {
        id: 1,
        titleKey: "solutions.card1.title",
        categoryKey: "solutions.card1.category",
        descriptionKey: "solutions.card1.description",
        gradient: "from-emerald-900/50 to-emerald-950/80",
    },
    {
        id: 2,
        titleKey: "solutions.card2.title",
        categoryKey: "solutions.card2.category",
        descriptionKey: "solutions.card2.description",
        gradient: "from-zinc-800 to-zinc-900",
    },
    {
        id: 3,
        titleKey: "solutions.card3.title",
        categoryKey: "solutions.card3.category",
        descriptionKey: "solutions.card3.description",
        gradient: "from-emerald-900/30 to-black",
    },
    {
        id: 4,
        titleKey: "solutions.card4.title",
        categoryKey: "solutions.card4.category",
        descriptionKey: "solutions.card4.description",
        gradient: "from-zinc-900 to-emerald-950/30",
    }
];


const stats = [
    { labelKey: "solutions.stat1.label", value: 2, suffix: "+" },
    { labelKey: "solutions.stat2.label", value: 10, suffix: "+" },
    { labelKey: "solutions.stat3.label", value: 100, suffix: "%" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });
    const springValue = useSpring(0, { stiffness: 10, damping: 20 });
    const rounded = useTransform(springValue, (latest) => Math.round(latest));

    useEffect(() => {
        if (inView) {
            springValue.set(value);
        }
    }, [inView, value, springValue]);

    return (
        <span ref={ref} className="flex items-baseline">
            <motion.span>{rounded}</motion.span>
            {suffix}
        </span>
    );
}

export function Solutions() {
    const [activeId, setActiveId] = useState<number | null>(1);
    const { t } = useLanguage();

    return (
        <section className="relative w-full bg-[#050505] py-32 overflow-hidden">
            <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20">

                {/* Header da Seção */}
                <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-24 gap-8 text-center md:text-left">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.1] max-w-2xl mx-auto md:mx-0"
                    >
                        {t("solutions.title")}
                        <span className="text-zinc-500">{t("solutions.titleHighlight")}</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-zinc-500 max-w-sm text-lg leading-relaxed text-center md:text-right"
                    >
                        {t("solutions.subtitle")}
                    </motion.p>
                </div>

                {/* Galeria Expansiva */}
                <div className="flex flex-col lg:flex-row gap-4 h-[600px] w-full mb-32">
                    {solutionKeys.map((item) => (
                        <motion.div
                            key={item.id}
                            className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${activeId === item.id ? "lg:flex-[3]" : "lg:flex-[1]"
                                } flex-1 min-h-[100px]`}
                            onClick={() => setActiveId(item.id)}
                            onMouseEnter={() => setActiveId(item.id)}
                        >
                            {/* Background Gradient/Image Placeholder */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`} />

                            {/* Overlay suave para escurecer quando inativo */}
                            <div className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${activeId === item.id ? "opacity-0" : "opacity-60"}`} />

                            {/* Conteúdo do Card */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-between">
                                <div className="flex justify-between items-start">
                                    <span className="text-xs font-mono uppercase tracking-widest text-white/60 border border-white/10 px-3 py-1 rounded-full backdrop-blur-md">
                                        0{item.id}
                                    </span>
                                    <motion.div
                                        animate={{ rotate: activeId === item.id ? 45 : 0 }}
                                        className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white"
                                    >
                                        <ArrowUpRight className="w-5 h-5" />
                                    </motion.div>
                                </div>

                                <div>
                                    <motion.span
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="text-emerald-400 text-sm font-medium mb-2 block"
                                    >
                                        {t(item.categoryKey)}
                                    </motion.span>
                                    <h3 className={`font-semibold text-white leading-tight transition-all duration-300 ${activeId === item.id ? "text-3xl md:text-4xl" : "text-xl"}`}>
                                        {t(item.titleKey)}
                                    </h3>

                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{
                                            opacity: activeId === item.id ? 1 : 0,
                                            height: activeId === item.id ? "auto" : 0
                                        }}
                                        className="overflow-hidden"
                                    >
                                        <p className="text-zinc-400 mt-4 max-w-md text-sm leading-relaxed">
                                            {t(item.descriptionKey)}
                                        </p>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Estatísticas (Stats) */}
                <div className="border-t border-white/10 pt-16 pb-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
                        {stats.map((stat, index) => (
                            <div key={index} className="flex flex-col items-center justify-center text-center">
                                <div className="text-5xl md:text-6xl font-bold text-white mb-2 tracking-tighter">
                                    <Counter value={stat.value} suffix={stat.suffix} />
                                </div>
                                <span className="text-zinc-500 text-sm md:text-base font-medium uppercase tracking-wide">
                                    {t(stat.labelKey)}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
