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

        // 1. Hero
        "hero.title": "Transforme Processos Manuais em Sistemas Inteligentes com IA",
        "hero.subtitle": "Criamos sistemas inteligentes que substituem tarefas manuais, conectam ferramentas e transformam sua operação em uma máquina previsível de crescimento.",
        "hero.benefit1": "Menos tarefas operacionais",
        "hero.benefit2": "Processos organizados e automatizados",
        "hero.benefit3": "Mais previsibilidade de crescimento",
        "hero.cta": "Agendar diagnóstico de automação",
        "hero.ctaSubtext": "Diagnóstico estratégico • Sem compromisso • 30 minutos",

        // 2. Authority (Brands)
        "brands.badge": "AUTORIDADE TECNOLÓGICA",
        "brands.title": "Tecnologia usada para construir sistemas escaláveis",
        "brands.text": "Utilizamos ferramentas líderes em automação, inteligência artificial e integração de sistemas.",
        "brands.subtitle": "Dominamos as ferramentas que movem o mercado para garantir performance e escala real.",

        "problem.badge": "O PROBLEMA",
        "problem.title": "A maioria das empresas cresce… mas continua operando de forma manual",
        "problem.text": "Em muitas empresas, o crescimento vem acompanhado de caos operacional. Processos dependem de pessoas, tarefas são repetitivas e as ferramentas não conversam entre si.",
        "problem.item1": "Equipes sobrecarregadas",
        "problem.item2": "Perda de eficiência",
        "problem.item3": "Falta de previsibilidade de crescimento",
        "problem.footer": "Enquanto isso, empresas que adotam automação e IA aplicada à operação conseguem crescer com muito mais organização e eficiência.",

        // Comparison
        "comparison.badge": "COMPARAÇÃO",
        "comparison.title": "O impacto real da transformação",
        "comparison.before.title": "Operação Manual",
        "comparison.after.title": "Operação Inteligente",
        "comparison.before.item1": "Processos manuais e lentos",
        "comparison.after.item1": "Automação total de fluxos",
        "comparison.before.item2": "Operação desorganizada",
        "comparison.after.item2": "Sistemas integrados e fluídos",
        "comparison.before.item3": "Falta de previsibilidade",
        "comparison.after.item3": "Crescimento previsível e seguro",
        "comparison.before.item4": "Equipe sobrecarregada",
        "comparison.after.item4": "Foco total em estratégia e escala",

        // 4. The Solution
        "solution.badge": "A SOLUÇÃO",
        "solution.title": "Construímos sistemas inteligentes para sua operação",
        "solution.text": "Criamos um ecossistema digital que conecta processos, ferramentas e dados. Tudo funcionando de forma integrada. Isso permite que tarefas operacionais sejam executadas automaticamente.",
        "solution.item1": "Mais eficiência",
        "solution.item2": "Menos trabalho manual",
        "solution.item3": "Mais previsibilidade",

        // 5. Features (What we implement)
        "features.badge": "O QUE IMPLEMENTAMOS",
        "features.title": "Estrutura de automação que implementamos no seu negócio",
        "features.card1.title": "Agentes de IA",
        "features.card1.desc": "Assistentes inteligentes que atendem, qualificam leads e executam tarefas automaticamente.",
        "features.card2.title": "Automação de processos",
        "features.card2.desc": "Fluxos que eliminam tarefas repetitivas e conectam ferramentas.",
        "features.card3.title": "CRM Inteligente",
        "features.card3.desc": "Gestão automatizada de leads e clientes.",
        "features.card4.title": "Dashboards de performance",
        "features.card4.desc": "Visualização clara para tomada de decisão baseada em dados.",

        // 6. Integration
        "integrations.badge": "INTEGRAÇÃO DE SISTEMAS",
        "integrations.title": "Integramos todas as ferramentas da sua operação",
        "integrations.text": "Conectamos diferentes plataformas para que seus processos funcionem de forma integrada. Isso elimina retrabalho e centraliza a operação.",
        "integrations.item1": "CRM & WhatsApp",
        "integrations.item2": "Plataformas de Pagamento",
        "integrations.item3": "Ferramentas de Marketing",
        "integrations.item4": "Bancos de Dados & APIs",

        // 7. Method
        "method.badge": "MÉTODO DE IMPLEMENTAÇÃO",
        "method.title": "Como estruturamos seu sistema de automação",
        "method.step1.title": "Diagnóstico estratégico",
        "method.step1.desc": "Analisamos processos e identificamos oportunidades de automação.",
        "method.step2.title": "Arquitetura do sistema",
        "method.step2.desc": "Desenhamos a estrutura de automação e integração.",
        "method.step3.title": "Implementação técnica",
        "method.step3.desc": "Criamos agentes, fluxos e integrações.",
        "method.step4.title": "Otimização contínua",
        "method.step4.desc": "Ajustes para melhorar performance e eficiência.",

        // 8. Impact
        "impact.badge": "RESULTADOS ESPERADOS",
        "impact.title": "Impactos que a automação pode gerar",
        "impact.item1": "Redução drástica de tarefas operacionais",
        "impact.item2": "Resposta automática e instantânea para leads",
        "impact.item3": "Integração fluida entre todas as ferramentas",
        "impact.item4": "Aumento real da eficiência da equipe",

        // 9. About
        "about.badge": "SOBRE PEDRO",
        "about.title": "Quem está por trás dos sistemas",
        "about.text": "Pedro Miguel trabalha com automação e inteligência artificial aplicada a negócios. Seu foco é ajudar empresas a transformar processos manuais em sistemas inteligentes que trazem mais eficiência e previsibilidade. Através da integração de ferramentas e automação de processos, cria estruturas que permitem às empresas crescer de forma organizada e escalável.",
        "about.cta": "Agendar Consultoria",
        "about.pyramid.level1": "DEUS",
        "about.pyramid.level2": "FAMÍLIA",
        "about.pyramid.level3": "TRABALHO",
        "about.pyramid.level4": "EXERCÍCIOS",

        // 10. FAQ
        "faq.badge": "FAQ",
        "faq.title": "Dúvidas frequentes",
        "faq.q1": "Quanto tempo leva a implementação?",
        "faq.a1": "Depende da complexidade do projeto, mas normalmente entre 2 e 6 semanas.",
        "faq.q2": "Preciso ter equipe técnica?",
        "faq.a2": "Não. Toda a estrutura é implementada e configurada para sua equipe utilizar.",
        "faq.q3": "Funciona para qualquer empresa?",
        "faq.a3": "A solução é mais indicada para empresas que já possuem operação ativa e querem ganhar eficiência e organização.",
        "faq.q4": "Quais ferramentas são usadas?",
        "faq.a4": "Utilizamos plataformas modernas de automação e inteligência artificial, escolhidas de acordo com as necessidades do projeto.",
        "faq.q5": "Existe suporte após a implementação?",
        "faq.a5": "Sim. Após a entrega, acompanhamos o funcionamento e realizamos ajustes quando necessário.",

        // 11. Final CTA
        "ctaFinal.title": "Descubra como a automação pode transformar sua operação",
        "ctaFinal.text": "Agende um diagnóstico estratégico para entender:",
        "ctaFinal.item1": "Quais processos podem ser automatizados",
        "ctaFinal.item2": "Onde a IA pode gerar mais eficiência",
        "ctaFinal.item3": "Como estruturar uma operação mais previsível",
        "ctaFinal.button": "Agendar diagnóstico de automação",
        "ctaFinal.bonusTitle": "Processos que normalmente automatizamos",
        "ctaFinal.bonus1": "Qualificação de leads",
        "ctaFinal.bonus2": "Follow-ups automáticos",
        "ctaFinal.bonus3": "Atendimento inicial",
        "ctaFinal.bonus4": "Geração de relatórios",
        "ctaFinal.bonus5": "Integração entre ferramentas",
        "ctaFinal.bonus6": "Gestão de tarefas",

        // Footer
        "footer.role": "Automação & Design",
    },
    en: {
        // Header
        "header.role": "Automation & Design",
        "header.cta": "Schedule Consultation",

        // 1. Hero
        "hero.title": "Transform Manual Processes into Intelligent Systems with AI",
        "hero.subtitle": "We create intelligent systems that replace manual tasks, connect tools, and transform your operation into a predictable growth machine.",
        "hero.benefit1": "Fewer operational tasks",
        "hero.benefit2": "Organized and automated processes",
        "hero.benefit3": "Better growth predictability",
        "hero.cta": "Schedule automation diagnostic",
        "hero.ctaSubtext": "Strategic diagnostic • No commitment • 30 minutes",

        // 2. Authority (Brands)
        "brands.badge": "TECHNOLOGICAL AUTHORITY",
        "brands.title": "Technology used to build scalable systems",
        "brands.text": "We use leading tools in automation, artificial intelligence, and system integration.",
        "brands.subtitle": "We master the tools that move the market to ensure performance and real scale.",

        "problem.badge": "THE PROBLEM",
        "problem.title": "Most companies grow... but continue to operate manually",
        "problem.text": "In many companies, growth is accompanied by operational chaos. Processes depend on people, tasks are repetitive, and tools don't talk to each other.",
        "problem.item1": "Overloaded teams",
        "problem.item2": "Loss of efficiency",
        "problem.item3": "Lack of growth predictability",
        "problem.footer": "Meanwhile, companies that adopt automation and AI applied to operation manage to grow with much more organization and efficiency.",

        // Comparison
        "comparison.badge": "COMPARISON",
        "comparison.title": "The real impact of transformation",
        "comparison.before.title": "Manual Operation",
        "comparison.after.title": "Intelligent Operation",
        "comparison.before.item1": "Manual and slow processes",
        "comparison.after.item1": "Full flow automation",
        "comparison.before.item2": "Disorganized operation",
        "comparison.after.item2": "Integrated and fluid systems",
        "comparison.before.item3": "Lack of predictability",
        "comparison.after.item3": "Predictable and safe growth",
        "comparison.before.item4": "Overloaded team",
        "comparison.after.item4": "Focus on strategy and scale",

        // 4. The Solution
        "solution.badge": "THE SOLUTION",
        "solution.title": "We build intelligent systems for your operation",
        "solution.text": "We create a digital ecosystem that connects processes, tools, and data. Everything working in an integrated way. This allows operational tasks to be executed automatically.",
        "solution.item1": "More efficiency",
        "solution.item2": "Less manual work",
        "solution.item3": "More predictability",

        // 5. Features (What we implement)
        "features.badge": "WHAT WE IMPLEMENT",
        "features.title": "Automation structure we implement in your business",
        "features.card1.title": "AI Agents",
        "features.card1.desc": "Intelligent assistants that serve, qualify leads, and execute tasks automatically.",
        "features.card2.title": "Process Automation",
        "features.card2.desc": "Flows that eliminate repetitive tasks and connect tools.",
        "features.card3.title": "Intelligent CRM",
        "features.card3.desc": "Automated management of leads and customers.",
        "features.card4.title": "Performance Dashboards",
        "features.card4.desc": "Clear visualization for data-driven decision making.",

        // 6. Integration
        "integrations.badge": "SYSTEM INTEGRATION",
        "integrations.title": "We integrate all your operation's tools",
        "integrations.text": "We connect different platforms so your processes work integratedly. This eliminates rework and centralizes the operation.",
        "integrations.item1": "CRM & WhatsApp",
        "integrations.item2": "Payment Platforms",
        "integrations.item3": "Marketing Tools",
        "integrations.item4": "Databases & APIs",

        // 7. Method
        "method.badge": "IMPLEMENTATION METHOD",
        "method.title": "How we structure your automation system",
        "method.step1.title": "Strategic diagnostic",
        "method.step1.desc": "We analyze processes and identify automation opportunities.",
        "method.step2.title": "System architecture",
        "method.step2.desc": "We design the automation and integration structure.",
        "method.step3.title": "Technical implementation",
        "method.step3.desc": "We create agents, flows, and integrations.",
        "method.step4.title": "Continuous optimization",
        "method.step4.desc": "Adjustments to improve performance and efficiency.",

        // 8. Impact
        "impact.badge": "EXPECTED RESULTS",
        "impact.title": "Impacts that automation can generate",
        "impact.item1": "Drastic reduction of operational tasks",
        "impact.item2": "Instant and automatic response to leads",
        "impact.item3": "Fluid integration between all tools",
        "impact.item4": "Real increase in team efficiency",

        // 9. About
        "about.badge": "ABOUT PEDRO",
        "about.title": "Who is behind the systems",
        "about.text": "Pedro Miguel works with automation and artificial intelligence applied to businesses. His focus is on helping companies transform manual processes into intelligent systems that bring more efficiency and predictability. Through tool integration and process automation, he creates structures that allow companies to grow in an organized and scalable way.",
        "about.cta": "Schedule Consultation",
        "about.pyramid.level1": "GOD",
        "about.pyramid.level2": "FAMILY",
        "about.pyramid.level3": "WORK",
        "about.pyramid.level4": "EXERCISES",

        // 10. FAQ
        "faq.badge": "FAQ",
        "faq.title": "Frequently asked questions",
        "faq.q1": "How long does implementation take?",
        "faq.a1": "It depends on the project's complexity, but usually between 2 and 6 weeks.",
        "faq.q2": "Do I need a technical team?",
        "faq.a2": "No. The entire structure is implemented and configured for your team to use.",
        "faq.q3": "Does it work for any company?",
        "faq.a3": "The solution is best suited for companies that already have an active operation and want to gain efficiency and organization.",
        "faq.q4": "Which tools are used?",
        "faq.a4": "We use modern automation and artificial intelligence platforms, chosen according to the project's needs.",
        "faq.q5": "Is there post-implementation support?",
        "faq.a5": "Yes. After delivery, we monitor performance and make adjustments when necessary.",

        // 11. Final CTA
        "ctaFinal.title": "Discover how automation can transform your operation",
        "ctaFinal.text": "Schedule a strategic diagnostic to understand:",
        "ctaFinal.item1": "Which processes can be automated",
        "ctaFinal.item2": "Where AI can generate more efficiency",
        "ctaFinal.item3": "How to structure a more predictable operation",
        "ctaFinal.button": "Schedule automation diagnostic",
        "ctaFinal.bonusTitle": "Processes we normally automate",
        "ctaFinal.bonus1": "Lead qualification",
        "ctaFinal.bonus2": "Automated follow-ups",
        "ctaFinal.bonus3": "Initial customer service",
        "ctaFinal.bonus4": "Report generation",
        "ctaFinal.bonus5": "Tool integration",
        "ctaFinal.bonus6": "Task management",

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
