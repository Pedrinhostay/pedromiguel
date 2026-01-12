"use client";

import { Instagram, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="w-full bg-[#050505] border-t border-white/5 py-12 px-6">
            <div className="mx-auto max-w-[1400px] flex flex-col md:flex-row items-center justify-between gap-6">

                {/* Brand/Name */}
                <div className="flex flex-col  gap-0.5">
                    <span className="text-white text-2xl font-medium tracking-tight">
                        Pedro Miguel
                    </span>
                    <span className="text-zinc-500 font-normal tracking-tight">
                        {t("footer.role")}
                    </span>
                </div>

                {/* Links */}
                <div className="flex items-center gap-6">
                    <a
                        href="https://www.instagram.com/pedrostaay/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-500 hover:text-emerald-400 transition-colors p-2 hover:bg-white/5 rounded-full"
                        aria-label="Instagram"
                    >
                        <Instagram className="w-5 h-5" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/pedromiguelg/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-500 hover:text-emerald-400 transition-colors p-2 hover:bg-white/5 rounded-full"
                        aria-label="LinkedIn"
                    >
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                        href="mailto:pedrostaay@hotmail.com"
                        className="text-zinc-500 hover:text-emerald-400 transition-colors p-2 hover:bg-white/5 rounded-full"
                        aria-label="Email"
                    >
                        <Mail className="w-5 h-5" />
                    </a>
                </div>

            </div>
        </footer>
    );
}
