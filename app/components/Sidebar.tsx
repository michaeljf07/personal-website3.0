"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { GitHubIcon, LinkedInIcon, InstagramIcon } from "./icons";

const navItems = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
];

const sectionMessages: Record<string, string> = {
    about: "A quick peek into my background and what keeps me excited about building things.",
    experience: "A few roles where I've grown as an engineer, each one taught me something new.",
    projects:
        "Projects I've built out of curiosity or to solve a problem. They all taught me something along the way.",
};

export default function Sidebar() {
    const [activeSection, setActiveSection] = useState("about");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const best = entries
                    .filter((e) => e.isIntersecting)
                    .reduce<IntersectionObserverEntry | null>(
                        (a, b) => (!a || b.intersectionRatio > a.intersectionRatio ? b : a),
                        null,
                    );
                if (best) {
                    setActiveSection(best.target.id);
                }
            },
            { rootMargin: "-18% 0px -52% 0px", threshold: [0, 0.1, 0.25, 0.5] },
        );
        for (const { id } of navItems) {
            const el = document.getElementById(id);
            if (el) {
                observer.observe(el);
            }
        }
        return () => observer.disconnect();
    }, []);

    function scrollToSection(id: string) {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    return (
        <aside className="w-full lg:w-[320px] lg:shrink-0 lg:h-screen bg-(--color-bg) border-b-2 lg:border-b-0 lg:border-r-2 border-(--color-border-sidebar) flex flex-col overflow-hidden">
            <div className="flex flex-col items-center pt-8 px-6 pb-2 shrink-0">
                <div className="text-(--color-sparkle) text-sm tracking-widest mb-1 select-none">
                    ✦ &nbsp; ✦ &nbsp; ✦
                </div>
                <h1
                    className="text-center leading-tight select-none text-(--color-text)"
                    style={{
                        fontFamily: "var(--font-caveat), cursive",
                        fontSize: "3.2rem",
                        fontWeight: 700,
                        lineHeight: 1.1,
                    }}>
                    Michael
                    <br />
                    Ferreira
                </h1>
                <div className="text-(--color-sparkle) text-sm tracking-widest mt-1 select-none">
                    ✦ &nbsp; ✦ &nbsp; ✦
                </div>
            </div>

            <div className="flex items-center justify-center gap-1 sm:gap-5 py-3 shrink-0">
                <a
                    href="mailto:michael.ferreira@uwaterloo.ca"
                    aria-label="Email"
                    className="inline-flex h-11 w-11 sm:h-auto sm:w-auto items-center justify-center touch-manipulation text-(--color-link) hover:text-(--color-hover-ink) active:opacity-80 transition-colors rounded-lg max-lg:active:bg-(--color-bg-section-card)">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true">
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                </a>
                <a
                    href="https://linkedin.com/in/michael-j-ferreira"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="inline-flex h-11 w-11 sm:h-auto sm:w-auto items-center justify-center touch-manipulation text-(--color-link) hover:text-(--color-hover-ink) active:opacity-80 transition-colors rounded-lg max-lg:active:bg-(--color-bg-section-card)">
                    <LinkedInIcon className="w-5 h-5" />
                </a>
                <a
                    href="https://github.com/michaeljf07"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="inline-flex h-11 w-11 sm:h-auto sm:w-auto items-center justify-center touch-manipulation text-(--color-link) hover:text-(--color-hover-ink) active:opacity-80 transition-colors rounded-lg max-lg:active:bg-(--color-bg-section-card)">
                    <GitHubIcon className="w-5 h-5" />
                </a>
                <a
                    href="https://instagram.com/michael.ferreira07"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="inline-flex h-11 w-11 sm:h-auto sm:w-auto items-center justify-center touch-manipulation text-(--color-link) hover:text-(--color-hover-ink) active:opacity-80 transition-colors rounded-lg max-lg:active:bg-(--color-bg-section-card)">
                    <InstagramIcon className="w-5 h-5" />
                </a>
            </div>

            <nav className="flex flex-col items-center gap-2.5 py-3 shrink-0">
                {navItems.map(({ id, label }) => (
                    <button
                        key={id}
                        type="button"
                        onClick={() => scrollToSection(id)}
                        className={`text-[1.05rem] touch-manipulation transition-all duration-150 px-4 py-2 sm:py-0.5 rounded-full cursor-pointer ${
                            activeSection === id
                                ? "font-bold text-(--color-text) border-2 border-(--color-border-strong)"
                                : "font-normal text-(--color-text-secondary) hover:text-(--color-hover-ink) border-2 border-transparent"
                        }`}>
                        {label}
                    </button>
                ))}
            </nav>

            <div className="mt-auto flex flex-col items-stretch w-full min-h-0">
                <div className="px-6 shrink-0">
                    <div className="speech-bubble text-sm text-(--color-text-speech) text-center">
                        {sectionMessages[activeSection]}
                    </div>
                </div>
                <div className="sidebar-headshot pointer-events-none">
                    <Image
                        src="/headshots/headshot_bg_removed.png"
                        alt="Michael Ferreira"
                        fill
                        className="object-contain object-bottom pointer-events-none select-none"
                        priority
                    />
                </div>
            </div>

            <p className="text-center text-xs text-(--color-footer-muted) px-6 shrink-0">
                Built with ♡ by Michael Ferreira
            </p>
            <p className="text-center text-xs text-(--color-footer-muted) pb-4 px-6 shrink-0">
                Inspired by{" "}
                <a
                    href="https://rubylu.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline touch-manipulation hover:text-(--color-hover-ink) transition-colors">
                    Ruby Lu
                </a>
            </p>
        </aside>
    );
}
