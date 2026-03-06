"use client";

import Link from "next/link";

const navLinks = [
    { label: "about", href: "#about" },
    { label: "experience", href: "#experience" },
    { label: "projects", href: "#projects" },
    { label: "writing", href: "#writing" },
    { label: "contact", href: "#contact" },
];

export default function Nav() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#0f0f0f]/90 backdrop-blur-sm border-b border-white/6">
            <div className="max-w-2xl mx-auto px-6 h-14 flex items-center justify-between">
                <Link
                    href="/"
                    className="text-sm font-medium text-gray-200 tracking-tight">
                    &lt;Michael Ferreira /&gt;
                </Link>
                <nav className="hidden sm:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm text-gray-500 hover:text-white transition-colors duration-150">
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-500 hover:text-white transition-colors duration-150">
                        resume ↗
                    </a>
                </nav>
            </div>
        </header>
    );
}
