"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/components/providers/LanguageProvider";

// Ícones disponíveis
const icons = [
    { name: "n8n", src: "/images/n8n.svg", size: 40 },
    { name: "OpenAI", src: "/images/chat.svg", size: 40 },
    { name: "Gmail", src: "/images/gmail.svg", size: 40 },
    { name: "WhatsApp", src: "/images/whats.svg", size: 45 },
    { name: "Gemini", src: "/images/gemini.svg", size: 40 },
    { name: "Supabase", src: "/images/supabase.svg", size: 40 },
    { name: "Anthropic", src: "/images/antropic.svg", size: 40 },
    { name: "LangChain", src: "/images/langchain.svg", size: 40 },
];

export function Ecosystem() {
    const { t } = useLanguage();

    return (
        <section className="relative w-full bg-[#050505] py-32 overflow-hidden flex flex-col items-center justify-center">

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-900/10 rounded-full blur-[120px] z-0" />

            <div className="container px-4 md:px-6 relative z-10 flex flex-col items-center">

                {/* Header da Seção */}
                <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/30 border border-emerald-500/20 text-emerald-400 text-xs font-medium uppercase tracking-wider backdrop-blur-md">
                        {t("ecosystem.badge")}
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.1]">
                        {t("ecosystem.title")}<br />
                        {t("ecosystem.titleLine2")}
                    </h2>
                    <p className="text-zinc-500 text-lg leading-relaxed">
                        {t("ecosystem.subtitle")}
                    </p>
                </div>

                {/* Orbital System Container - Expanded */}
                <div className="relative w-[350px] md:w-[700px] h-[350px] md:h-[700px] flex items-center justify-center">

                    {/* Anéis Orbitais Estáticos (Visual) */}
                    <div className="absolute inset-0 border border-white/5 rounded-full" />
                    <div className="absolute inset-[60px] md:inset-[180px] border border-white/5 rounded-full" />

                    {/* Núcleo Central (IA) */}
                    <div className="relative z-20 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-3xl flex items-center justify-center shadow-[0_0_50px_-10px_rgba(16,185,129,0.5)]">
                        <div className="absolute inset-[2px] bg-[#0A0A0A] rounded-[22px] flex items-center justify-center">
                            <span className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-emerald-400 to-white">
                                IA
                            </span>
                        </div>
                    </div>

                    {/* Anel Externo Giratório - Ícones */}
                    {/* Usando CSS Variables para raio responsivo: 175px mobile, 350px desktop (metade do container) */}
                    <motion.div
                        className="absolute w-full h-full [--orbit-radius:175px] md:[--orbit-radius:350px]"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                    >
                        {icons.map((icon, index) => {
                            const angle = (index / icons.length) * 360;

                            return (
                                <div
                                    key={icon.name}
                                    className="absolute top-1/2 left-1/2 -ml-[30px] -mt-[30px] md:-ml-[40px] md:-mt-[40px] w-[60px] h-[60px] md:w-[80px] md:h-[80px]"
                                    style={{
                                        transform: `rotate(${angle}deg) translate(var(--orbit-radius)) rotate(-${angle}deg)`
                                    }}
                                >
                                    <motion.div
                                        className="w-full h-full bg-zinc-900/90 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-center hover:border-emerald-500/50 hover:bg-zinc-800 transition-colors shadow-2xl"
                                        animate={{ rotate: -360 }}
                                        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                                    >
                                        <Image
                                            src={icon.src}
                                            alt={icon.name}
                                            width={icon.size * 1.5} // 50% larger
                                            height={icon.size * 1.5}
                                            className="opacity-90 hover:opacity-100 transition-opacity p-3 object-contain"
                                        />
                                    </motion.div>
                                </div>
                            );
                        })}
                    </motion.div>

                    {/* Anel Interno Giratório (Oposto) */}
                    <motion.div
                        className="absolute w-[220px] h-[220px] md:w-[450px] md:h-[450px] border border-dashed border-emerald-500/20 rounded-full opacity-30"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
                    />

                </div>
            </div>
        </section>
    );
}
