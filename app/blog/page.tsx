import { ArrowLeftIcon } from "../components/icons";
import Link from "next/link";

export default function Blog() {
    return (
        <div className="h-dvh min-h-screen lg:h-screen overflow-y-auto lg:overflow-hidden touch-pan-y bg-[#080808] text-white flex flex-col pb-[env(safe-area-inset-bottom)]">
            <div
                className="fixed inset-0 pointer-events-none"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px)",
                    backgroundSize: "44px 44px",
                }}
            />
            <header>
                <div className="h-full w-full flex flex-col p-4 sm:p-5 lg:p-0">
                    <Link
                        href="/"
                        className="w-full sm:w-auto sm:mx-auto flex items-center justify-center gap-2 min-h-10 px-6 py-3 rounded-xl border border-white/7 bg-white/2.5 hover:bg-white/5 hover:border-white/14 active:scale-95 active:bg-white/7 transition-all duration-200 touch-manipulation lg:mt-4">
                        <ArrowLeftIcon className="w-5 h-5 text-white/90" />
                        <span className="text-sm font-medium text-white/95">Home</span>
                    </Link>
                </div>
            </header>

            <p className="flex items-center justify-center h-full text-center align-middle text-white text-3xl">
                Coming Soon
            </p>
        </div>
    );
}
