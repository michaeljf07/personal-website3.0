import { RightArrowIcon } from "../icons";
import Link from "next/link";

export default function BlogPanel() {
    return (
        <div className="h-full w-full flex flex-col p-4 sm:p-5 lg:p-0">
            <div className="text-xs uppercase tracking-[0.15em] text-white/65 mb-3 lg:hidden mt-4">
                Blog
            </div>
            <Link
                href="/blog"
                className="w-full sm:w-auto sm:mx-auto flex items-center justify-center gap-2 min-h-10 px-6 py-3 rounded-xl border border-white/7 bg-white/2.5 hover:bg-white/5 hover:border-white/14 active:scale-95 active:bg-white/7 transition-all duration-200 touch-manipulation lg:mt-4">
                <span className="text-sm font-medium text-white/95">Blog</span>
                <RightArrowIcon className="w-5 h-5 text-white/90" />
            </Link>
        </div>
    );
}
