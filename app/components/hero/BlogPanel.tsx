import { RightArrowIcon } from "../icons";
import Link from "next/link";

export default function BlogPanel() {
    return (
        <div className="shrink-0 p-5 sm:p-6">
            <div className="text-xs text-gray-400 uppercase tracking-[0.14em] mb-3">Blog</div>
            <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm text-gray-400 hover:text-gray-300 hover:bg-white/5 border border-white/7 hover:border-white/12 transition-all duration-150">
                <span>Read posts</span>
                <RightArrowIcon className="w-4 h-4" />
            </Link>
        </div>
    );
}
