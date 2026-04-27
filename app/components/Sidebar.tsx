"use client";

import { useEffect, useRef, useState } from "react";
import { GitHubIcon, LinkedInIcon, InstagramIcon } from "./icons";
import Image from "next/image";

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
    const pendingSectionRef = useRef<string | null>(null);
    const pendingTimeoutRef = useRef<number | null>(null);

    useEffect(() => {
        const scrollContainer = document.getElementById("main-scroll");
        const sections = navItems
            .map(({ id }) => document.getElementById(id))
            .filter((section): section is HTMLElement => section !== null);
        const scrollRoot =
            scrollContainer && getComputedStyle(scrollContainer).overflowY !== "visible"
                ? scrollContainer
                : window;

        function getViewportHeight() {
            return scrollRoot === window ? window.innerHeight : scrollContainer!.clientHeight;
        }

        function isNearBottom() {
            if (scrollRoot === window) {
                const doc = document.documentElement;
                return window.innerHeight + window.scrollY >= doc.scrollHeight - 4;
            }

            return (
                scrollContainer!.scrollTop + scrollContainer!.clientHeight >=
                scrollContainer!.scrollHeight - 4
            );
        }

        function syncActiveSection() {
            if (sections.length === 0) {
                return;
            }

            const activationLine = getViewportHeight() * 0.2;
            let nextActive = sections[0].id;

            if (isNearBottom()) {
                nextActive = sections[sections.length - 1].id;
            } else {
                for (const section of sections) {
                    if (section.getBoundingClientRect().top <= activationLine) {
                        nextActive = section.id;
                    } else {
                        break;
                    }
                }
            }

            const pendingId = pendingSectionRef.current;
            if (pendingId) {
                const pendingSection = document.getElementById(pendingId);
                const pendingTop = pendingSection?.getBoundingClientRect().top;
                const targetReached = pendingTop !== undefined && Math.abs(pendingTop) <= 12;

                if (!targetReached) {
                    setActiveSection(pendingId);
                    return;
                }

                pendingSectionRef.current = null;
                if (pendingTimeoutRef.current !== null) {
                    window.clearTimeout(pendingTimeoutRef.current);
                    pendingTimeoutRef.current = null;
                }
            }

            setActiveSection((current) => (current === nextActive ? current : nextActive));
        }

        function onScroll() {
            syncActiveSection();
        }

        syncActiveSection();
        scrollRoot.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", syncActiveSection);

        return () => {
            scrollRoot.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", syncActiveSection);
            if (pendingTimeoutRef.current !== null) {
                window.clearTimeout(pendingTimeoutRef.current);
            }
        };
    }, []);

    function scrollToSection(id: string) {
        pendingSectionRef.current = id;
        setActiveSection(id);

        if (pendingTimeoutRef.current !== null) {
            window.clearTimeout(pendingTimeoutRef.current);
        }

        pendingTimeoutRef.current = window.setTimeout(() => {
            pendingSectionRef.current = null;
            pendingTimeoutRef.current = null;
        }, 1500);

        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    function navButtons(buttonClassName: (isActive: boolean) => string) {
        return (
            <nav className="flex flex-col items-center gap-2 md:gap-3 shrink-0">
                {navItems.map(({ id, label }) => (
                    <button
                        key={id}
                        type="button"
                        onClick={() => scrollToSection(id)}
                        className={buttonClassName(activeSection === id)}>
                        {label}
                    </button>
                ))}
            </nav>
        );
    }

    return (
        <aside className="w-full lg:w-[320px] lg:shrink-0 lg:h-screen bg-(--color-bg) border-b-2 lg:border-b-0 lg:border-r-2 border-(--color-border-sidebar) flex flex-col overflow-hidden">
            <div className="flex flex-col items-center text-center px-6 py-8 lg:py-10 h-full">
                <Image src="/logos/uw_logo_vertical.png" alt="UWaterloo" width={250} height={250} />
                <h1
                    className="text-(--color-text) leading-tight"
                    style={{
                        fontFamily: "var(--font-caveat), cursive",
                        fontSize: "3rem",
                        fontWeight: 700,
                        lineHeight: 1.05,
                    }}>
                    Michael
                    <br />
                    Ferreira
                </h1>
                <p className="mt-3 text-sm text-(--color-text-secondary) max-w-[18rem] leading-6">
                    {sectionMessages[activeSection]}
                </p>

                <div className="mt-8 w-full">
                    {navButtons((isActive) =>
                        [
                            "w-full text-[1rem] py-2.5 transition-colors border-b border-(--color-border-sidebar) cursor-pointer",
                            isActive
                                ? "text-(--color-text) font-semibold"
                                : "text-(--color-text-secondary) hover:text-(--color-hover-ink)",
                        ].join(" "),
                    )}
                </div>

                <div className="mt-auto flex flex-col gap-6 pt-8 w-full">
                    <div className="flex items-center justify-center gap-1 sm:gap-5 shrink-0">
                        {/* Social Links */}
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

                    {/* Footer */}
                    <footer>
                        <p className="text-center text-xs text-(--color-footer-muted) px-6 shrink-0">
                            Built with ♡ by Michael Ferreira
                        </p>
                        <p className="text-center text-xs text-(--color-footer-muted) px-6 shrink-0">
                            Inspired by{" "}
                            <a
                                href="https://rubylu.dev"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline touch-manipulation hover:text-(--color-hover-ink) transition-colors">
                                Ruby Lu
                            </a>
                        </p>
                        <div className="flex items-center justify-center gap-2 py-8">
                            <a
                                href="https://cs.uwatering.com/#michaelferreira.me?nav=prev"
                                className="opacity-50">
                                ←
                            </a>
                            <a href="https://cs.uwatering.com/#michaelferreira.me" target="_blank">
                                <Image
                                    src="https://cs.uwatering.com/icon.black.svg"
                                    alt="CS Webring"
                                    width={24}
                                    height={24}
                                    className="opacity-50"
                                />
                            </a>
                            <a
                                href="https://cs.uwatering.com/#michaelferreira.me?nav=next"
                                className="opacity-50">
                                →
                            </a>
                        </div>
                    </footer>
                </div>
            </div>
        </aside>
    );
}
