"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";

const faqKeys = [
    { questionKey: "faq.q1", answerKey: "faq.a1" },
    { questionKey: "faq.q2", answerKey: "faq.a2" },
    { questionKey: "faq.q3", answerKey: "faq.a3" },
    { questionKey: "faq.q4", answerKey: "faq.a4" },
    { questionKey: "faq.q5", answerKey: "faq.a5" },
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const { t } = useLanguage();

    return (
        <section className="w-full bg-[#050505] py-24 md:py-32 px-6">
            <div className="mx-auto max-w-3xl">

                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-emerald-950/30 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                        {t("faq.badge")}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        {t("faq.title")}
                    </h2>
                    <p className="text-zinc-400 max-w-lg mx-auto">
                        {t("faq.subtitle")}
                    </p>
                </div>

                {/* Accordion */}
                <div className="space-y-4">
                    {faqKeys.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                onClick={() => setOpenIndex(isOpen ? null : index)}
                                className={`
                  group cursor-pointer rounded-xl border border-white/5 bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors overflow-hidden
                  ${isOpen ? "border-emerald-500/20 bg-zinc-900/40" : ""}
                `}
                            >
                                <div className="flex items-center justify-between p-6">
                                    <span className={`font-medium transition-colors ${isOpen ? "text-emerald-400" : "text-zinc-200 group-hover:text-white"}`}>
                                        {t(faq.questionKey)}
                                    </span>
                                    <div className={`
                    flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300
                    ${isOpen ? "bg-emerald-500/10 border-emerald-500/50 text-emerald-500 rotate-180" : "bg-white/5 border-white/10 text-zinc-400 group-hover:border-white/20 group-hover:text-white"}
                  `}>
                                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                    </div>
                                </div>

                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <div className="px-6 pb-6 text-zinc-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                                                {t(faq.answerKey)}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}

