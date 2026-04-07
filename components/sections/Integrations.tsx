"use client";

import { motion } from "framer-motion";
import { MessageSquare, CreditCard, Share2, Database, Globe, Layers } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { StaggerText } from "@/components/ui/StaggerText";

const integrationCategories = [
    { id: 1, key: "integrations.item1", icon: MessageSquare },
    { id: 2, key: "integrations.item2", icon: CreditCard },
    { id: 3, key: "integrations.item3", icon: Share2 },
    { id: 4, key: "integrations.item4", icon: Database },
];

export function Integrations() {
    const { t, language } = useLanguage();

    return (
        <section className="relative w-full bg-[#050505] py-24 md:py-32 overflow-hidden border-t border-white/5">
            <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left: Integration Hub Visualization */}
                    <div className="relative aspect-square max-w-md mx-auto w-full flex items-center justify-center">
                        {/* Animated orbit rings */}
                        <div className="absolute inset-0 border border-emerald-500/10 rounded-full animate-[spin_20s_linear_infinite]" />
                        <div className="absolute inset-8 border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                        <div className="absolute inset-16 border border-emerald-500/5 rounded-full" />

                        {/* Center Hub */}
                        <div className="relative z-10 w-24 h-24 rounded-3xl bg-emerald-950 border border-emerald-500/30 flex items-center justify-center shadow-[0_0_50px_rgba(16,185,129,0.2)]">
                            <Layers className="w-10 h-10 text-emerald-400" />
                            <div className="absolute inset-0 animate-ping bg-emerald-500/10 rounded-3xl" />
                        </div>

                        {/* Floating Icons */}
                        {[MessageSquare, CreditCard, MapPinIcon, Globe].map((Icon, idx) => {
                            const angles = [0, 90, 180, 270];
                            return (
                                <motion.div
                                    key={idx}
                                    animate={{
                                        y: [0, -10, 0],
                                        rotate: [0, 5, 0]
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        delay: idx * 0.5,
                                        ease: "easeInOut"
                                    }}
                                    className="absolute w-12 h-12 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center text-zinc-400 shadow-xl"
                                    style={{
                                        transform: `rotate(${angles[idx]}deg) translate(8rem) rotate(-${angles[idx]}deg)`
                                    }}
                                >
                                    <Icon className="w-5 h-5" />
                                </motion.div>
                            )
                        })}
                    </div>

                    {/* Right: Content */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-emerald-950/30 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest backdrop-blur-md"
                        >
                            {t("integrations.badge")}
                        </motion.div>

                        <StaggerText
                            text={t("integrations.title")}
                            highlightWords={language === "en" ? ["integrate all your tools"] : ["Integramos todas as ferramentas"]}
                            className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.1]"
                        />

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-zinc-500 text-lg md:text-xl leading-relaxed font-light"
                        >
                            {t("integrations.text")}
                        </motion.p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border border-white/[0.06]">
                            {integrationCategories.map((cat, idx) => {
                                const Icon = cat.icon;
                                const number = String(idx + 1).padStart(2, "0");
                                return (
                                    <motion.div
                                        key={cat.id}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.1 * idx }}
                                        className="group relative overflow-hidden p-8 bg-[#0a0a0a] hover:bg-[#111] transition-colors duration-400 cursor-default border-r border-b border-white/[0.06] even:border-r-0 nth-last-child(-n+2):border-b-0 max-sm:border-r-0 max-sm:last:border-b-0 max-sm:nth-last-child(-n+2):border-b"
                                    >
                                        {/* Animated top line */}
                                        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-emerald-400 to-emerald-600 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />

                                        <span className="block font-semibold text-[0.7rem] text-emerald-400 tracking-[0.1em] mb-4">
                                            {number}
                                        </span>

                                        <div className="w-10 h-10 border border-white/[0.08] rounded-[10px] flex items-center justify-center mb-4 text-emerald-400 group-hover:border-emerald-400/40 group-hover:bg-emerald-400/[0.08] transition-all duration-300">
                                            <Icon className="w-5 h-5" />
                                        </div>

                                        <span className="font-semibold text-[1.1rem] text-white tracking-tight">{t(cat.key)}</span>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

// Dummy icon for placeholders if needed
function MapPinIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
        </svg>
    )
}
