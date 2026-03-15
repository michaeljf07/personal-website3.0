import { GitHubIcon, LinkedInIcon, InstagramIcon, ExternalLinkIcon } from "./components/icons";
import AboutPanel from "./components/hero/AboutPanel";
import ExperiencePanel from "./components/hero/ExperiencePanel";
import ProjectsPanel from "./components/hero/ProjectsPanel";
import BlogPanel from "./components/hero/BlogPanel";
import BackgroundImage from "./components/BackgroundImage";

export default function Home() {
    return (
        <div className="h-dvh min-h-screen lg:h-screen overflow-y-auto lg:overflow-hidden touch-pan-y bg-[#080808] text-white flex flex-col pb-[env(safe-area-inset-bottom)]">
            <BackgroundImage />

            <header className="relative z-10 flex items-center justify-between px-4 sm:px-6 pt-[env(safe-area-inset-top)] h-14 shrink-0 border-b border-white/[0.07]">
                <div className="flex items-baseline gap-4">
                    <span className="text-lg font-bold tracking-tight text-white hidden sm:inline">
                        Michael Ferreira
                    </span>
                    <span className="text-sm tracking-[0.16em] uppercase text-gray-400">
                        Software Engineer
                    </span>
                </div>
                <div className="flex items-center gap-4">
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 -m-2 text-white/50 hover:text-white/90 transition-colors touch-manipulation flex items-center gap-1.5 text-sm"
                        aria-label="Resume">
                        <span>Resume</span>
                        <ExternalLinkIcon className="w-4 h-4" />
                    </a>
                    <a
                        href="https://github.com/michaeljf07"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 -m-2 text-white/50 hover:text-white/90 transition-colors touch-manipulation"
                        aria-label="GitHub">
                        <GitHubIcon className="w-5 h-5" />
                    </a>
                    <a
                        href="https://linkedin.com/in/michael-j-ferreira"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 -m-2 text-white/50 hover:text-white/90 transition-colors touch-manipulation"
                        aria-label="LinkedIn">
                        <LinkedInIcon className="w-5 h-5" />
                    </a>
                    <a
                        href="https://instagram.com/michael.ferreira07"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 -m-2 text-white/50 hover:text-white/90 transition-colors touch-manipulation"
                        aria-label="Instagram">
                        <InstagramIcon className="w-5 h-5" />
                    </a>
                </div>
            </header>

            <div className="relative z-10 flex-none lg:flex-1 min-h-0 overflow-visible lg:overflow-hidden grid grid-cols-1 lg:grid-cols-[260px_1fr_1fr] lg:min-h-0 divide-y lg:divide-y-0 lg:divide-x divide-white/6">
                <AboutPanel />
                <div>
                    <ExperiencePanel />
                    <BlogPanel />
                </div>
                <ProjectsPanel />
            </div>
        </div>
    );
}
