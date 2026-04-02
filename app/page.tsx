import Sidebar from "./components/Sidebar";
import SectionHeading from "./components/SectionHeading";
import AboutPanel from "./components/hero/AboutPanel";
import ExperiencePanel from "./components/hero/ExperiencePanel";
import ProjectsPanel from "./components/hero/ProjectsPanel";

export default function Home() {
    return (
        <div className="flex flex-col lg:flex-row min-h-screen lg:h-screen lg:overflow-hidden">
            <Sidebar />

            <main
                id="main-scroll"
                className="w-full flex-none content-scroll dot-bg max-lg:overflow-x-hidden lg:flex-1 lg:min-h-0 lg:overflow-y-auto">
                <div className="mx-4 sm:mx-9 md:mx-12 lg:mx-16 pb-[env(safe-area-inset-bottom)]">
                    <section
                        id="about"
                        className="scroll-mt-4 sm:scroll-mt-6 py-8 sm:py-10 border-b border-dashed border-(--color-border-dashed)">
                        <div className="rounded-2xl sm:rounded-3xl bg-(--color-bg-card)/40 border border-(--color-border-card) backdrop-blur-sm max-lg:backdrop-blur-none p-4 sm:p-6">
                            <SectionHeading>Hi, I&apos;m Michael!</SectionHeading>
                            <AboutPanel />
                        </div>
                    </section>

                    <section
                        id="experience"
                        className="scroll-mt-4 sm:scroll-mt-6 py-8 sm:py-10 border-b border-dashed border-(--color-border-dashed)">
                        <div className="rounded-2xl sm:rounded-3xl bg-(--color-bg-card)/40 border border-(--color-border-card) backdrop-blur-sm max-lg:backdrop-blur-none p-4 sm:p-6">
                            <SectionHeading>Experience</SectionHeading>
                            <ExperiencePanel />
                        </div>
                    </section>

                    <section
                        id="projects"
                        className="scroll-mt-4 sm:scroll-mt-6 py-8 sm:py-10 pb-10">
                        <div className="rounded-2xl sm:rounded-3xl bg-(--color-bg-card)/40 border border-(--color-border-card) backdrop-blur-sm max-lg:backdrop-blur-none p-4 sm:p-6">
                            <SectionHeading>Projects</SectionHeading>
                            <ProjectsPanel />
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}
