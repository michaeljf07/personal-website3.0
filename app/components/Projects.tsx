import Image from "next/image";
import { projects } from "./projectData";

export default function Projects() {
    return (
        <div className="p-6 sm:p-8 md:p-12 lg:p-16">
            {/* Section Header */}
            <div className="mb-12 border-b-4 border-white pb-6">
                <div className="flex items-baseline gap-4 mb-2">
                    <span className="magazine-body text-xs tracking-widest text-white/50 uppercase">
                        Portfolio
                    </span>
                </div>
                <h2 className="magazine-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white">
                    projects.
                </h2>
            </div>

            {/* Projects Grid */}
            <div className="space-y-16">
                {projects.map((project, index) => (
                    <article
                        key={project.title}
                        className="border border-white/20 hover:border-white/40 transition-all duration-300">
                        {/* Project Header */}
                        <div className="border-b border-white/20 p-4 sm:p-6 bg-white/5">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                                <div className="flex items-center gap-4">
                                    <span className="magazine-body text-sm font-bold bg-white text-black px-3 py-1 uppercase tracking-widest">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                    <h3 className="magazine-heading text-2xl sm:text-3xl md:text-4xl text-white">
                                        {project.title}
                                    </h3>
                                </div>
                            </div>
                        </div>

                        {/* Project Content */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                            {/* Image */}
                            {project.image && (
                                <div className="relative w-full aspect-video lg:aspect-square overflow-hidden border-b lg:border-b-0 lg:border-r border-white/20">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-all duration-500"
                                    />
                                </div>
                            )}

                            {/* Description */}
                            <div className="p-6 sm:p-8 flex flex-col justify-between">
                                <div className="space-y-6">
                                    <p className="magazine-body text-sm sm:text-base leading-relaxed text-white/80">
                                        {project.description}
                                    </p>

                                    {/* Technologies */}
                                    <div>
                                        <h4 className="magazine-body text-xs uppercase tracking-widest text-white/50 mb-3">
                                            Stack
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map(
                                                (tech) => (
                                                    <span
                                                        key={tech}
                                                        className="magazine-body text-xs border border-white/20 text-white px-3 py-1.5 hover:bg-white hover:text-black transition-all duration-200 uppercase tracking-wider">
                                                        {tech}
                                                    </span>
                                                ),
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Links */}
                                <div className="flex flex-col sm:flex-row gap-3 pt-6 mt-6 border-t border-white/20">
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="magazine-body text-sm font-bold bg-white hover:bg-white/90 text-black px-6 py-3 transition-all duration-200 uppercase tracking-wider text-center">
                                            View Source →
                                        </a>
                                    )}
                                    {project.demoUrl && (
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="magazine-body text-sm font-bold border-2 border-white hover:bg-white hover:text-black text-white px-6 py-3 transition-all duration-200 uppercase tracking-wider text-center">
                                            Live Demo →
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}
