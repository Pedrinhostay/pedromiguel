"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

interface QuizContextType {
    isOpen: boolean;
    openQuiz: () => void;
    closeQuiz: () => void;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export function QuizProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    const openQuiz = () => setIsOpen(true);
    const closeQuiz = () => setIsOpen(false);

    return (
        <QuizContext.Provider value={{ isOpen, openQuiz, closeQuiz }}>
            {children}
            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeQuiz}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-xl bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
                        >
                            <button
                                onClick={closeQuiz}
                                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors z-10"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="p-8 md:p-12">
                                <div className="mb-8">
                                    <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2 block">
                                        Lead Qualification
                                    </span>
                                    <h2 className="text-3xl font-bold text-white tracking-tight">
                                        Vamos estruturar seu <span className="text-emerald-400">crescimento?</span>
                                    </h2>
                                    <p className="text-zinc-400 mt-4 text-lg">
                                        O Quiz de Qualificação está em desenvolvimento. Para começar agora, vamos conversar no WhatsApp.
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <a
                                        href="https://wa.me/5514997897239?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20fazer%20o%20quiz%20de%20qualifica%C3%A7%C3%A3o%21"
                                        target="_blank"
                                        className="flex h-14 w-full items-center justify-center rounded-2xl bg-emerald-500 font-bold text-black transition-all hover:bg-emerald-400 hover:scale-[1.02] active:scale-95 shadow-[0_0_20px_rgba(16,185,129,0.2)]"
                                    >
                                        FALAR COM PEDRO NO WHATSAPP
                                    </a>
                                    <button
                                        onClick={closeQuiz}
                                        className="w-full py-4 text-zinc-500 hover:text-zinc-300 transition-colors text-sm font-medium"
                                    >
                                        Voltar para o site
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </QuizContext.Provider>
    );
}

export function useQuiz() {
    const context = useContext(QuizContext);
    if (context === undefined) {
        throw new Error("useQuiz must be used within a QuizProvider");
    }
    return context;
}
