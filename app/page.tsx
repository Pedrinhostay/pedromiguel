"use client";

import { Hero } from "@/components/sections/Hero";
import { BrandCarousel } from "@/components/sections/BrandCarousel";
import { SocialProof } from "@/components/sections/SocialProof";
import { Comparison } from "@/components/sections/Comparison";
import { Solutions } from "@/components/sections/Solutions";
import { Integrations } from "@/components/sections/Integrations";
import { Method } from "@/components/sections/Method";
import { About } from "@/components/sections/About";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col bg-[#050505] selection:bg-emerald-500/30 selection:text-emerald-200">
            {/* 1. Hero */}
            <Hero />

            {/* 2. Authority (Brands) */}
            <BrandCarousel />

            {/* 2.5 Social Proof (Testimonials / Results) */}
            <SocialProof />

            {/* 3 & 4. Comparison (Problem vs Solution) */}
            <Comparison />

            {/* 5. Implementation (Cards) */}
            <Solutions />

            {/* 6. Integrations */}
            <Integrations />

            {/* 7. Method */}
            <Method />

            {/* 9. About */}
            <About />

            {/* 10. FAQ */}
            <FAQ />

            {/* 11. Final CTA */}
            <FinalCTA />
        </main>
    );
}
