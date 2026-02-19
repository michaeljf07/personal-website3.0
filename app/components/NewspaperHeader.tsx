import Nav from "./Nav";

type NewspaperHeaderProps = {
    activeSection: string;
};

export default function NewspaperHeader({
    activeSection,
}: NewspaperHeaderProps) {
    const now = new Date();
    const dateString = now
        .toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        })
        .toUpperCase();

    const timeString = now.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
    });

    return (
        <header className="w-full bg-black border-b border-white/20 sticky top-0 z-50">
            <div className="py-6 px-4 sm:py-8 sm:px-6 md:py-10 md:px-12">
                <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="magazine-body text-[9px] sm:text-[10px] tracking-widest text-white/50 uppercase">
                        Issue {new Date().getMonth() + 1}
                    </span>
                    <span className="magazine-body text-[9px] sm:text-[10px] tracking-widest text-white/50 uppercase">
                        {dateString}
                    </span>
                </div>
                <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-center magazine-title my-2 sm:my-3 text-white">
                    Michael Ferreira
                </h1>
                <div className="flex items-center justify-center gap-2 mt-4">
                    <span className="magazine-body text-[10px] sm:text-xs tracking-widest text-white/70 italic">
                        {timeString}
                    </span>
                </div>
            </div>

            <Nav activeSection={activeSection} />
        </header>
    );
}
