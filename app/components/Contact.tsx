export default function Contact() {
    return (
        <div className="p-6 sm:p-8 md:p-12 lg:p-16">
            {/* Section Header */}
            <div className="mb-12 border-b-4 border-white pb-6">
                <div className="flex items-baseline gap-4 mb-2">
                    <span className="magazine-body text-xs tracking-widest text-white/50 uppercase">
                        Connect
                    </span>
                </div>
                <h2 className="magazine-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white">
                    contact.
                </h2>
            </div>

            {/* Contact Content */}
            <div className="space-y-8">
                <div className="border border-white/20 p-8 sm:p-10 md:p-12">
                    <p className="magazine-body text-base sm:text-lg md:text-xl leading-relaxed mb-12 text-white/80 italic border-l-4 border-white pl-6">
                        "Interested in collaborating or just want to say hello?
                        I'm always open to discussing new projects, creative
                        ideas, or opportunities to be part of your vision."
                    </p>

                    <div className="space-y-8">
                        {/* Email Section */}
                        <div className="border-t-2 border-white/20 pt-8">
                            <h3 className="magazine-body text-xs uppercase tracking-widest text-white/50 mb-4">
                                Email
                            </h3>
                            <a
                                href="mailto:michaeljf.2007@gmail.com"
                                className="magazine-heading text-2xl sm:text-3xl md:text-4xl text-white hover:text-white/70 transition-colors break-all">
                                michaeljf.2007@gmail.com
                            </a>
                        </div>

                        {/* Social Media Section */}
                        <div className="border-t-2 border-white/20 pt-8">
                            <h3 className="magazine-body text-xs uppercase tracking-widest text-white/50 mb-6">
                                Social
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-0">
                                <a
                                    href="https://github.com/michaeljf07"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="magazine-body text-sm font-bold border border-white/20 hover:bg-white hover:text-black text-white px-6 py-4 transition-all duration-200 uppercase tracking-wider text-center sm:border-r-0">
                                    GitHub →
                                </a>
                                <a
                                    href="https://linkedin.com/in/michael-j-ferreira"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="magazine-body text-sm font-bold border border-white/20 hover:bg-white hover:text-black text-white px-6 py-4 transition-all duration-200 uppercase tracking-wider text-center border-t-0 sm:border-t sm:border-r-0">
                                    LinkedIn →
                                </a>
                                <a
                                    href="https://instagram.com/michael.fereira07"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="magazine-body text-sm font-bold border border-white/20 hover:bg-white hover:text-black text-white px-6 py-4 transition-all duration-200 uppercase tracking-wider text-center border-t-0 sm:border-t">
                                    Instagram →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Note */}
                <div className="border-t border-white/10 pt-6">
                    <p className="magazine-body text-xs text-white/40 uppercase tracking-widest text-center">
                        Available for opportunities • {new Date().getFullYear()}
                    </p>
                </div>
            </div>
        </div>
    );
}
