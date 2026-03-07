"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { StaggerText } from "../ui/StaggerText";

const brands = [
    { name: "OpenAI", logo: "https://cdn.simpleicons.org/openai/white" },
    { name: "n8n", logo: "https://cdn.simpleicons.org/n8n/white" },
    { name: "Make", logo: "https://cdn.simpleicons.org/make/white" },
    { name: "HubSpot", logo: "https://cdn.simpleicons.org/hubspot/white" },
    { name: "Anthropic", logo: "https://cdn.simpleicons.org/anthropic/white" },
    { name: "Google Cloud", logo: "https://cdn.simpleicons.org/googlecloud/white" },
    { name: "Airtable", logo: "https://cdn.simpleicons.org/airtable/white" },
    { name: "Stripe", logo: "https://cdn.simpleicons.org/stripe/white" },
];

export function BrandCarousel() {
    const { language, t } = useLanguage();

    // Duplicate brands for infinite scroll
    const duplicatedBrands = [...brands, ...brands, ...brands, ...brands];

    return (
        <section className="relative w-full bg-[#050505] pt-32 pb-12 overflow-hidden">
            <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 mb-20">
                <div className="text-center space-y-6">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-emerald-950/30 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest backdrop-blur-md"
                    >
                        {t("brands.badge")}
                    </motion.div>

                    <StaggerText
                        text={t("brands.title")}
                        highlightWords={language === "en" ? ["scalable"] : ["escaláveis"]}
                        className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.1] justify-center"
                    />

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                        className="text-zinc-500 text-lg max-w-xl mx-auto font-light"
                    >
                        {t("brands.text")}
                    </motion.p>
                </div>
            </div>

            <div className="relative mb-12">
                <div className="flex overflow-hidden group">
                    <motion.div
                        className="flex shrink-0 gap-4 md:gap-6 items-center px-4"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            duration: 40,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        {duplicatedBrands.map((brand, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center justify-center p-8 md:p-10 lg:p-12 rounded-[2rem] bg-white/[0.03] border border-white/5 min-w-[200px] md:min-w-[240px] h-[120px] md:h-[140px] transition-all duration-500 hover:scale-[1.05] hover:bg-white/[0.05] group/card cursor-pointer"
                            >
                                <img
                                    src={brand.logo}
                                    alt={brand.name}
                                    className="h-10 md:h-12 w-auto object-contain opacity-40 group-hover/card:opacity-100 transition-opacity duration-500"
                                />
                                <span className="mt-2 text-zinc-600 text-[10px] uppercase tracking-[0.2em] font-bold opacity-0 group-hover/card:opacity-100 transition-all duration-500">
                                    {brand.name}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Left and Right Fade Gradients */}
                <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-[#050505] via-[#050505]/50 to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-[#050505] via-[#050505]/50 to-transparent z-10 pointer-events-none" />
            </div>
        </section>
    );
}
