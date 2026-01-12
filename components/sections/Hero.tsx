"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { TechButton } from "@/components/ui/TechButton";
import { StaggerText } from "@/components/ui/StaggerText";
import { useLanguage } from "@/components/providers/LanguageProvider";

const chatMessagesPT = [
    {
        id: 1,
        variant: "user" as const,
        message: "Pedro, meu site não converte e perco tempo com tarefas manuais...",
        delay: 0,
        typingDuration: 1.5,
    },
    {
        id: 2,
        variant: "ai" as const,
        message: "Vou estruturar sua presença digital e automatizar 80% do seu operacional. 🚀",
        delay: 3,
        typingDuration: 2,
    },
    {
        id: 3,
        variant: "user" as const,
        message: "Era exatamente o que eu precisava. Vamos começar!",
        delay: 7,
        typingDuration: 1,
    },
];

const chatMessagesEN = [
    {
        id: 1,
        variant: "user" as const,
        message: "Pedro, my website doesn't convert and I waste time with manual tasks...",
        delay: 0,
        typingDuration: 1.5,
    },
    {
        id: 2,
        variant: "ai" as const,
        message: "I'll structure your digital presence and automate 80% of operations. 🚀",
        delay: 3,
        typingDuration: 2,
    },
    {
        id: 3,
        variant: "user" as const,
        message: "That's exactly what I needed. Let's get started!",
        delay: 7,
        typingDuration: 1,
    },
];

export function Hero() {
    const { language, t } = useLanguage();
    const chatMessages = language === "en" ? chatMessagesEN : chatMessagesPT;

    const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
    const [typingMessageId, setTypingMessageId] = useState<number | null>(null);
    const [cycle, setCycle] = useState(0);

    useEffect(() => {
        setVisibleMessages([]);
        setTypingMessageId(null);
        const timers: NodeJS.Timeout[] = [];

        let currentTime = 0;

        chatMessages.forEach((msg) => {
            const startTypingTimer = setTimeout(() => {
                setTypingMessageId(msg.id);
            }, currentTime * 1000);
            timers.push(startTypingTimer);

            const showMsgTimer = setTimeout(() => {
                setTypingMessageId(null);
                setVisibleMessages((prev) => [...prev, msg.id]);
            }, (currentTime + msg.typingDuration) * 1000);
            timers.push(showMsgTimer);

            currentTime += msg.typingDuration + 1.5;
        });

        const resetTimer = setTimeout(() => {
            setCycle((c) => c + 1);
        }, 14000);

        timers.push(resetTimer);

        return () => timers.forEach(clearTimeout);
    }, [cycle, language]);

    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-[#050505] font-sans selection:bg-white/20">
            {/* Dynamic Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/50 to-[#050505] z-10" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/10 via-[#050505] to-[#050505] z-0" />

            {/* Hero Image - Responsive */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 opacity-80 mix-blend-screen 
                bg-[url('/images/hero-mobile.png')] 
                md:bg-[url('/images/hero-tablet.png')] 
                lg:bg-[url('/images/hero.png')]"
            />

            <div className="relative z-20 mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 pt-32 pb-4 md:pb-20 min-h-screen flex items-end md:items-center">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full items-center">

                    {/* Left Content - Typography Focused */}
                    <div className="lg:col-span-7 flex flex-col justify-end md:justify-center items-center md:items-start text-center md:text-left pb-4 md:pb-0">
                        <StaggerText
                            text={t("hero.title")}
                            highlightWords={language === "en" ? ["Pages", "scale"] : ["Páginas", "escala"]}
                            className="text-4xl sm:text-5xl md:text-7xl font-semibold tracking-tight text-white leading-[1.05] mb-8 justify-center md:justify-start"
                        />

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="text-lg md:text-xl text-zinc-500 max-w-xl leading-relaxed mb-10 font-light"
                        >
                            {t("hero.subtitle")}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="flex flex-wrap gap-6 justify-center md:justify-start"
                        >
                            <TechButton
                                text={t("hero.cta")}
                                href="https://wa.me/5514997897239?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20como%20escalar%20meu%20neg%C3%B3cio%20com%20impulsionamento%20digital%21"
                                target="_blank"
                            />
                        </motion.div>
                    </div>

                    {/* Right Content - Realistic Chat Simulation - Hidden on Mobile/Tablet */}
                    <div className="hidden lg:flex lg:col-span-5 flex-col justify-end items-end h-[500px] relative pb-5 pr-2 lg:pr-8">
                        <div className="w-full max-w-sm flex flex-col gap-4 relative z-50">
                            <AnimatePresence mode="popLayout">
                                {/* Typing Indicator */}
                                {typingMessageId && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        className={`
                      self-${chatMessages.find(m => m.id === typingMessageId)?.variant === 'ai' ? 'start' : 'end'}
                      bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl w-fit
                    `}
                                    >
                                        <div className="flex gap-1">
                                            <motion.span className="w-1.5 h-1.5 bg-zinc-500 rounded-full" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0 }} />
                                            <motion.span className="w-1.5 h-1.5 bg-zinc-500 rounded-full" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }} />
                                            <motion.span className="w-1.5 h-1.5 bg-zinc-500 rounded-full" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.4 }} />
                                        </div>
                                    </motion.div>
                                )}

                                {/* Messages */}
                                {visibleMessages.map((msgId) => {
                                    const msg = chatMessages.find(m => m.id === msgId)!;
                                    const isAI = msg.variant === "ai";
                                    return (
                                        <motion.div
                                            key={`${msg.id}-${cycle}`}
                                            layout
                                            initial={{ opacity: 0, y: 20, scale: 0.95, x: isAI ? -20 : 20 }}
                                            animate={{ opacity: 1, y: 0, scale: 1, x: 0 }}
                                            exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                            className={`
                        relative max-w-[85%] px-5 py-3.5 text-[13px] leading-relaxed tracking-wide font-light
                        ${isAI
                                                    ? "self-start bg-emerald-950/20 backdrop-blur-md border border-emerald-500/20 text-emerald-100 rounded-2xl rounded-bl-sm"
                                                    : "self-end bg-white/5 backdrop-blur-md border border-white/5 text-zinc-200 rounded-2xl rounded-br-sm"
                                                }
                      `}
                                        >
                                            {msg.message}
                                        </motion.div>
                                    );
                                })}
                            </AnimatePresence>
                        </div>

                        {/* Ambient Chat Glow */}
                        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-t from-emerald-500/5 to-transparent rounded-full blur-[100px] pointer-events-none" />
                    </div>

                </div>
            </div>
        </section>
    );
}
