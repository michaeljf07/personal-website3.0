import Image from "next/image";

const education = [
    {
        logo: "/logos/uw_logo.png",
        alt: "UWaterloo",
        degree: "Computer Science",
        school: "University of Waterloo",
    },
    {
        logo: "/logos/wlu_logo.png",
        alt: "WLU",
        degree: "Business Administration",
        school: "Wilfrid Laurier University",
    },
];

export default function AboutPanel() {
    return (
        <div className="space-y-6 w-full">
            <div className="space-y-4 max-w-3/4">
                <p className="text-base text-(--color-text-body) leading-relaxed">
                    I study computer science at the{" "}
                    <strong className="text-(--color-text)">University of Waterloo</strong>{" "}
                    alongside a business degree at{" "}
                    <strong className="text-(--color-text)">Wilfrid Laurier University</strong>.
                    I&apos;m currenly working as a software engineer at Cache, building web and iOS
                    apps that connects influencers directly with their followers through fashion
                    resale.
                </p>
                <p className="text-base text-(--color-text-body) leading-relaxed">
                    When I&apos;m not in the terminal, you&apos;ll probably find me at the gym,
                    reading a book, or working on a side project! I&apos;m always looking for
                    interesting problems to fix and people to collaborate with.
                </p>
            </div>

            <div className="flex flex-wrap gap-2.5 sm:gap-3 justify-center sm:justify-start">
                <div className="flex items-center gap-2 px-3 py-2 sm:py-1.5 rounded-full bg-(--color-bg-section-card) border border-(--color-border-card) text-sm text-(--color-text-muted)">
                    <span className="text-base">📍</span>
                    <span>Waterloo, ON</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 sm:py-1.5 rounded-full bg-(--color-bg-section-card) border border-(--color-border-card) text-sm text-(--color-text-muted)">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 animate-pulse" />
                    <span>Open to Collaborate</span>
                </div>
                <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 sm:px-3 sm:py-1.5 rounded-full touch-manipulation bg-(--color-btn-primary-bg) text-white text-sm hover:bg-(--color-btn-primary-hover) active:opacity-90 transition-colors">
                    <span>Resume</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" x2="21" y1="14" y2="3" />
                    </svg>
                </a>
            </div>

            <div>
                <p
                    className="text-xs uppercase tracking-widest text-(--color-accent-line) mb-3"
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                    Education
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                    {education.map(({ logo, alt, degree, school }) => (
                        <div
                            key={school}
                            className="flex items-center gap-3 px-3.5 py-3 sm:px-4 rounded-2xl bg-(--color-bg-section-card) border border-(--color-border-card) backdrop-blur-sm max-lg:backdrop-blur-none">
                            <div className="relative w-10 h-10 shrink-0">
                                <Image
                                    src={logo}
                                    alt={alt}
                                    width={40}
                                    height={40}
                                    className="object-contain"
                                />
                            </div>
                            <div>
                                <div className="text-sm font-semibold text-(--color-text)">
                                    {degree}
                                </div>
                                <div className="text-xs text-(--color-text-secondary)">
                                    {school}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
