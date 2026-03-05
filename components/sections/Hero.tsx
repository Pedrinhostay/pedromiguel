"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { TechButton } from "@/components/ui/TechButton";
import { StaggerText } from "@/components/ui/StaggerText";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { useQuiz } from "@/components/providers/QuizProvider";

const chatVariantsPT = [
    // VERSÃO 1: Dor Específica + Número Chocante
    [
        { id: 1, variant: "user" as const, message: "Pedro, gastei 8 mil em anúncios esse mês. 400 cliques, ZERO vendas. E ainda perco 3h por dia respondendo 'qual o preço?' no Whats...", typingDuration: 1.8 },
        { id: 2, variant: "ai" as const, message: "Vou transformar seu site em um vendedor 24h: landing page que converte visitante em agendamento + IA que qualifica lead enquanto você dorme. Resultado do último cliente: de 0% para 12% de conversão em 14 dias.", typingDuration: 2.6 },
        { id: 3, variant: "user" as const, message: "CARALHO. Como a gente começa?", typingDuration: 1 },
    ],

    // VERSÃO 2: Urgência Emocional
    [
        { id: 1, variant: "user" as const, message: "Pedro, estou exausto. Tráfego caro, site que não vende, e eu preso no operacional. Tô pensando em desistir do digital...", typingDuration: 1.8 },
        { id: 2, variant: "ai" as const, message: "Para. Você não tem problema de produto. Tem problema de ponte. Vou construir a ponte: site que vende + automação que escala. Seu concorrente menor já faz isso. A diferença é que agora você vai fazer melhor.", typingDuration: 2.4 },
        { id: 3, variant: "user" as const, message: "CARALHO. Me mostra como.", typingDuration: 1 },
    ],

    // VERSÃO 3: Contraste Antes/Depois Extremo
    [
        { id: 1, variant: "user" as const, message: "Pedro, meu site é bonito. Zero vendas. E eu ainda respondo cada lead manualmente como se fosse 2015...", typingDuration: 1.6 },
        { id: 2, variant: "ai" as const, message: "Bonito não paga conta. Vou destruir e reconstruir: novo posicionamento que fecha em 2 toques + agente IA que atende 50 leads simultâneos. Você vai de escravo do operacional a dono do negócio. Em 10 dias.", typingDuration: 2.6 },
        { id: 3, variant: "user" as const, message: "CARALHO. Era isso.", typingDuration: 1 },
    ],

    // VERSÃO 4: Medo de Perder
    [
        { id: 1, variant: "user" as const, message: "Pedro, tô vendo meus concorrentes crescerem no digital. Meu site tem 6 meses e nunca vendeu sozinho...", typingDuration: 1.6 },
        { id: 2, variant: "ai" as const, message: "Em 6 meses eles não cresceram. Te ultrapassaram. Mas tem uma coisa: quem tem sistema vence quem tem só aparência. Vou instalar o sistema. Site + automação. Em 30 dias você olha para trás e ri de hoje.", typingDuration: 2.4 },
        { id: 3, variant: "user" as const, message: "CARALHO. Vamos antes que eu piore.", typingDuration: 1 },
    ],

    // VERSÃO 5: O 'Hack'
    [
        { id: 1, variant: "user" as const, message: "Pedro, já tentei de tudo. Designer, tráfego pago, copy genérica. Nada converte...", typingDuration: 1.6 },
        { id: 2, variant: "ai" as const, message: "Você tentou partes separadas. Nunca o sistema completo. Landing page otimizada para o algoritmo do Google + agente IA treinado na sua voz de venda. É o hack que seus concorrentes grandes usam. Só que agora é seu.", typingDuration: 2.4 },
        { id: 3, variant: "user" as const, message: "CARALHO. Quanto pra começar amanhã?", typingDuration: 1 },
    ],
];
const chatVariantsEN = [
    // VERSION 1: Specific Pain + Shocking Number
    [
        { id: 1, variant: "user" as const, message: "Pedro, I spent $8k on ads this month. 400 clicks, ZERO sales. And I still waste 3h a day answering 'what's the price?' on WhatsApp...", typingDuration: 1.8 },
        { id: 2, variant: "ai" as const, message: "I'll turn your site into a 24/7 seller: a landing page that converts visitors into bookings + AI that qualifies leads while you sleep. Last client's result: from 0% to 12% conversion in 14 days.", typingDuration: 2.6 },
        { id: 3, variant: "user" as const, message: "HOLY SHIT. How do we start?", typingDuration: 1 },
    ],

    // VERSION 2: Emotional Urgency
    [
        { id: 1, variant: "user" as const, message: "Pedro, I'm exhausted. Expensive traffic, a site that doesn't sell, and I'm stuck in ops. I'm thinking of giving up on digital...", typingDuration: 1.8 },
        { id: 2, variant: "ai" as const, message: "Stop. It's not your product — it's the bridge. I'll build the bridge: a site that sells + automation that scales. Your smaller competitor already does this. The difference is you'll do it better.", typingDuration: 2.4 },
        { id: 3, variant: "user" as const, message: "HOLY SHIT. Show me how.", typingDuration: 1 },
    ],

    // VERSION 3: Extreme Before/After Contrast
    [
        { id: 1, variant: "user" as const, message: "Pedro, my site is pretty. Zero sales. And I still reply to every lead manually like it's 2015...", typingDuration: 1.6 },
        { id: 2, variant: "ai" as const, message: "Pretty doesn't pay the bills. I'll tear it down and rebuild: new positioning that closes in 2 touches + an AI agent that handles 50 leads simultaneously. You'll go from ops slave to business owner. In 10 days.", typingDuration: 2.6 },
        { id: 3, variant: "user" as const, message: "HOLY SHIT. That's it.", typingDuration: 1 },
    ],

    // VERSION 4: Fear of Missing Out
    [
        { id: 1, variant: "user" as const, message: "Pedro, I'm seeing my competitors grow online. My site is 6 months old and never sold by itself...", typingDuration: 1.6 },
        { id: 2, variant: "ai" as const, message: "In 6 months they didn't just 'grow' — they overtook you. But here's the thing: systems beat looks. I'll install the system. Site + automation. In 30 days you'll look back and laugh at today.", typingDuration: 2.4 },
        { id: 3, variant: "user" as const, message: "HOLY SHIT. Let's do it before I get worse.", typingDuration: 1 },
    ],

    // VERSION 5: The 'Hack'
    [
        { id: 1, variant: "user" as const, message: "Pedro, I've tried everything. Designer, paid traffic, generic copy. Nothing converts...", typingDuration: 1.6 },
        { id: 2, variant: "ai" as const, message: "You tried the pieces separately. Never the full system. Landing page optimized for Google's algorithm + an AI agent trained in your sales voice. It's the hack big competitors use. Now it's yours.", typingDuration: 2.4 },
        { id: 3, variant: "user" as const, message: "HOLY SHIT. How much to start tomorrow?", typingDuration: 1 },
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
                    <div className="lg:col-span-7 flex flex-col justify-end md:justify-center items-center md:items-start text-center md:text-left">
                        <StaggerText
                            text={t("hero.title")}
                            highlightWords={language === "en" ? ["Pages", "scale"] : ["Páginas", "escala"]}
                            className="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight text-white leading-[1.05] mb-8 justify-center md:justify-start"
                        />

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="text-base md:text-xl text-zinc-400 max-w-xl leading-relaxed mb-8 md:mb-10 font-light px-4 md:px-0"
                        >
                            {t("hero.subtitle")}
                        </motion.p>


                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="flex flex-nowrap gap-4 justify-center md:justify-start items-center"
                        >
                            <TechButton
                                text={t("hero.cta")}
                                onClick={openQuiz}
                                variant="default"
                            />
                        </motion.div>
                    </div>

                    {/* Right Content - Realistic Chat Simulation - Hidden on Mobile/Tablet */}
                    <div className="hidden lg:flex lg:col-span-5 flex-col justify-end items-end h-[500px] lg:mt-28 relative pb-5 pr-2 lg:pr-8">
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
