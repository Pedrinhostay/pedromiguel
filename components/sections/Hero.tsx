"use client";

import { ArrowRight, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ShinyButton } from "@/components/ui/ShinyButton";
import { StaggerText } from "@/components/ui/StaggerText";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { useQuiz } from "@/components/providers/QuizProvider";

const chatVariantsPT = [
    // VERSÃO 1: Processos Manuais + Sobrecarga
    [
        { id: 1, variant: "user" as const, message: "Pedro, minha equipe não aguenta mais. Passamos o dia copiando dado de planilha pra CRM. Tá tudo manual, cansativo e lento...", typingDuration: 1.8 },
        { id: 2, variant: "ai" as const, message: "Trabalho braçal mata a escala. Vou criar o sistema: integração total onde os dados fluem sozinhos e sua equipe foca só em fechar negócio. Menos esforço, mais inteligência.", typingDuration: 2.6 },
        { id: 3, variant: "user" as const, message: "PERFEITO. Tira esse peso das minhas costas.", typingDuration: 1 },
    ],

    // VERSÃO 2: Ferramentas Desconectadas + Desorganização
    [
        { id: 1, variant: "user" as const, message: "Cara, tenho 5 ferramentas que não se falam. O lead chega num lugar, o financeiro tá no outro... Uma zona total.", typingDuration: 2.2 },
        { id: 2, variant: "ai" as const, message: "Isso não é uma operação, é um labirinto. Vou orquestrar tudo: n8n conectando cada ponta da sua empresa. Organização absoluta pra você finalmente ter paz.", typingDuration: 2.4 },
        { id: 3, variant: "user" as const, message: "PERFEITO. É exatamente o que eu preciso.", typingDuration: 1 },
    ],

    // VERSÃO 3: Falta de Previsibilidade + Escala
    [
        { id: 1, variant: "user" as const, message: "Pedro, eu não sei quanto vou vender amanhã. Se eu dobrar o investimento hoje, minha operação quebra porque não tem processo...", typingDuration: 2.0 },
        { id: 2, variant: "ai" as const, message: "Você não tem um teto de faturamento, tem um teto de infraestrutura. Vou robustecer seu sistema: processos inteligentes que aguentam o impacto da escala com previsibilidade total.", typingDuration: 2.8 },
        { id: 3, variant: "user" as const, message: "PERFEITO. Vamos construir esse alicerce.", typingDuration: 1 },
    ],
];
const chatVariantsEN = [
    // VERSION 1: Manual Processes + Overload
    [
        { id: 1, variant: "user" as const, message: "Pedro, my team can't take it anymore. We spend all day copying data from spreadsheets to CRM. Everything's manual and slow...", typingDuration: 1.8 },
        { id: 2, variant: "ai" as const, message: "Grunt work kills scale. I'll build the system: full integration where data flows by itself and your team focuses only on closing deals. Less effort, more intelligence.", typingDuration: 2.6 },
        { id: 3, variant: "user" as const, message: "AMAZING. Take this weight off my back.", typingDuration: 1 },
    ],

    // VERSION 2: Disconnected Tools + Disorganization
    [
        { id: 1, variant: "user" as const, message: "Man, I have 5 tools that don't talk to each other. Lead is in one place, finance in another... A total mess.", typingDuration: 2.2 },
        { id: 2, variant: "ai" as const, message: "That's not an operation, it's a maze. I'll orchestrate everything: n8n connecting every part of your business. Absolute organization so you can finally have peace.", typingDuration: 2.4 },
        { id: 3, variant: "user" as const, message: "AMAZING. This is exactly what I need.", typingDuration: 1 },
    ],

    // VERSION 3: Predictability + Scale
    [
        { id: 1, variant: "user" as const, message: "Pedro, I don't know how much I'll sell tomorrow. If I double my investment today, my operation breaks because there's no process...", typingDuration: 2.0 },
        { id: 2, variant: "ai" as const, message: "You don't have a revenue ceiling, you have an infrastructure ceiling. I'll strengthen your system: intelligent processes that handle scale with total predictability.", typingDuration: 2.8 },
        { id: 3, variant: "user" as const, message: "AMAZING. Let's build that foundation.", typingDuration: 1 },
    ],
];

export function Hero() {
    const { language, t } = useLanguage();
    const { openQuiz } = useQuiz();
    const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
    const [typingMessageId, setTypingMessageId] = useState<number | null>(null);
    const [cycle, setCycle] = useState(0);

    const chatMessages = language === "en" ? chatVariantsEN[cycle % chatVariantsEN.length] : chatVariantsPT[cycle % chatVariantsPT.length];

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
                className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 
                bg-[url('/images/hero-mobile.webp')] 
                md:bg-[url('/images/hero-tablet.webp')] 
                lg:bg-[url('/images/hero.webp')]"
            />

            <div className="relative z-20 mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 pt-20 md:pt-32 pb-12 md:pb-20 min-h-[100dvh] md:min-h-screen flex items-end md:items-center">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 w-full items-center mt-auto md:mt-0">

                    {/* Left Content - Typography Focused */}
                    <div className="lg:col-span-7 flex flex-col justify-end lg:justify-center items-center lg:items-start text-center lg:text-left">
                        {/* Personal Branding */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.8 }}
                            className="flex items-center gap-2 mb-6 px-4 lg:px-0"
                        >
                            <span className="text-zinc-400 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase">
                                Pedro Miguel
                            </span>
                            <div className="w-1 h-1 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
                            <span className="text-zinc-500 text-[10px] md:text-xs font-medium tracking-[0.15em] uppercase">
                                Engenheiro de Automação
                            </span>
                        </motion.div>
                        <StaggerText
                            text={t("hero.title")}
                            highlightWords={language === "en" ? ["predictable revenue machines", "AI"] : ["máquinas previsíveis de receita", "IA"]}
                            className="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight text-white leading-[1.05] mb-8 justify-center lg:justify-start"
                        />

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="text-base md:text-xl text-zinc-500 max-w-xl leading-relaxed mb-8 lg:mb-10 font-light px-4 lg:px-0"
                        >
                            {t("hero.subtitle")}
                        </motion.p>


                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="flex flex-col items-center lg:items-start gap-4 px-4 lg:px-0"
                        >
                            <ShinyButton
                                text={t("hero.cta")}
                                onClick={openQuiz}
                                size="lg"
                                className="w-full sm:w-auto"
                            />
                            <p className="text-zinc-500 text-[10px] font-medium tracking-wide uppercase opacity-70">
                                {t("hero.ctaSubtext")}
                            </p>
                        </motion.div>
                    </div>

                    {/* Right Content - Realistic Chat Simulation - Lowered position */}
                    <div className="hidden lg:flex lg:col-span-5 flex-col justify-end items-end h-[500px] lg:mt-48 relative pb-5 pr-2 lg:pr-8">
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
