"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { Bot, Database, Layout, Workflow, MapPin, BarChart3 } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";

const solutions = [
    {
        id: 1,
        titleKey: "solutions.card1.title",
        categoryKey: "solutions.card1.category",
        descriptionKey: "solutions.card1.description",
        icon: Bot,
        color: "from-emerald-950 to-emerald-900/50",
        iconColor: "text-emerald-400",
        border: "border-emerald-500/20",
    },
    {
        id: 2,
        titleKey: "solutions.card2.title",
        categoryKey: "solutions.card2.category",
        descriptionKey: "solutions.card2.description",
        icon: Database,
        color: "from-purple-950 to-purple-900/50",
        iconColor: "text-purple-400",
        border: "border-purple-500/20",
    },
    {
        id: 3,
        titleKey: "solutions.card3.title",
        categoryKey: "solutions.card3.category",
        descriptionKey: "solutions.card3.description",
        icon: Layout,
        color: "from-blue-950 to-blue-900/50",
        iconColor: "text-blue-400",
        border: "border-blue-500/20",
    },
    {
        id: 4,
        titleKey: "solutions.card4.title",
        categoryKey: "solutions.card4.category",
        descriptionKey: "solutions.card4.description",
        icon: Workflow,
        color: "from-orange-950 to-orange-900/50",
        iconColor: "text-orange-400",
        border: "border-orange-500/20",
    },
    {
        id: 5,
        titleKey: "solutions.card5.title",
        categoryKey: "solutions.card5.category",
        descriptionKey: "solutions.card5.description",
        icon: MapPin,
        color: "from-red-950 to-red-900/50",
        iconColor: "text-red-400",
        border: "border-red-500/20",
    },
    {
        id: 6,
        titleKey: "solutions.card6.title",
        categoryKey: "solutions.card6.category",
        descriptionKey: "solutions.card6.description",
        icon: BarChart3,
        color: "from-cyan-950 to-cyan-900/50",
        iconColor: "text-cyan-400",
        border: "border-cyan-500/20",
    },
];

// Animated SVG connector from center node to a card
function ConnectorPath({ d, delay = 0 }: { d: string; delay?: number }) {
    return (
        <motion.path
            d={d}
            stroke="url(#lineGradient)"
            strokeWidth="1"
            fill="none"
            strokeDasharray="1"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay, ease: "easeInOut" }}
        />
    );
}

function SolutionCard({ solution, index, side }: { solution: typeof solutions[0], index: number, side: "left" | "right" | "center" }) {
    const { t } = useLanguage();
    const Icon = solution.icon;

    const variants = {
        initial: {
            opacity: 0,
            x: side === "left" ? -30 : side === "right" ? 30 : 0,
            y: side === "center" ? 20 : 0
        },
        animate: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration: 0.8,
                delay: 0.1 + (index % 3) * 0.1,
                ease: [0.21, 0.45, 0.32, 0.9] as const
            }
        }
    };

    return (
        <motion.div
            variants={variants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className={`group relative p-6 rounded-2xl border ${solution.border} bg-white/[0.02] backdrop-blur-sm transition-all hover:bg-white/[0.04] hover:shadow-[0_0_20px_rgba(255,255,255,0.02)]`}
        >
            <div className="flex items-center gap-4 mb-3">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${solution.color} flex items-center justify-center ${solution.iconColor} border border-white/5`}>
                    <Icon className="w-6 h-6" />
                </div>
                <div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500 mb-0.5 block">
                        {t(solution.categoryKey)}
                    </span>
                    <h3 className="text-white font-medium text-lg leading-tight group-hover:text-emerald-400 transition-colors">
                        {t(solution.titleKey)}
                    </h3>
                </div>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">
                {t(solution.descriptionKey)}
            </p>

            {/* Connector lines visual indicator */}
            {side !== "center" && (
                <div className={`absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-emerald-500/30 blur-[2px] ${side === "left" ? "-right-1" : "-left-1"}`} />
            )}
        </motion.div>
    );
}

export function Solutions() {
    const { t } = useLanguage();
    const sectionRef = useRef<HTMLDivElement>(null);

    const leftCards = solutions.slice(0, 3);
    const rightCards = solutions.slice(3, 6);

    return (
        <section ref={sectionRef} className="relative w-full bg-[#050505] py-32 overflow-hidden">
            {/* Ambient glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-500/5 via-transparent to-transparent" />

            <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20">

                {/* Section Header */}
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.1] mb-6"
                    >
                        {t("solutions.title")}
                        <span className="text-zinc-500">{t("solutions.titleHighlight")}</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                        className="text-zinc-500 text-lg max-w-xl mx-auto"
                    >
                        {t("solutions.subtitle")}
                    </motion.p>
                </div>

                {/* — Desktop: Mind-map layout — */}
                <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] gap-8 items-center relative">

                    {/* Left Cards */}
                    <div className="flex flex-col gap-6">
                        {leftCards.map((s, i) => (
                            <SolutionCard key={s.id} solution={s} index={i} side="left" />
                        ))}
                    </div>

                    {/* Center Node + SVG Lines */}
                    <div className="relative flex items-center justify-center w-36">
                        {/* SVG connecting lines */}
                        <svg
                            className="absolute inset-0 w-full h-full overflow-visible pointer-events-none"
                            style={{ overflow: "visible" }}
                        >
                            <defs>
                                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
                                    <stop offset="50%" stopColor="#10b981" stopOpacity="0.6" />
                                    <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                            {/* Lines to left cards (top, mid, bottom) */}
                            <ConnectorPath d="M 0,50% L -100%,17%" delay={0.3} />
                            <ConnectorPath d="M 0,50% L -100%,50%" delay={0.5} />
                            <ConnectorPath d="M 0,50% L -100%,83%" delay={0.7} />
                            {/* Lines to right cards */}
                            <ConnectorPath d="M 100%,50% L 200%,17%" delay={0.4} />
                            <ConnectorPath d="M 100%,50% L 200%,50%" delay={0.6} />
                            <ConnectorPath d="M 100%,50% L 200%,83%" delay={0.8} />
                        </svg>

                        {/* Core node */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative z-10 flex items-center justify-center"
                        >
                            <motion.div
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                                className="absolute w-24 h-24 rounded-full bg-emerald-500/10 blur-xl"
                            />
                            <div className="w-16 h-16 rounded-2xl bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center relative z-10 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                                <svg viewBox="0 0 24 24" className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
                                </svg>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Cards */}
                    <div className="flex flex-col gap-6">
                        {rightCards.map((s, i) => (
                            <SolutionCard key={s.id} solution={s} index={i} side="right" />
                        ))}
                    </div>
                </div>

                {/* — Mobile: Grid layout — */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:hidden">
                    {solutions.map((s, i) => (
                        <SolutionCard key={s.id} solution={s} index={i} side="center" />
                    ))}
                </div>

            </div>
        </section>
    );
}
