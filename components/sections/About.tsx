"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { TechButton } from "../ui/TechButton";
import { StaggerText } from "../ui/StaggerText";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function About() {
    const { language, t } = useLanguage();

    return (
        <section className="relative w-full min-h-[800px] flex items-center bg-[#050505] overflow-hidden">
            {/* Soft Gradients to avoid hard cuts */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#050505] to-transparent z-10" />
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050505] to-transparent z-10" />

            {/* Hero Image Background - Responsive */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0
                md:bg-[url('/images/hero.png')]"
            />

            {/* Conteúdo */}
            <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 relative z-20 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Coluna de Texto (Ocupa metade esquerda) */}
                    <div className="lg:col-span-6 flex flex-col items-center md:items-start text-center md:text-left">

                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-emerald-950/30 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest backdrop-blur-md mb-8 mx-auto md:mx-0"
                        >
                            {t("about.badge")}
                        </motion.div>

                        {/* Título */}
                        <StaggerText
                            text={t("about.title")}
                            highlightWords={language === "en" ? ["complexity", "efficiency."] : ["complexidade", "eficiência."]}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-8 justify-center md:justify-start"
                        />

                        {/* Parágrafos */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}
                            className="space-y-6 text-zinc-300 text-lg leading-relaxed max-w-lg text-center md:text-left"
                        >
                            <p>{t("about.p1")}</p>
                            <p>{t("about.p2")}</p>
                        </motion.div>

                        {/* Botão */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            viewport={{ once: true }}
                            className="mt-10 w-full flex justify-center md:justify-start"
                        >
                            <TechButton
                                text={t("about.cta")}
                                variant="secondary"
                                href="https://wa.me/5514997897239?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20como%20escalar%20meu%20neg%C3%B3cio%20com%20impulsionamento%20digital%21"
                                target="_blank"
                            />
                        </motion.div>
                    </div>

                    {/* Coluna Vazia (Espaço da Imagem) */}
                    <div className="lg:col-span-6" />

                </div>
            </div>
        </section>
    );
}
