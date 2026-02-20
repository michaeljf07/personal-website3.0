import { experienceData } from "./experienceData";
import Link from "next/link";

type Experience = {
    title: string;
    company: string;
    companyUrl?: string;
    location: string;
    dates: string;
    description: string[];
};

export default function Experience() {
    return (
        <div className="py-6 sm:py-8 md:py-10 lg:py-12 px-8 sm:px-10 md:px-12 lg:px-14">
            {/* Section Header */}
            <div className="mb-12 border-b-4 border-white pb-6">
                <div className="flex items-baseline gap-4 mb-2">
                    <span className="magazine-body text-xs tracking-widest text-white/50 uppercase">
                        Career
                    </span>
                </div>
                <h2 className="magazine-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white">
                    Experience
                </h2>
            </div>

            {/* Experience Content */}
            <div className="space-y-0">
                {experienceData.map((experience: Experience, index) => (
                    <div
                        key={experience.title}
                        className="border border-white/20 border-t-0 first:border-t hover:bg-white/5 transition-all duration-300">
                        <div className="p-6 sm:p-8">
                            <div className="flex items-start gap-6">
                                <div className="shrink-0">
                                    <div className="w-12 h-12 border-2 border-white flex items-center justify-center">
                                        <span className="magazine-body text-lg font-bold text-white">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="magazine-heading text-xl sm:text-2xl md:text-3xl text-white mb-3">
                                        {experience.title}
                                    </h3>
                                    <div className="magazine-body text-sm sm:text-base text-white/60 mb-6 space-y-1">
                                        <div className="flex flex-wrap items-center gap-3">
                                            {experience.companyUrl ? (
                                                <Link
                                                    href={experience.companyUrl}
                                                    className="font-semibold text-white uppercase tracking-wider hover:underline cursor-pointer">
                                                    {experience.company}
                                                </Link>
                                            ) : (
                                                <span className="font-semibold text-white uppercase tracking-wider">
                                                    {experience.company}
                                                </span>
                                            )}
                                            <span className="text-white/30">
                                                |
                                            </span>
                                            <span className="uppercase tracking-wider">
                                                {experience.location}
                                            </span>
                                        </div>
                                        <div className="text-xs uppercase tracking-widest text-white/40">
                                            {experience.dates}
                                        </div>
                                    </div>
                                    <ul className="magazine-body text-sm sm:text-base leading-relaxed space-y-3 text-white/90">
                                        {experience.description.map(
                                            (bullet: string) => (
                                                <li
                                                    key={bullet}
                                                    className="flex items-start gap-3 border-l-2 border-white/20 pl-4">
                                                    <span>{bullet}</span>
                                                </li>
                                            ),
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
