export default function Contact() {
    return (
        <section id="contact">
            <h2 className="text-xs font-medium uppercase tracking-widest text-gray-300 mb-10">
                Contact
            </h2>
            <p className="text-md text-gray-300 mb-8 leading-relaxed max-w-sm">
                Open to new opportunities and interesting projects. Feel free to
                reach out.
            </p>
            <a
                href="mailto:michaeljf.2007@gmail.com"
                className="text-md text-white hover:text-gray-300 transition-colors">
                michaeljf.2007@gmail.com ↗
            </a>
            <div className="flex gap-5 mt-8 text-sm">
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
            </div>
            <p className="text-xs text-gray-500 mt-20">
                © {new Date().getFullYear()} Michael Ferreira
            </p>
        </section>
    );
}
