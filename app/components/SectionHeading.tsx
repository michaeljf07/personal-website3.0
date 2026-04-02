export default function SectionHeading({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex items-center gap-4 mb-8">
            <h2
                className="shrink-0 text-(--color-text)"
                style={{
                    fontFamily: "var(--font-permanent-marker), cursive",
                    fontSize: "clamp(2rem, 5vw, 3rem)",
                    lineHeight: 1.1,
                }}>
                {children}
            </h2>
            <div className="flex-1 h-px bg-(--color-border-dashed)" />
            <span className="text-(--color-accent-line) text-xl shrink-0 select-none">✦</span>
        </div>
    );
}
