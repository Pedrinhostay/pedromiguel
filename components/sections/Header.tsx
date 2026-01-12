"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { TechButton } from "@/components/ui/TechButton";
import { useLanguage, Language } from "@/components/providers/LanguageProvider";

const languages = [
  { code: "pt" as Language, name: "Português", flag: "/images/flags/brazil.svg" },
  { code: "en" as Language, name: "English", flag: "/images/flags/usa.svg" },
];

export function Header() {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const currentLang = languages.find(l => l.code === language) || languages[0];

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 py-3 md:py-4 border-b border-white/5 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 flex items-center justify-center md:justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <motion.div
            className="relative h-8 w-8 md:h-10 md:w-10 overflow-hidden rounded-full ring-2 ring-emerald-500/30 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src="/images/avatar.png"
              alt="Pedro Miguel"
              fill
              className="object-cover"
            />
          </motion.div>
          <div className="flex flex-col">
            <span className="text-sm md:text-base font-semibold text-white group-hover:text-emerald-400 transition-colors duration-300">Pedro Miguel</span>
            <span className="text-[10px] md:text-xs text-gray-400">{t("header.role")}</span>
          </div>
        </Link>

        {/* Right side - Hidden on Mobile */}
        <div className="hidden md:flex items-center gap-6">
          {/* Language selector */}
          <div className="relative">
            <motion.button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors p-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: isLangOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="h-4 w-4" />
              </motion.div>
              <Image
                src={currentLang.flag}
                alt={currentLang.name}
                width={24}
                height={18}
                className="rounded-sm"
              />
            </motion.button>

            {/* Dropdown */}
            <AnimatePresence>
              {isLangOpen && (
                <motion.div
                  className="absolute top-full right-0 mt-2 w-40 bg-zinc-900/95 backdrop-blur-md border border-white/10 rounded-xl py-2 shadow-2xl overflow-hidden"
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  {languages.map((lang, index) => (
                    <motion.button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsLangOpen(false);
                      }}
                      className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ x: 4 }}
                    >
                      <Image
                        src={lang.flag}
                        alt={lang.name}
                        width={20}
                        height={14}
                        className="rounded-sm"
                      />
                      <span>{lang.name}</span>
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* CTA Button */}
          <TechButton
            text={t("header.cta")}
            variant="secondary"
            href="https://wa.me/5514997897239?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20como%20escalar%20meu%20neg%C3%B3cio%20com%20impulsionamento%20digital%21"
            target="_blank"
          />
        </div>
      </div>
    </motion.header>
  );
}
