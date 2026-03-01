import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
    variable: "--font-inter",
});

const playfair = Playfair_Display({
    weight: ["400", "600", "700", "900"],
    subsets: ["latin"],
    variable: "--font-playfair",
});

const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "http://localhost:3000");

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: "Michael Ferreira | Software Engineer & Developer Portfolio",
        template: "%s | Michael Ferreira",
    },
    description:
        "Michael Ferreira - Software Engineer and Developer. Computer Science and Business double degreestudent at University of Waterloo and Wilfrid Laurier University. Portfolio showcasing projects in web development, machine learning, and full-stack applications.",
    keywords: [
        "Michael Ferreira",
        "Michael J Ferreira",
        "Software Engineer",
        "Developer",
        "University of Waterloo",
        "Wilfrid Laurier University",
        "Computer Science",
        "Portfolio",
        "Web Developer",
        "Full-Stack Developer",
    ],
    authors: [
        {
            name: "Michael Ferreira",
            url: "https://linkedin.com/in/michael-j-ferreira",
        },
    ],
    creator: "Michael Ferreira",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: siteUrl,
        siteName: "Michael Ferreira",
        title: "Michael Ferreira | Software Engineer & Developer Portfolio",
        description:
            "Michael Ferreira - Software Engineer and Developer. Computer Science and Business student at University of Waterloo and Wilfrid Laurier University.",
        images: [
            {
                url: "/headshots/headshot2.png",
                width: 800,
                height: 1000,
                alt: "Michael Ferreira - Software Engineer",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Michael Ferreira | Software Engineer & Developer Portfolio",
        description:
            "Michael Ferreira - Software Engineer and Developer. Computer Science and Business student at University of Waterloo and Wilfrid Laurier University.",
        images: ["/headshots/headshot2.png"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
        },
    },
    alternates: {
        canonical: siteUrl,
    },
    category: "technology",
};

const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Michael Ferreira",
    alternateName: "Michael J Ferreira",
    url: siteUrl,
    image: `${siteUrl}/headshots/headshot2.png`,
    jobTitle: "Software Engineer",
    description:
        "Software Engineer and Developer. Computer Science and Business student at University of Waterloo and Wilfrid Laurier University.",
    alumniOf: [
        {
            "@type": "CollegeOrUniversity",
            name: "University of Waterloo",
        },
        {
            "@type": "CollegeOrUniversity",
            name: "Wilfrid Laurier University",
        },
    ],
    knowsAbout: [
        "Software Engineering",
        "Web Development",
        "Machine Learning",
        "Full-Stack Development",
    ],
    sameAs: [
        "https://github.com/michaeljf07",
        "https://linkedin.com/in/michael-j-ferreira",
        "https://instagram.com/michael.ferreira07",
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(personJsonLd),
                    }}
                />
                {children}
            </body>
        </html>
    );
}
