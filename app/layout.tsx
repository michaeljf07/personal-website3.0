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

export const metadata: Metadata = {
    title: "Michael Ferreira | Portfolio",
    description: "Software Engineer, Developer, and Student",
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
                {children}
            </body>
        </html>
    );
}
