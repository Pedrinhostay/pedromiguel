"use client";

import { ReactLenis } from "@studio-freight/react-lenis";

export function ScrollProvider({ children }: { children: React.ReactNode }) {
    return (
        // @ts-expect-error - React version mismatch with Lenis types
        <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>{children}</ReactLenis>
    );
}
