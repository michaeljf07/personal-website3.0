import Link from "next/link";
import { blogPosts } from "./blogData";

function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
    });
}

export default function Blog() {
    return (
        <section id="writing">
            <h2 className="text-xs font-medium uppercase tracking-widest text-gray-300 mb-10">
                Writing
            </h2>
            <div className="space-y-6">
                Coming Soon...
                {/* {blogPosts.map((post) => (
                    <div key={post.slug}>
                        <div className="flex items-baseline justify-between gap-4 mb-1">
                            <Link
                                href={`/blog/${post.slug}`}
                                className="text-md font-medium text-white hover:text-gray-300 transition-colors">
                                {post.title}
                            </Link>
                            <span className="text-sm text-gray-500 shrink-0 tabular-nums">
                                {formatDate(post.date)}
                            </span>
                        </div>
                        <p className="text-sm text-gray-300 leading-relaxed">
                            {post.excerpt}
                        </p>
                    </div>
                ))} */}
            </div>
        </section>
    );
}
