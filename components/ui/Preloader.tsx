"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Preloader() {
    const [isLoading, setIsLoading] = useState(true);
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        // Simular carregamento
        const interval = setInterval(() => {
            setCounter((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setIsLoading(false), 500); // Wait a bit at 100%
                    return 100;
                }
                return prev + Math.floor(Math.random() * 10) + 1; // Incremento aleatório
            });
        }, 100);

        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050505] text-white"
                    exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }} // Slide up reveal
                >
                    {/* Counter */}
                    <motion.div
                        className="text-8xl md:text-9xl font-bold tracking-tighter"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        {counter}%
                    </motion.div>

                    {/* Loading line */}
                    <div className="w-64 h-1 bg-zinc-800 mt-8 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-emerald-500"
                            style={{ width: `${counter}%` }}
                        />
                    </div>

                    <motion.p
                        className="mt-4 text-zinc-500 text-sm uppercase tracking-widest font-mono"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        Carregando Experiência
                    </motion.p>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
