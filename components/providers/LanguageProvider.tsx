"use client";

import { createContext, useContext, useState, ReactNode } from "react";

// Tipos
export type Language = "pt" | "en";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

// Traduções
const translations: Record<Language, Record<string, string>> = {
    pt: {
        // Header
        "header.role": "Automação & Design",
        "header.cta": "Agendar Consultoria",

        // Hero
        "hero.title": "Páginas e ecossistemas digitais para escala real.",
        "hero.subtitle": "Tudo começa com uma página bem construída. O crescimento vem da automação, sistemas e IA por trás dela.",
        "hero.cta": "ESTRUTURAR MEU CRESCIMENTO",

        // Solutions
        "solutions.title": "Estruturas pensadas para",
        "solutions.titleHighlight": " escalar negócios.",
        "solutions.subtitle": "Tudo começa com uma página bem construída. O crescimento vem dos sistemas, automações e IA por trás dela.",
        "solutions.stat1.label": "Operações Transformadas",
        "solutions.stat2.label": "Tecnologias de Ponta",
        "solutions.stat3.label": "Impacto Gerado",
        "solutions.card1.title": "Agentes de IA",
        "solutions.card1.category": "Inteligência Ativa",
        "solutions.card1.description": "Automação de atendimento e processos complexos com inteligência artificial de ponta.",
        "solutions.card2.title": "CRM Inteligente",
        "solutions.card2.category": "Gestão de Leads",
        "solutions.card2.description": "Gestão de leads e funil de vendas automatizado para nunca mais perder um negócio.",
        "solutions.card3.title": "Landing Pages",
        "solutions.card3.category": "Alta Conversão",
        "solutions.card3.description": "Páginas construídas para converter visitantes em clientes qualificados.",
        "solutions.card4.title": "Automação n8n",
        "solutions.card4.category": "Fluxo Total",
        "solutions.card4.description": "Conecte todas as suas ferramentas em um fluxo de trabalho único e eficiente.",
        "solutions.card5.title": "Google Meu Negócio",
        "solutions.card5.category": "Presença Local",
        "solutions.card5.description": "Domine as buscas locais e atraia clientes que já estão prontos para comprar.",
        "solutions.card6.title": "Dashboards de Vendas",
        "solutions.card6.category": "Dados Reais",
        "solutions.card6.description": "Visibilidade total dos seus números em tempo real para decisões baseadas em dados.",

        // About
        "about.badge": "SOBRE MIM",
        "about.title": "Transformando complexidade em eficiência.",
        "about.p1": "Meu nome é Pedro Miguel e eu desenho a infraestrutura que permite empresas escalarem sem aumentar a carga de trabalho.",
        "about.p2": "Foco total em n8n, IA e arquitetura de sistemas para devolver tempo estratégico para quem decide.",
        "about.cta": "Agendar Consultoria",

        // FAQ
        "faq.badge": "Retirando suas dúvidas",
        "faq.title": "Dúvidas frequentes",
        "faq.subtitle": "Crio sites, automações e sistemas inteligentes usando n8n, IA e integrações para empresas que querem escala real, não gambiarra.",
        "faq.q1": "Como funciona a consultoria de automação?",
        "faq.a1": "Analisamos seus processos atuais, identificamos gargalos e desenhamos uma arquitetura de automação personalizada usando n8n e IA para eliminar trabalho manual.",
        "faq.q2": "Quais ferramentas vocês utilizam?",
        "faq.a2": "Principalmente n8n para orquestração, OpenAI/Anthropic para inteligência, e Supabase para dados. Integramos com qualquer ferramenta que possua API.",
        "faq.q3": "É necessário ter equipe técnica?",
        "faq.a3": "Não. Entregamos a solução pronta e rodando. Se necessário, oferecemos treinamento ou suporte contínuo para sua equipe operacional.",
        "faq.q4": "Qual o prazo médio de implementação?",
        "faq.a4": "Projetos de automação específicos levam de 1 a 3 semanas. Ecossistemas completos podem levar de 4 a 8 semanas dependendo da complexidade.",
        "faq.q5": "Como funciona o suporte pós-entrega?",
        "faq.a5": "Oferecemos 30 dias de garantia e acompanhamento. Planos de manutenção mensal estão disponíveis para evolução contínua das automações.",

        // Footer
        "footer.role": "Automação & Design",
    },
    en: {
        // Header
        "header.role": "Automation & Design",
        "header.cta": "Schedule Consultation",

        // Hero
        "hero.title": "Pages and digital ecosystems for real scale.",
        "hero.subtitle": "It all starts with a well-built page. Growth comes from the automation, systems and AI behind it.",
        "hero.cta": "STRUCTURE MY GROWTH",

        // Solutions
        "solutions.title": "Structures built to",
        "solutions.titleHighlight": " scale businesses.",
        "solutions.subtitle": "It all starts with a well-built page. Growth comes from the systems, automations and AI behind it.",
        "solutions.stat1.label": "Transformed Operations",
        "solutions.stat2.label": "Cutting-Edge Technologies",
        "solutions.stat3.label": "Impact Generated",

        "solutions.card1.title": "AI Agents",
        "solutions.card1.category": "Active Intelligence",
        "solutions.card1.description": "Customer service and complex process automation with cutting-edge artificial intelligence.",
        "solutions.card2.title": "Intelligent CRM",
        "solutions.card2.category": "Lead Management",
        "solutions.card2.description": "Lead management and automated sales funnel to never lose a deal again.",
        "solutions.card3.title": "Landing Pages",
        "solutions.card3.category": "High Conversion",
        "solutions.card3.description": "Pages built to convert visitors into qualified clients.",
        "solutions.card4.title": "n8n Automation",
        "solutions.card4.category": "Total Flow",
        "solutions.card4.description": "Connect all your tools in a single, efficient workflow.",
        "solutions.card5.title": "Google My Business",
        "solutions.card5.category": "Local Presence",
        "solutions.card5.description": "Dominate local searches and attract customers who are ready to buy.",
        "solutions.card6.title": "Sales Dashboards",
        "solutions.card6.category": "Real Data",
        "solutions.card6.description": "Total visibility of your numbers in real-time for data-driven decisions.",

        // About
        "about.badge": "ABOUT ME",
        "about.title": "Transforming complexity into efficiency.",
        "about.p1": "My name is Pedro Miguel and I design the infrastructure that allows companies to scale without increasing workload.",
        "about.p2": "Total focus on n8n, AI and system architecture to return strategic time to decision makers.",
        "about.cta": "Schedule Consultation",

        // FAQ
        "faq.badge": "Answering your questions",
        "faq.title": "Frequently Asked Questions",
        "faq.subtitle": "I create sites, automations and intelligent systems using n8n, AI and integrations for companies that want real scale, not workarounds.",
        "faq.q1": "How does the automation consulting work?",
        "faq.a1": "We analyze your current processes, identify bottlenecks and design a personalized automation architecture using n8n and AI to eliminate manual work.",
        "faq.q2": "What tools do you use?",
        "faq.a2": "Mainly n8n for orchestration, OpenAI/Anthropic for intelligence, and Supabase for data. We integrate with any tool that has an API.",
        "faq.q3": "Do I need a technical team?",
        "faq.a3": "No. We deliver the solution ready and running. If necessary, we offer training or ongoing support for your operational team.",
        "faq.q4": "What is the average implementation time?",
        "faq.a4": "Specific automation projects take 1 to 3 weeks. Complete ecosystems can take 4 to 8 weeks depending on complexity.",
        "faq.q5": "How does post-delivery support work?",
        "faq.a5": "We offer 30 days of warranty and follow-up. Monthly maintenance plans are available for continuous evolution of automations.",

        // Footer
        "footer.role": "Automation & Design",
    },
};

// Contexto
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Provider
export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>("pt");

    const t = (key: string): string => {
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

// Hook
export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
