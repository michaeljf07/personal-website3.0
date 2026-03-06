import Nav from "./components/Nav";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

export default function Home() {
    return (
        <>
            <Nav />
            <main className="max-w-2xl mx-auto px-6 pt-28 pb-32">
                <About />
                <div className="my-20 border-t border-white/6" />
                <Experience />
                <div className="my-20 border-t border-white/6" />
                <Projects />
                <div className="my-20 border-t border-white/6" />
                <Blog />
                <div className="my-20 border-t border-white/6" />
                <Contact />
            </main>
        </>
    );
}
