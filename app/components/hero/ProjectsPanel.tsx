import { projects } from "./projectData";
import { GitHubIcon, ExternalLinkIcon } from "../icons";

export default function ProjectsPanel() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl pb-4">
            {projects.map((project, i) => {
                const demoUrl = "demoUrl" in project ? project.demoUrl : null;
                return (
                    <div
                        key={i}
                        className="relative group rounded-2xl bg-(--color-bg-section-card) border border-(--color-border-card) hover:bg-(--color-bg-section-card-hover) transition-colors duration-150 p-4 backdrop-blur-sm flex flex-col">
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute top-3.5 right-3.5 text-(--color-accent-line) hover:text-(--color-hover-ink) transition-colors z-20"
                                aria-label={`View ${project.title} on GitHub`}>
                                <GitHubIcon className="w-4 h-4" />
                            </a>
                        )}

                        {demoUrl && (
                            <a
                                href={demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute inset-0 rounded-2xl z-10"
                                aria-label={`View ${project.title} demo`}
                            />
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
