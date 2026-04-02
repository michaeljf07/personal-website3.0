import Sidebar from "./components/Sidebar";
import SectionHeading from "./components/SectionHeading";
import AboutPanel from "./components/hero/AboutPanel";
import ExperiencePanel from "./components/hero/ExperiencePanel";
import ProjectsPanel from "./components/hero/ProjectsPanel";

export default function Home() {
    return (
        <div className="flex flex-col lg:flex-row min-h-screen lg:h-screen lg:overflow-hidden">
            <Sidebar />

            <main id="main-scroll" className="flex-1 overflow-y-auto content-scroll dot-bg">
                <div className="mx-12 sm:mx-16">
                    <section
                        id="about"
                        className="py-10 border-b border-dashed border-(--color-border-dashed)">
                        <div className="rounded-3xl bg-(--color-bg-card)/40 border border-(--color-border-card) backdrop-blur-sm p-6">
                            <SectionHeading>Hi, I&apos;m Michael!</SectionHeading>
                            <AboutPanel />
                        </div>
                    </section>

                    <section
                        id="experience"
                        className="py-10 border-b border-dashed border-(--color-border-dashed)">
                        <div className="rounded-3xl bg-(--color-bg-card)/40 border border-(--color-border-card) backdrop-blur-sm p-6">
                            <SectionHeading>Experience</SectionHeading>
                            <ExperiencePanel />
                        </div>
                    </section>

                    <section id="projects" className="py-10">
                        <div className="rounded-3xl bg-(--color-bg-card)/40 border border-(--color-border-card) backdrop-blur-sm p-6">
                            <SectionHeading>Projects</SectionHeading>
                            <ProjectsPanel />
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}
