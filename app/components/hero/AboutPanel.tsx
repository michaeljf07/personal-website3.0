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
        <section className="flex min-h-0 flex-col gap-5 p-5 sm:p-6 lg:h-full lg:overflow-y-auto">
            <div className="flex flex-col gap-3 items-center">
                <div className="relative w-72 h-72 lg:w-36 lg:h-36 rounded-lg overflow-hidden border border-white/8 shrink-0">
                    <Image
                        src="/headshots/headshot2.jpg"
                        alt="Michael Ferreira"
                        fill
                        className="object-cover"
                    />
                </div>
                <div>
                    <h1 className="text-xl font-semibold text-gray-100 tracking-tight leading-tight text-center">
                        Michael Ferreira
                    </h1>
                    <p className="text-sm text-gray-400 mt-0.5 text-center">Software Engineer</p>
                </div>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed border-l border-gray-400 pl-3">
                I'm a double degree student passionate about building things at the intersection of
                technology and business.
            </p>

            <div className="flex flex-col gap-0">
                <div className="text-xs text-gray-400 uppercase tracking-[0.14em] mb-2">
                    Properties
                </div>
                <div className="flex flex-col">
                    <div className="flex items-center gap-3 py-1.5 border-b border-gray-400/20">
                        <span className="text-xs text-gray-300 w-20 shrink-0">Degrees</span>
                        <span className="text-xs text-gray-300">CS + BBA</span>
                    </div>
                    <div className="flex items-center gap-3 py-1.5 border-b border-gray-400/20">
                        <span className="text-xs text-gray-300 w-20 shrink-0">Location</span>
                        <span className="text-xs text-gray-300">Waterloo, ON</span>
                    </div>
                    <div className="flex items-center gap-3 py-1.5">
                        <span className="text-xs text-gray-300 w-20 shrink-0">Status</span>
                        <span className="inline-flex items-center gap-1.5 text-xs text-gray-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/70 shrink-0" />
                            Open to work
                        </span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <div className="text-xs text-gray-400 uppercase tracking-[0.14em] mb-1">
                    Education
                </div>
                {education.map(({ logo, alt, degree, school }) => (
                    <div
                        key={school}
                        className="flex items-center gap-3 py-1.5 px-3 rounded-md border border-white/6 bg-white/2 hover:bg-white/4 transition-colors">
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
                            <div className="text-sm font-medium text-gray-300">{degree}</div>
                            <div className="text-xs text-gray-300">{school}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
