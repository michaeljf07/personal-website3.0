import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Header from "./components/Header";

type PageProps = {
    searchParams: Promise<{ section?: string }>;
};

export default async function Home({ searchParams }: PageProps) {
    const params = await searchParams;
    const activeSection = params.section || "projects";

    return (
        <div className="flex flex-col min-h-screen bg-black">
            <Header activeSection={activeSection} />

            <div className="flex flex-1 min-h-0 flex-col md:flex-row max-w-[1800px] mx-auto w-full">
                {/* Left: About (hidden on mobile, visible on desktop) */}
                <aside className="hidden md:flex md:w-1/3 md:max-w-[450px] lg:max-w-[500px] md:shrink-0 flex-col py-8 px-8 overflow-auto border-r border-white/10">
                    <About />
                </aside>

                {/* Right: Switchable sections */}
                <main className="flex-1 min-h-0 overflow-auto">
                    {activeSection === "about" && <About className="p-4" />}
                    {activeSection === "experience" && <Experience />}
                    {activeSection === "projects" && <Projects />}
                    {activeSection === "contact" && <Contact />}
                </main>
            </div>
        </div>
    );
}
