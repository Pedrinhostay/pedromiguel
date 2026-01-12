"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface TechButtonProps {
    text: string;
    onClick?: () => void;
    className?: string;
    variant?: "default" | "secondary";
    href?: string;
    target?: string;
}

export function TechButton({ text, onClick, className = "", variant = "default", href, target }: TechButtonProps) {
    const [isHovered, setIsHovered] = useState(false);

    // Matriz de pontos para a seta (7x7 grid para definição melhor)
    // 1 = aceso, 0 = apagado
    const arrowMatrix = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0], // Start of arrow top
        [0, 1, 1, 0, 0, 0, 0],
        [0, 1, 1, 1, 0, 0, 0], // Middle point
        [0, 1, 1, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0], // End of arrow bottom
        [0, 0, 0, 0, 0, 0, 0],
    ];

    // Estilos baseados na variante
    const baseStyles = "group relative cursor-pointer flex items-center justify-between gap-4 rounded-xl p-2 pr-6 backdrop-blur-md border transition-all duration-300";

    // Default: Dark Glass (Estilo original)
    const defaultStyles = "bg-zinc-900/80 text-white border-white/5 hover:border-emerald-500/30 hover:bg-zinc-900";

    // Secondary: Light/Colored (Novo estilo - mais destaque)
    // Usando Emerald 500 para destaque ou Branco? "mais cores" sugere flexibilidade, mas vou fazer um preset Emerald sólido para testar.
    const secondaryStyles = "bg-emerald-500/10 text-emerald-400 border-emerald-500/50 hover:bg-emerald-500/20 hover:border-emerald-400 hover:shadow-[0_0_20px_-5px_rgba(16,185,129,0.3)]";

    const variantStyles = variant === "secondary" ? secondaryStyles : defaultStyles;

    const Component = href ? motion.a : motion.button;

    return (
        <Component
            className={`${baseStyles} ${variantStyles} ${className}`}
            onClick={onClick}
            href={href}
            target={target}
            rel={target === "_blank" ? "noopener noreferrer" : undefined}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
        >
            {/* Container do ícone Matrix */}
            <div className={`relative flex h-10 w-10 items-center justify-center rounded-lg shadow-inner overflow-hidden ${variant === "secondary" ? "bg-emerald-950/50" : "bg-black/50"}`}>
                {/* Glow effect atrás dos pontos */}
                <div className="absolute inset-0 bg-emerald-500/20 blur-md opacity-50" />

                {/* Grid de pontos */}
                <div className="relative z-10 grid grid-cols-5 gap-[2px]">
                    {Array.from({ length: 25 }).map((_, i) => {
                        // Lógica simples para desenhar a seta na grid 5x5
                        const x = i % 5;
                        const y = Math.floor(i / 5);

                        // Definição da forma da seta
                        const isArrow =
                            (x === 1 && y === 1) ||
                            (x === 2 && y === 2) ||
                            (x === 1 && y === 3) ||
                            // Cauda
                            (x === 0 && y === 2);

                        return (
                            <motion.div
                                key={i}
                                className="h-[3px] w-[3px] rounded-full"
                                animate={{
                                    backgroundColor: isArrow ? "#10b981" : (variant === "secondary" ? "#064e3b" : "#3f3f46"), // emerald-900 vs zinc-700
                                    opacity: isArrow ? 1 : 0.2,
                                    scale: isArrow ? 1.2 : 1,
                                    filter: isArrow ? "drop-shadow(0 0 2px #10b981)" : "none"
                                }}
                                transition={{ duration: 0.2 }}
                            >
                                {/* Animação de movimento no hover */}
                                {isArrow && (
                                    <motion.div
                                        className="absolute inset-0 bg-white rounded-full opacity-0"
                                        animate={isHovered ? {
                                            opacity: [0, 1, 0],
                                            x: [0, 4, 0] // Move a luz
                                        } : {}}
                                        transition={{
                                            repeat: Infinity,
                                            duration: 1,
                                            ease: "linear",
                                            delay: (x + y) * 0.1 // Stagger effect
                                        }}
                                    />
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Texto */}
            <span className={`font-medium tracking-wide text-sm md:text-base transition-colors ${variant === "secondary" ? "text-emerald-300 group-hover:text-emerald-100" : "text-zinc-200 group-hover:text-white"}`}>
                {text}
            </span>

            {/* Brilho de fundo no botão */}
            <div className="absolute inset-0 rounded-xl bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </Component>
    );
}
