export function getSiteUrl(): string {
    const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");
    if (explicit) {
        return explicit;
    }
    if (process.env.VERCEL_URL) {
        return `https://${process.env.VERCEL_URL}`;
    }
    return "http://localhost:3000";
}
