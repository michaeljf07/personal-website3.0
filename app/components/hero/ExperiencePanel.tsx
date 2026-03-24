import { experienceData } from "./experienceData";
import { ExternalLinkIcon } from "../icons";
import Image from "next/image";

export default function ExperiencePanel() {
    return (
        <section className="flex flex-col p-4 sm:p-5 h-4/5">
            <div className="text-xs uppercase tracking-[0.15em] text-white/65 mb-3">Experience</div>
            <div className="flex flex-col gap-2.5 lg:flex-1 lg:min-h-0">
                {experienceData.map((exp, i) => (
                    <div
                        key={i}
                        className="p-4 rounded-xl border border-white/7 bg-white/2.5 hover:bg-white/5 hover:border-white/14 transition-all duration-300 flex flex-col justify-between gap-1.5 lg:flex-1 min-h-30">
                        <div className="flex gap-4">
                            <div className="shrink-0 w-12 h-12 rounded-lg overflow-hidden border border-white/7 bg-white/5 flex items-center justify-center">
                                <Image
                                    src={exp.companyLogo}
                                    alt={exp.company}
                                    width={50}
                                    height={50}
                                    className="object-contain"
                                />
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-start justify-between gap-2">
                                    <div className="text-sm font-semibold text-white/95 leading-tight tracking-tight">
                                        {exp.title}
                                    </div>
                                    <div className="text-xs text-white/50 tracking-widest uppercase shrink-0 mt-0.5">
                                        {exp.dates}
                                    </div>
                                </div>
                                <div className="flex items-center gap-1.5 mt-0.5">
                                    {exp.companyUrl ? (
                                        <a
                                            href={exp.companyUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1 text-xs text-white/60 hover:text-white/90 transition-colors underline decoration-white/30 underline-offset-2 hover:decoration-white/60">
                                            {exp.company}
                                            <ExternalLinkIcon className="w-3 h-3 shrink-0 opacity-70" />
                                        </a>
                                    ) : (
                                        <span className="text-xs text-white/60">{exp.company}</span>
                                    )}
                                    <span className="text-white/30 text-xs">·</span>
                                    <span className="text-xs text-white/50">
                                        {exp.location.split(",")[0]}
                                    </span>
                                </div>
                                <p className="text-sm text-gray-300 mt-1.5 leading-relaxed">
                                    {exp.summary}
                                </p>
                            </div>
                        </div>
                        {exp.technologies.length > 0 &&
                            (() => {
                                return (
                                    <div className="flex gap-1.5 flex-wrap">
                                        {exp.technologies.slice(0, 5).map((tech) => (
                                            <span
                                                key={tech}
                                                className="text-[10px] px-1.5 py-0.5 border border-white/8 text-white/50 rounded-sm tracking-wide">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                );
                            })()}
                    </div>
                ))}
            </div>
        </section>
    );
}
