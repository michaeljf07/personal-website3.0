"use client";

import { useState, useEffect, useMemo } from "react";
import { DateTime } from "luxon";
import type { SelectedDate, TimeSlot } from "./types";

const TIMEZONE = "America/Toronto";
const MONTH_NAMES = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

function formatSlotTime(iso: string): string {
    return DateTime.fromISO(iso, { zone: TIMEZONE }).toFormat("h:mm a");
}

// groupSlotsByDay(slots) returns a map of day keys to lists of slots
function groupSlotsByDay(slots: TimeSlot[]): Map<string, TimeSlot[]> {
    const map = new Map<string, TimeSlot[]>();
    for (const slot of slots) {
        const key = `${slot.year}-${slot.month}-${slot.day}`;
        const list = map.get(key) ?? [];
        list.push(slot);
        map.set(key, list);
    }
    return map;
}

// getWeekKey(date) returns the key for the week of a given date
function getWeekKey(date: { day: number; month: number; year: number }): string {
    const dt = DateTime.fromObject(
        { year: date.year, month: date.month, day: date.day },
        { zone: TIMEZONE },
    );
    const weekStart = dt.startOf("week").minus({ days: 1 }); // Sunday
    return `${weekStart.year}-${weekStart.month}-${weekStart.day}`;
}

export default function Availability({ selectedDate }: { selectedDate: SelectedDate }) {
    const [slots, setSlots] = useState<TimeSlot[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);

    const weekKey = selectedDate ? getWeekKey(selectedDate) : null;

    useEffect(() => {
        if (!selectedDate || !weekKey) return;

        setLoading(true);
        setError(null);
        setSelectedSlot(null);

        const url = `/api/availability?day=${selectedDate.day}&month=${selectedDate.month}&year=${selectedDate.year}`;

        fetch(url)
            .then((res) => {
                if (!res.ok) throw new Error("Failed to load availability");
                return res.json();
            })
            .then((data) => {
                if (!data.success || !Array.isArray(data.slots)) {
                    throw new Error("Invalid response");
                }
                setSlots(data.slots);
            })
            .catch((err) => setError(err instanceof Error ? err.message : "Something went wrong"))
            .finally(() => setLoading(false));
    }, [weekKey]); // only fetch availability when the week key changes

    const slotsByDay = useMemo(() => groupSlotsByDay(slots), [slots]);

    // sortedDays is the sorted list of the days in the selected week
    const sortedDays = useMemo(() => {
        return Array.from(slotsByDay.keys()).sort((a, b) => {
            const [yA, mA, dA] = a.split("-").map(Number);
            const [yB, mB, dB] = b.split("-").map(Number);
            if (yA !== yB) return yA - yB;
            if (mA !== mB) return mA - mB;
            return dA - dB;
        });
    }, [slotsByDay]);

    if (!selectedDate) return null;

    const dateLabel = `${MONTH_NAMES[selectedDate.month - 1]} ${selectedDate.day}, ${selectedDate.year}`;

    return (
        <div className="mx-auto max-w-5xl rounded-xl bg-zinc-900/35 p-6 shadow-xl border border-zinc-700/50 mt-6 relative z-10">
            <h2 className="text-xl font-semibold text-white mb-1">
                Availability for the week of {dateLabel}
            </h2>
            <p className="text-zinc-400 text-sm mb-4">Select a time slot to book your meeting</p>

            {loading && (
                <div className="flex items-center justify-center py-12 text-zinc-400">
                    <div className="animate-pulse">Loading availability…</div>
                </div>
            )}

            {error && (
                <div className="rounded-lg bg-red-500/10 border border-red-500/30 p-4 text-red-200">
                    {error}
                </div>
            )}

            {!loading && !error && slots.length === 0 && (
                <div className="text-zinc-400 py-8 text-center">
                    No available slots this week. Try another date.
                </div>
            )}

            {!loading && !error && slots.length > 0 && (
                <div className="space-y-6">
                    {sortedDays.map((key) => {
                        const daySlots = slotsByDay.get(key)!;
                        const [y, m, d] = key.split("-").map(Number);
                        const dayLabel = `${MONTH_NAMES[m - 1]} ${d}`;
                        const isSelectedDay =
                            y === selectedDate.year &&
                            m === selectedDate.month &&
                            d === selectedDate.day;

                        return (
                            <div key={key}>
                                <div className="text-zinc-300 font-medium mb-2">
                                    {dayLabel}
                                    {isSelectedDay && (
                                        <span className="ml-4 text-md text-blue-400">
                                            (Selected Day)
                                        </span>
                                    )}
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {daySlots.map((slot, idx) => {
                                        const isSelected =
                                            selectedSlot?.start === slot.start &&
                                            selectedSlot?.day === slot.day;
                                        return (
                                            <button
                                                key={`${slot.start}-${idx}`}
                                                type="button"
                                                onClick={() => setSelectedSlot(slot)}
                                                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                                                    isSelected
                                                        ? "bg-blue-600 text-white ring-2 ring-blue-400"
                                                        : "bg-zinc-800 text-white hover:bg-zinc-700 border border-zinc-600/50"
                                                }`}>
                                                {formatSlotTime(slot.start)}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}

            {selectedSlot && (
                <div className="mt-6 pt-4 border-t border-zinc-700/50">
                    <p className="text-zinc-400 text-sm">
                        Selected: {MONTH_NAMES[selectedSlot.month - 1]} {selectedSlot.day},{" "}
                        {formatSlotTime(selectedSlot.start)} – {formatSlotTime(selectedSlot.end)}
                    </p>
                    <p className="text-zinc-500 text-xs mt-1">(More functionality to be added)</p>
                </div>
            )}
        </div>
    );
}
