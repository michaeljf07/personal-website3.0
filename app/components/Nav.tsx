"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

type Section = "about" | "experience" | "projects" | "contact" | "resume";

const SECTIONS: { id: Section; label: string }[] = [
    { id: "projects", label: "projects/" },
    { id: "experience", label: "experience/" },
    { id: "contact", label: "contact/" },
    { id: "resume", label: "resume/" },
];

const MOBILE_SECTIONS: { id: Section; label: string }[] = [
    { id: "about", label: "about/" },
    { id: "projects", label: "projects/" },
    { id: "experience", label: "experience/" },
    { id: "contact", label: "contact/" },
    { id: "resume", label: "resume/" },
];

type NavProps = {
    activeSection: string;
};

const MOBILE_BREAKPOINT = 768;

export default function Nav({ activeSection }: NavProps) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () =>
            setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <nav className="flex flex-wrap items-center justify-center gap-0 py-4 px-4 sm:px-6 md:px-10 bg-black border-t border-white/10">
            {isMobile
                ? MOBILE_SECTIONS.map(({ id, label }) => {
                      const isActive = activeSection === id;
                      const href =
                          id === "resume" ? "/resume.pdf" : `/?section=${id}`;
                      return (
                          <Link
                              key={id}
                              href={href}
                              className={`magazine-body text-xs sm:text-sm font-bold tracking-wider transition-all duration-200 px-4 sm:px-6 py-2 border-r border-white/10 last:border-r-0 ${
                                  isActive
                                      ? "bg-white text-black"
                                      : "text-white/80 hover:text-white hover:bg-white/5"
                              }`}>
                              {label}
                          </Link>
                      );
                  })
                : SECTIONS.map(({ id, label }) => {
                      const isActive = activeSection === id;
                      const href =
                          id === "resume" ? "/resume.pdf" : `/?section=${id}`;
                      return (
                          <Link
                              key={id}
                              href={href}
                              className={`magazine-body text-xs sm:text-sm font-bold tracking-wider transition-all duration-200 px-6 sm:px-8 md:px-10 py-2 border-r border-white/10 last:border-r-0 ${
                                  isActive
                                      ? "bg-white text-black"
                                      : "text-white/80 hover:text-white hover:bg-white/5"
                              }`}>
                              {label}
                          </Link>
                      );
                  })}
        </nav>
    );
}
