import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");
    if (!raw) {
        return NextResponse.next();
    }

    let canonical: URL;
    try {
        canonical = new URL(raw);
    } catch {
        return NextResponse.next();
    }

    const host = (request.headers.get("host") ?? "").split(":")[0].toLowerCase();
    const proto = (request.headers.get("x-forwarded-proto") ?? "https").split(",")[0].trim();

    const ch = canonical.hostname.toLowerCase();
    const hostVariants = new Set<string>([ch, ch.startsWith("www.") ? ch.slice(4) : `www.${ch}`]);

    if (!hostVariants.has(host)) {
        return NextResponse.next();
    }

    const targetUrl = new URL(request.nextUrl.pathname + request.nextUrl.search, canonical.origin);

    const wantHttps = canonical.protocol === "https:";
    const protoOk = wantHttps ? proto === "https" : proto === "http";
    const hostOk = host === ch;

    if (protoOk && hostOk) {
        return NextResponse.next();
    }

    return NextResponse.redirect(targetUrl, 308);
}

export const config = {
    matcher: [
        "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
    ],
};
