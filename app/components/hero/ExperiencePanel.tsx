import { experienceData } from "./experienceData";
import { ExternalLinkIcon } from "../icons";
import Image from "next/image";

export default function ExperiencePanel() {
    return (
        <div className="flex flex-col gap-3 max-w-3xl">
            {experienceData.map((exp, i) => (
                <div
                    key={i}
                    className="flex gap-4 p-4 rounded-2xl bg-(--color-bg-section-card) border border-(--color-border-card) backdrop-blur-sm">
                    <div className="shrink-0 w-14 h-14 rounded-xl overflow-hidden border border-(--color-border-muted) bg-white flex items-center justify-center mt-0.5">
                        <Image
                            src={exp.companyLogo}
                            alt={exp.company}
                            width={56}
                            height={56}
                            className="object-cover object-center"
                        />
                    </div>

                    <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                            <span className="font-semibold text-(--color-text) text-base leading-snug">
                                {exp.title}
                            </span>
                            <span className="text-sm text-(--color-text-dates) tabular-nums">
                                {exp.dates}
                            </span>
                        </div>

                        <div className="flex items-center gap-1.5 mt-0.5">
                            {exp.companyUrl ? (
                                <a
                                    href={exp.companyUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 text-sm font-medium text-(--color-link-accent) hover:text-(--color-hover-ink) transition-colors">
                                    {exp.company}
                                    <ExternalLinkIcon className="w-3 h-3 opacity-70" />
                                </a>
                            ) : (
                                <span className="text-sm font-medium text-(--color-link-accent)">
                                    {exp.company}
                                </span>
                            )}
                            <span className="text-(--color-accent-line) text-sm select-none">
                                ·
                            </span>
                            <span className="text-sm text-(--color-text-secondary)">
                                {exp.location.split(",")[0]}
                            </span>
                        </div>

                        <p className="text-sm text-(--color-text-body) mt-1.5 leading-relaxed">
                            {exp.summary}
                        </p>

                        {exp.technologies.length > 0 && (
                            <div className="flex gap-1.5 flex-wrap mt-2.5">
                                {exp.technologies.slice(0, 5).map((tech) => (
                                    <span
                                        key={tech}
                                        className="text-xs px-2.5 py-0.5 bg-(--color-bg-tag) text-(--color-link-accent) rounded-full border border-(--color-border-card)">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}
