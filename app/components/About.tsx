export default function About() {
    return (
        <section id="about">
            <h1 className="text-3xl font-semibold text-white tracking-tight mb-2">
                Michael Ferreira
            </h1>
            <p className="text-sm text-gray-500 mb-6">
                Software Engineer · Waterloo, ON
            </p>
            <p className="text-md leading-relaxed text-gray-300 mb-8 max-w-xl">
                Computer Science & Business double degree student at the
                University of Waterloo and Wilfrid Laurier University. I love
                building things — from web apps to ML pipelines. Currently
                working at{" "}
                <a
                    href="https://cacheinyourcloset.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#aaa] transition-colors">
                    Cache
                </a>
                .
            </p>
            <div className="flex flex-wrap gap-5 text-[13px]">
                <a
                    href="https://github.com/michaeljf07"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-white transition-colors">
                    GitHub ↗
                </a>
                <a
                    href="https://linkedin.com/in/michael-j-ferreira"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-white transition-colors">
                    LinkedIn ↗
                </a>
                <a
                    href="https://instagram.com/michael.ferreira07"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-white transition-colors">
                    Instagram ↗
                </a>
                <a
                    href="mailto:michaeljf.2007@gmail.com"
                    className="text-gray-500 hover:text-white transition-colors">
                    Email ↗
                </a>
                <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-white transition-colors">
                    Resume ↗
                </a>
            </div>
        </section>
    );
}
