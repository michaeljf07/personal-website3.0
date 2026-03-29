import { experienceData } from "./experienceData";
import { ExternalLinkIcon } from "../icons";
import { scrollbarChromeLgClassName } from "../Scrollbar";
import Image from "next/image";

export default function ExperiencePanel() {
    return (
        <section className="flex min-h-0 flex-col p-5 sm:p-6 lg:flex-1 lg:overflow-hidden">
            <div className="shrink-0 text-xs text-gray-400 uppercase tracking-[0.14em] mb-4">
                Experience
            </div>
            <div
                className={`flex flex-col gap-2 lg:min-h-0 lg:flex-1 lg:overflow-y-auto lg:overscroll-contain ${scrollbarChromeLgClassName}`}>
                {experienceData.map((exp, i) => (
                    <div
                        key={i}
                        className="group flex gap-3.5 px-3 py-3.5 rounded-md hover:bg-white/3 transition-colors duration-150">
                        <div className="shrink-0 w-12 h-12 rounded-md overflow-hidden border border-white/7 bg-white/5 flex items-center justify-center mt-0.5">
                            <Image
                                src={exp.companyLogo}
                                alt={exp.company}
                                width={48}
                                height={48}
                                className="object-contain"
                            />
                        </div>

                        <div className="flex-1 min-w-0">
                            <div className="flex items-baseline justify-between gap-2">
                                <span className="text-md font-medium text-gray-100 leading-snug">
                                    {exp.title}
                                </span>
                                <span className="text-sm text-gray-400 shrink-0 tabular-nums">
                                    {exp.dates}
                                </span>
                            </div>

                            <div className="flex items-center gap-1.5 mt-0.5">
                                {exp.companyUrl ? (
                                    <a
                                        href={exp.companyUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 text-xs text-gray-400 hover:text-gray-300 transition-colors">
                                        {exp.company}
                                        <ExternalLinkIcon className="w-2.5 h-2.5 opacity-60" />
                                    </a>
                                ) : (
                                    <span className="text-xs text-gray-400">{exp.company}</span>
                                )}
                                <span className="text-gray-400 text-xs select-none">·</span>
                                <span className="text-xs text-gray-300">
                                    {exp.location.split(",")[0]}
                                </span>
                            </div>

                            <p className="text-sm text-gray-300 mt-1.5 leading-relaxed">
                                {exp.summary}
                            </p>

                            {exp.technologies.length > 0 && (
                                <div className="flex gap-1 flex-wrap mt-2">
                                    {exp.technologies.slice(0, 5).map((tech) => (
                                        <span
                                            key={tech}
                                            className="text-xs px-1.5 py-0.5 bg-white/5 border border-white/7 text-gray-400 rounded-sm">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
