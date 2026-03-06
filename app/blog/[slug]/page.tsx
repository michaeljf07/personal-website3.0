import { blogPosts, type ContentBlock } from "../../components/blogData";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
    return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);
    if (!post) return {};
    return {
        title: post.title,
        description: post.excerpt,
    };
}

function renderBlock(block: ContentBlock, i: number) {
    switch (block.type) {
        case "h2":
            return (
                <h2
                    key={i}
                    className="text-[17px] font-semibold text-white mt-10 mb-3">
                    {block.text}
                </h2>
            );
        case "p":
            return (
                <p
                    key={i}
                    className="text-[14px] text-[#999] leading-relaxed mb-4">
                    {block.text}
                </p>
            );
        case "ul":
            return (
                <ul key={i} className="mb-4 space-y-2">
                    {block.items.map((item, j) => (
                        <li
                            key={j}
                            className="flex gap-3 text-[14px] text-[#999] leading-relaxed">
                            <span className="text-[#444] shrink-0">—</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            );
    }
}

export default async function BlogPost({ params }: Props) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);
    if (!post) notFound();

    const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });

    return (
        <div className="min-h-screen bg-gray-900 text-gray-200">
            <header className="border-b border-white/6">
                <div className="max-w-2xl mx-auto px-6 h-14 flex items-center justify-between">
                    <Link
                        href="/"
                        className="text-sm text-gray-500 hover:text-white transition-colors">
                        ← back
                    </Link>
                    <Link
                        href="/#writing"
                        className="text-sm text-gray-500 hover:text-white transition-colors">
                        writing
                    </Link>
                </div>
            </header>

            <main className="max-w-2xl mx-auto px-6 py-16">
                <div className="mb-10">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="text-sm text-gray-500 tabular-nums">
                            {formattedDate}
                        </span>
                        {post.tags.map((tag) => (
                            <span
                                key={tag}
                                className="text-xs text-[#444] bg-white/4 border border-white/6 px-2 py-0.5 rounded-sm">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h1 className="text-2xl font-semibold text-white tracking-tight leading-snug mb-4">
                        {post.title}
                    </h1>
                    <p className="text-md text-gray-400 leading-relaxed">
                        {post.excerpt}
                    </p>
                </div>

                <div className="border-t border-white/6 pt-10">
                    {post.content.map((block, i) => renderBlock(block, i))}
                </div>
            </main>
        </div>
    );
}
