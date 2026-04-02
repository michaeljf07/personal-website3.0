export default function SectionHeading({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex items-center gap-2 sm:gap-4 mb-6 sm:mb-8 min-w-0">
            <h2
                className="min-w-0 text-(--color-text) leading-none"
                style={{
                    fontFamily: "var(--font-permanent-marker), cursive",
                    fontSize: "clamp(1.7rem, 6.5vw, 3rem)",
                    lineHeight: 1.1,
                }}>
                {children}
            </h2>
            <div className="flex-1 min-w-6 h-px bg-(--color-border-dashed)" />
            <span className="text-(--color-accent-line) text-lg sm:text-xl shrink-0 select-none">
                ✦
            </span>
        </div>
    );
}
