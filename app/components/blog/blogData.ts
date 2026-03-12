export type ContentBlock =
    | { type: "p"; text: string }
    | { type: "h2"; text: string }
    | { type: "ul"; items: string[] };

export type BlogPost = {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    tags: string[];
    content: ContentBlock[];
};

export const blogPosts: BlogPost[] = [
    {
        slug: "building-yolo-cv-pipeline",
        title: "Building a Real-Time Computer Vision Pipeline for Retail",
        date: "2025-02-15",
        excerpt:
            "How we used YOLOv8 and OpenCV to build a TV display recognition system that hits 30+ FPS with sub-500ms latency — and the lessons learned along the way.",
        tags: ["computer vision", "ml", "python"],
        content: [
            {
                type: "p",
                text: "When I joined Local Reach as a software engineering intern, one of my main projects was building a computer vision pipeline to automatically detect and recognize TV displays in retail environments. The goal was to help brands verify their content was actually playing on screens in stores.",
            },
            {
                type: "h2",
                text: "The Stack",
            },
            {
                type: "p",
                text: "We chose YOLOv8 for object detection — it's fast, accurate, and the Python ecosystem around it is excellent. OpenCV handled the video stream preprocessing. The pipeline needed to run in near real-time, so every optimization decision mattered.",
            },
            {
                type: "h2",
                text: "Preprocessing with OpenCV",
            },
            {
                type: "p",
                text: "Before passing frames to YOLO, we applied a few preprocessing steps to improve detection accuracy without killing throughput. Resizing frames to 640x640, normalizing pixel values, and applying a slight Gaussian blur to reduce noise made a noticeable difference in detection confidence scores.",
            },
            {
                type: "ul",
                items: [
                    "Resize to model input dimensions before inference, not after",
                    "Use half-precision (FP16) for inference when hardware supports it — roughly 2x speedup",
                    "Batch frames where latency requirements allow",
                    "Profile before optimizing — we wasted time on the wrong bottleneck initially",
                ],
            },
            {
                type: "h2",
                text: "Hitting 30+ FPS",
            },
            {
                type: "p",
                text: "The biggest gains came from running inference on GPU and processing frames in a background thread so the main loop wasn't blocked. We ended up at around 35 FPS on a mid-range GPU with sub-400ms end-to-end latency. This was eventually acquired by Taiv (YC W20), which was a cool validation of the work.",
            },
            {
                type: "p",
                text: "The key lesson: real-time CV is more about architecture and pipeline design than squeezing every last FLOP from your model. Get the concurrency right first.",
            },
        ],
    },
    {
        slug: "lessons-from-baobab",
        title: "Lessons from Building a Charity Platform from Scratch",
        date: "2025-01-10",
        excerpt:
            "What I learned building Baobab — a full-stack MERN donation platform for 10 charities. From MongoDB schema design to JWT auth, here's what I'd do differently.",
        tags: ["web dev", "startup", "full-stack"],
        content: [
            {
                type: "p",
                text: "Baobab started as a simple idea: make it easier for people to donate to smaller, lesser-known charities. By the time we wrapped up, it was a full MERN stack platform with 90+ active users, 10 partner charities, and over $1,000 in facilitated donations.",
            },
            {
                type: "h2",
                text: "Getting the Data Model Right",
            },
            {
                type: "p",
                text: "The biggest technical decision was the MongoDB schema. We had three main entities: users, charities, and donations. Early on I made the mistake of embedding too much data in documents instead of referencing. This caused write amplification issues as user counts grew.",
            },
            {
                type: "p",
                text: "The fix: compound indexes on the donations collection (userId + charityId + createdAt) and partial denormalization — storing aggregate donation totals on charity documents rather than computing them at read time. This cut our most frequent query time by about 40%.",
            },
            {
                type: "h2",
                text: "Auth Done Right",
            },
            {
                type: "ul",
                items: [
                    "JWT with short expiry (15 min) + refresh tokens stored in httpOnly cookies",
                    "bcrypt with cost factor 12 for password hashing",
                    "RBAC middleware protecting all 50+ API endpoints",
                    "Rate limiting on auth endpoints to prevent brute force",
                ],
            },
            {
                type: "h2",
                text: "What I'd Do Differently",
            },
            {
                type: "p",
                text: "Start with a proper data model review before writing any code. We refactored the schema twice. Also — write integration tests from day one. Testing the API endpoints in isolation saved us countless debugging hours when we added new features.",
            },
        ],
    },
    {
        slug: "postgres-supabase-optimization",
        title: "Optimizing PostgreSQL on Supabase for Sub-100ms APIs",
        date: "2024-12-05",
        excerpt:
            "Practical techniques I used to get 50+ API endpoints under 100ms on Supabase — covering indexing strategies, caching, denormalization, and connection pooling.",
        tags: ["database", "postgres", "backend"],
        content: [
            {
                type: "p",
                text: "At Cache, we were hitting slow response times as our user base grew. Some endpoints were taking 800ms+ — unacceptable for a consumer app. Over a few weeks, I brought the worst offenders under 100ms. Here's what actually worked.",
            },
            {
                type: "h2",
                text: "Start with EXPLAIN ANALYZE",
            },
            {
                type: "p",
                text: "Before touching anything, run EXPLAIN ANALYZE on your slowest queries. You'll almost always find a sequential scan where you need an index. We had several tables missing indexes on foreign key columns — an embarrassingly easy win.",
            },
            {
                type: "h2",
                text: "Indexing Strategy",
            },
            {
                type: "ul",
                items: [
                    "Add indexes on all foreign key columns — Postgres doesn't do this automatically",
                    "Use partial indexes for filtered queries (e.g., WHERE status = 'active')",
                    "Composite indexes should match your query's WHERE clause column order",
                    "BRIN indexes for large time-series tables with sequential inserts",
                ],
            },
            {
                type: "h2",
                text: "Caching and Denormalization",
            },
            {
                type: "p",
                text: "For read-heavy endpoints, we added in-memory caching with a short TTL. For aggregate data (like totals and counts), we denormalized by storing computed values directly on parent records and updating them on write. This trades write complexity for much faster reads — usually the right tradeoff for a consumer app.",
            },
            {
                type: "h2",
                text: "Connection Pooling with Supavisor",
            },
            {
                type: "p",
                text: "Supabase uses Supavisor for connection pooling. Make sure you're connecting through the pooler URL (port 6543) rather than direct connection (5432) in production. This alone can cut connection overhead significantly under load. With all of these changes combined, we hit sub-100ms on all critical endpoints.",
            },
        ],
    },
];
