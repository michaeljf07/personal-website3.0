"use client";

import { useState, useEffect } from "react";

export default function ClientTime() {
    const [timeString, setTimeString] = useState<string | null>(null);

    useEffect(() => {
        const updateTime = () => {
            setTimeString(
                new Date().toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "2-digit",
                    hour12: true,
                }),
            );
        };

        updateTime();
        const interval = setInterval(updateTime, 60_000); // update every minute
        return () => clearInterval(interval);
    }, []);

    if (timeString === null) {
        return (
            <span className="magazine-body text-[10px] sm:text-xs tracking-widest text-white/70 italic">
                —
            </span>
        );
    }

    return (
        <span className="magazine-body text-[10px] sm:text-xs tracking-widest text-white/70 italic">
            {timeString}
        </span>
    );
}
