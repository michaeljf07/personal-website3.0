export default function BackgroundImage() {
    return (
        <div
            className="fixed inset-0 z-0 pointer-events-none"
            style={{
                backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px)",
                backgroundSize: "44px 44px",
            }}
        />
    );
}
