import Nav from "./Nav";

type HeaderProps = {
    activeSection: string;
};

export default function Header({ activeSection }: HeaderProps) {
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
        <header className="w-full bg-black border-b border-white/20">
            <div className="py-2 px-4 sm:py-4 sm:px-6 md:py-6 md:px-8">
                <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="magazine-body text-[9px] sm:text-[10px] tracking-widest text-white/50 uppercase">
                        Issue {new Date().getMonth() + 1}
                    </span>
                    <span className="magazine-body text-[9px] sm:text-[10px] tracking-widest text-white/50 uppercase">
                        {dateString}
                    </span>
                </div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl text-center magazine-title my-2 sm:my-3 text-white">
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
