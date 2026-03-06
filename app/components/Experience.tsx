import { experienceData } from "./experienceData";

export default function Experience() {
    return (
        <section id="experience">
            <h2 className="text-xs font-medium uppercase tracking-widest text-gray-300 mb-10">
                Experience
            </h2>
            <div className="space-y-10">
                {experienceData.map((exp) => (
                    <div key={exp.title}>
                        <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-3 mb-3">
                            <span className="text-md font-medium text-white">
                                {exp.title}
                            </span>
                            <span className="text-[#444] hidden sm:block">
                                ·
                            </span>
                            {exp.companyUrl ? (
                                <a
                                    href={exp.companyUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-[#666] hover:text-white transition-colors">
                                    {exp.company} ↗
                                </a>
                            ) : (
                                <span className="text-sm text-gray-500">
                                    {exp.company}
                                </span>
                            )}
                            <span className="text-gray-500 hidden sm:block">
                                ·
                            </span>
                            <span className="text-xs text-gray-500">
                                {exp.dates}
                            </span>
                        </div>
                        <ul className="space-y-2 pl-0">
                            {exp.description.map((bullet, i) => (
                                <li
                                    key={i}
                                    className="text-sm text-gray-300 leading-relaxed flex gap-3">
                                    <span className="text-gray-300 mt-0.5 shrink-0">
                                        —
                                    </span>
                                    <span>{bullet}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
