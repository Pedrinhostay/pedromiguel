"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { StaggerText } from "../ui/StaggerText";
import { Quote } from "lucide-react";

export function SocialProof() {
    const { language, t } = useLanguage();

    const proofs = [
        {
            quote: t("socialProof.card1.quote"),
            metric: t("socialProof.card1.metric"),
            author: t("socialProof.card1.author"),
        },
        {
            quote: t("socialProof.card2.quote"),
            metric: t("socialProof.card2.metric"),
            author: t("socialProof.card2.author"),
        },
        {
            quote: t("socialProof.card3.quote"),
            metric: t("socialProof.card3.metric"),
            author: t("socialProof.card3.author"),
        },
    ];

    return (
        <section className="relative w-full bg-[#050505] pt-12 pb-24 overflow-hidden">
            <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20">
                <div className="text-center space-y-6 mb-16">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-emerald-950/30 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest backdrop-blur-md"
                    >
                        {t("socialProof.badge")}
                    </motion.div>

                    <StaggerText
                        text={t("socialProof.title")}
                        highlightWords={language === "en" ? ["numbers", "transformed"] : ["números", "transformou"]}
                        className="text-3xl md:text-5xl lg:text-5xl font-semibold tracking-tight text-white leading-[1.1] justify-center max-w-4xl mx-auto"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {proofs.map((proof, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.6 }}
                            className="relative flex flex-col justify-between p-8 md:p-10 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 transition-colors duration-500 group overflow-hidden"
                        >
                            {/* Glow Effect */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            
                            <div className="relative z-10 space-y-6">
                                <Quote className="w-8 h-8 text-emerald-500/50" />
                                <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light">
                                    "{proof.quote}"
                                </p>
                            </div>

                            <div className="relative z-10 pt-8 mt-8 border-t border-white/5">
                                <p className="text-xl md:text-2xl font-semibold text-emerald-400 mb-1">
                                    {proof.metric}
                                </p>
                                <p className="text-zinc-600 text-xs uppercase tracking-widest font-bold">
                                    {proof.author}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[400px] bg-emerald-900/5 rounded-full blur-[120px] pointer-events-none" />
        </section>
    );
}
