import Image from "next/image";
import {
    GitHubIcon,
    LinkedInIcon,
    InstagramIcon,
} from "./icons";

const socialLinks = [
    {
        href: "https://github.com/michaeljf07",
        icon: GitHubIcon,
        label: "github.com/michaeljf07",
    },
    {
        href: "https://linkedin.com/in/michael-j-ferreira",
        icon: LinkedInIcon,
        label: "michael-j-ferreira",
    },
    {
        href: "https://instagram.com/michael.ferreira07",
        icon: InstagramIcon,
        label: "michael.ferreira07",
    },
];

const education = [
    {
        logo: "/logos/uw_logo.png",
        alt: "UWaterloo",
        degree: "Computer Science",
        school: "University of Waterloo",
    },
    {
        logo: "/logos/wlu_logo.png",
        alt: "WLU",
        degree: "Business Administration",
        school: "Wilfrid Laurier University",
    },
];

export default function AboutPanel() {
    return (
        <section className="flex flex-col p-4 sm:p-5 gap-4 lg:overflow-hidden">
            {/* Profile */}
            <div className="flex items-center gap-3">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 shrink-0 overflow-hidden rounded-full border border-white/10">
                    <Image
                        src="/headshots/headshot2.png"
                        alt="Michael Ferreira"
                        fill
                        className="object-cover"
                    />
                </div>
                <div>
                    <div className="text-md font-bold leading-tight text-white">
                        Michael Ferreira
                    </div>
                    <div className="text-xs text-gray-400 mt-0.5 leading-relaxed">
                        CS + Business
                        <br />
                        UWaterloo &amp; WLU
                    </div>
                </div>
            </div>

            {/* Bio */}
            <p className="text-sm text-gray-300 leading-relaxed">
                Double degree student passionate about building at the
                intersection of technology and business. I love tinkering and
                making cool things.
            </p>

            {/* Education */}
            <div>
                <div className="text-xs uppercase tracking-[0.15em] text-white/65 mb-2">
                    Education
                </div>
                <div className="space-y-1.5">
                    {education.map(({ logo, alt, degree, school }) => (
                        <div
                            key={school}
                            className="flex items-center gap-2.5 p-2.5 rounded-lg border border-white/[0.07] bg-white/2.5">
                            <div className="relative w-10 h-10 shrink-0">
                                <Image
                                    src={logo}
                                    alt={alt}
                                    width={40}
                                    height={40}
                                    className="object-contain"
                                />
                            </div>
                            <div>
                                <div className="text-sm font-medium text-white/85">
                                    {degree}
                                </div>
                                <div className="text-xs text-white/55">
                                    {school}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="hidden lg:block lg:flex-1" />

            {/* Connect */}
            <div className="border-t border-white/6 pt-4">
                <div className="text-xs uppercase tracking-[0.15em] text-white/65 mb-2.5">
                    Connect
                </div>
                <div className="flex flex-col gap-1.5">
                    {socialLinks.map(({ href, icon: Icon, label }) => (
                        <a
                            key={href}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white/90 transition-colors">
                            <Icon className="w-3 h-3 shrink-0" />
                            <span>{label}</span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
