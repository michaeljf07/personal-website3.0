import { projects } from "./projectData";
import { GitHubIcon, ExternalLinkIcon } from "../icons";

export default function ProjectsPanel() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 w-full pb-4">
            {projects.map((project, i) => {
                const demoUrl = "demoUrl" in project ? project.demoUrl : null;
                return (
                    <div
                        key={i}
                        className="relative group rounded-2xl bg-(--color-bg-section-card) border border-(--color-border-card) hover:bg-(--color-bg-section-card-hover) transition-colors duration-150 p-4 backdrop-blur-sm max-lg:backdrop-blur-none flex flex-col">
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute top-2 right-2 sm:top-3.5 sm:right-3.5 z-20 inline-flex min-h-11 min-w-11 sm:min-h-0 sm:min-w-0 items-center justify-center touch-manipulation rounded-lg text-(--color-accent-line) hover:text-(--color-hover-ink) active:opacity-80 transition-colors"
                                aria-label={`View ${project.title} on GitHub`}>
                                <GitHubIcon className="w-4 h-4" />
                            </a>
                        )}

                        {demoUrl && (
                            <a
                                href={demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute inset-0 z-10 cursor-pointer touch-manipulation rounded-2xl"
                                aria-label={`View ${project.title} demo`}>
                                <span className="sr-only">Open video demo for {project.title}</span>
                            </a>
                        )}

                        <div className="relative z-0 pr-6 flex flex-col flex-1">
                            <div className="flex items-center gap-1.5 mb-1">
                                <h3 className="font-semibold text-(--color-text) text-base leading-snug">
                                    {project.title}
                                </h3>
                                {demoUrl && (
                                    <ExternalLinkIcon className="w-4 h-4 text-(--color-accent-line) shrink-0 group-hover:text-(--color-link-accent) transition-colors" />
                                )}
                            </div>

                            <p className="text-sm text-(--color-text-body) leading-relaxed line-clamp-3 flex-1">
                                {project.description}
                            </p>

                            <div className="flex gap-1.5 flex-wrap mt-3">
                                {project.technologies.slice(0, 4).map((tech) => (
                                    <span
                                        key={tech}
                                        className="text-xs px-2.5 py-0.5 bg-(--color-bg-tag) text-(--color-link-accent) rounded-full border border-(--color-border-card)">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
