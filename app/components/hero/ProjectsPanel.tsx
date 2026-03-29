import { projects } from "./projectData";
import { GitHubIcon, ExternalLinkIcon } from "../icons";
import { scrollbarClassName } from "../Scrollbar";

export default function ProjectsPanel() {
    return (
        <section className="flex min-h-0 flex-col p-5 sm:p-6 lg:h-full lg:overflow-hidden">
            <div className="shrink-0 text-xs text-gray-400 uppercase tracking-[0.14em] mb-4">
                Projects
            </div>
            <div
                className={`flex min-h-0 flex-col gap-px lg:flex-1 lg:overflow-y-auto lg:overscroll-contain ${scrollbarClassName}`}>
                {projects.map((project, i) => {
                    const demoUrl = "demoUrl" in project ? project.demoUrl : null;
                    return (
                        <div
                            key={i}
                            className={`relative group flex flex-col px-3 py-3 rounded-md hover:bg-white/5 transition-colors duration-150 ${demoUrl ? "cursor-pointer" : ""}`}>
                            {demoUrl && (
                                <a
                                    href={demoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute inset-0 rounded-md z-10"
                                    aria-label={`View ${project.title} demo`}
                                />
                            )}
                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute top-3 right-3 z-20 text-gray-400 hover:text-gray-300 transition-colors"
                                    aria-label="View on GitHub">
                                    <GitHubIcon className="w-4 h-4" />
                                </a>
                            )}

                            <div className="pointer-events-none [&>a]:pointer-events-auto pr-6">
                                <div className="flex items-center gap-1.5">
                                    <span className="text-sm font-medium text-gray-100 leading-snug">
                                        {project.title}
                                    </span>
                                    {demoUrl && (
                                        <ExternalLinkIcon className="w-3 h-3 text-white/40 group-hover:text-white/50 shrink-0 transition-colors" />
                                    )}
                                </div>
                                <p className="text-xs text-gray-400 mt-1 leading-relaxed line-clamp-2">
                                    {project.description}
                                </p>
                                <div className="flex gap-1 flex-wrap mt-2">
                                    {project.technologies.slice(0, 5).map((tech) => (
                                        <span
                                            key={tech}
                                            className="text-xs px-1.5 py-0.5 bg-white/5 border border-white/7 text-gray-400 rounded-sm">
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
