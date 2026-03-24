import { projects } from "./projectData";
import { GitHubIcon, ExternalLinkIcon } from "../icons";

export default function ProjectsPanel() {
    return (
        <section className="flex flex-col p-4 sm:p-5 lg:min-h-0">
            <div className="text-xs uppercase tracking-[0.15em] text-white/65 mb-3">Projects</div>
            <div className="flex flex-col gap-2 lg:flex-1 lg:min-h-0 overflow-scroll">
                {projects.map((project, i) => {
                    const demoUrl = "demoUrl" in project ? project.demoUrl : null;
                    const cardClassName =
                        "relative rounded-xl border border-white/7 bg-white/2.5 hover:bg-white/5 hover:border-white/14 transition-all duration-300 flex flex-col justify-between group lg:flex-1 min-h-30";
                    return (
                        <div
                            key={i}
                            className={`${cardClassName} ${demoUrl ? "cursor-pointer" : ""}`}>
                            {demoUrl && (
                                <a
                                    href={demoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute inset-0 rounded-xl z-1"
                                    aria-label={`View ${project.title} demo`}
                                />
                            )}
                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute top-3 right-3 z-2 text-white/40 hover:text-white/80 transition-colors"
                                    aria-label="View on GitHub">
                                    <GitHubIcon className="w-5 h-5" />
                                </a>
                            )}
                            <div className="relative z-0 px-4 py-3 flex flex-col justify-between flex-1 pointer-events-none [&>a]:pointer-events-auto">
                                <div>
                                    <div className="flex items-start justify-between gap-2">
                                        <div className="text-sm font-semibold text-white/95 leading-tight tracking-tight flex items-center gap-1.5">
                                            {project.title}
                                            {demoUrl && (
                                                <ExternalLinkIcon className="w-3 h-3 text-white/40 group-hover:text-white/70 shrink-0" />
                                            )}
                                        </div>
                                        <div className="w-5 shrink-0" />
                                    </div>
                                    <p className="text-xs text-gray-300 mt-1 leading-relaxed line-clamp-2">
                                        {project.description}
                                    </p>
                                </div>
                                <div className="flex gap-1.5 flex-wrap mt-1.5">
                                    {project.technologies.slice(0, 5).map((tech) => (
                                        <span
                                            key={tech}
                                            className="text-[10px] px-1.5 py-0.5 border border-white/8 text-white/50 rounded-sm tracking-wide">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
