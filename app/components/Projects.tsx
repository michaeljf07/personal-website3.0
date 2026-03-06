import { projects } from "./projectData";

export default function Projects() {
    return (
        <section id="projects">
            <h2 className="text-xs font-medium uppercase tracking-widest text-gray-300 mb-10">
                Projects
            </h2>
            <div className="space-y-8">
                {projects.map((project) => (
                    <div key={project.title}>
                        <div className="flex items-start justify-between gap-4 mb-2">
                            <span className="text-md font-medium text-white">
                                {project.title}
                            </span>
                            <div className="flex items-center gap-4 text-sm shrink-0 pt-0.5">
                                {project.githubUrl && (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-500 hover:text-white transition-colors">
                                        GitHub ↗
                                    </a>
                                )}
                                {project.demoUrl && (
                                    <a
                                        href={project.demoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-500 hover:text-white transition-colors">
                                        Demo ↗
                                    </a>
                                )}
                            </div>
                        </div>
                        <p className="text-sm text-gray-300 leading-relaxed mb-3">
                            {project.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                            {project.technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="text-xs text-gray-500 bg-white/4 border border-white/6 px-2 py-0.5 rounded-sm">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
