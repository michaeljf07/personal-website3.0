"use client";

import { useState, useMemo, Fragment } from "react";
import { DateTime } from "luxon";
import { ChevronLeftIcon, ChevronRightIcon } from "../icons";
import type { SelectedDate } from "./types";

export default function Calendar({
    selectedDate,
    setSelectedDate,
}: {
    selectedDate: SelectedDate;
    setSelectedDate: (date: SelectedDate) => void;
}) {
    const [monthOffset, setMonthOffset] = useState(0);

    const date: DateTime = useMemo(
        () => DateTime.local().startOf("month").minus({ months: monthOffset }),
        [monthOffset],
    );

    const month = useMemo(() => {
        const startingIndex = date.weekday === 7 ? 0 : date.weekday;
        const daysInMonth: number = date.daysInMonth ?? 30;

        const calendar: (null | number)[][] = [
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
        ];

        // Fill the calendar with the days of the month
        let usedDaysThisWeek = startingIndex;
        let weeksUsed = 0;
        let day = 1;
        while (day <= daysInMonth) {
            calendar[weeksUsed][usedDaysThisWeek] = day;
            day += 1;
            if (usedDaysThisWeek === 6) {
                usedDaysThisWeek = 0;
                weeksUsed += 1;
            } else {
                usedDaysThisWeek += 1;
            }
        }

        return calendar;
    }, [date]);

    const today = useMemo(() => {
        const now = DateTime.now();
        return { day: now.day, month: now.month, year: now.year };
    }, []);

    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const months = [
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

    return (
        <div className="w-4xl mx-auto rounded-xl bg-zinc-900/35 p-6 shadow-xl border border-zinc-700/50 relative z-10">
            <div className="text-center mb-4 text-lg flex items-center justify-between gap-2">
                <button
                    type="button"
                    onClick={() => setMonthOffset((m) => m + 1)}
                    className="inline-flex items-center justify-center rounded p-1 hover:bg-white/10 transition-colors">
                    <ChevronLeftIcon className="size-6 shrink-0 cursor-pointer text-gray-200" />
                </button>
                <span className="font-semibold">
                    {months[date.month - 1]} {date.year}
                </span>
                <button
                    type="button"
                    onClick={() => setMonthOffset((m) => m - 1)}
                    className="inline-flex items-center justify-center rounded p-1 hover:bg-white/10 transition-colors">
                    <ChevronRightIcon className="size-6 shrink-0 cursor-pointer text-gray-200" />
                </button>
            </div>
            <div className="overflow-x-auto">
                <div>
                    <div className="grid grid-cols-7">
                        {weekDays.map((day) => {
                            return (
                                <div key={day} className="text-gray-200 text-center mb-1 text-sm">
                                    {day}
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="flex flex-col grow min-h-full mb-12">
                    {month.map((week, weekIndex) => {
                        return week.every((x) => x === null) ? (
                            <Fragment key={weekIndex} />
                        ) : (
                            <div key={weekIndex} className="flex grow">
                                {week.map((day, dayIndex) => {
                                    const isToday =
                                        day !== null &&
                                        day === today.day &&
                                        date.month === today.month &&
                                        date.year === today.year;
                                    const isSelected =
                                        day !== null &&
                                        selectedDate &&
                                        day === selectedDate.day &&
                                        date.month === selectedDate.month &&
                                        date.year === selectedDate.year;
                                    const pastDay =
                                        day !== null &&
                                        date.year <= today.year &&
                                        (date.month < today.month ||
                                            (date.month === today.month && day < today.day));

                                    const leftEndDay = dayIndex === 0; // Leftmost day of the week
                                    const rightEndDay = dayIndex === week.length - 1; // Last day of the week
                                    const topEndDay = weekIndex === 0; // First week of the month
                                    const bottomEndDay = weekIndex === month.length - 1; // Last week of the month

                                    return (
                                        <button
                                            type="button"
                                            key={`${weekIndex}-${dayIndex}`}
                                            disabled={day === null}
                                            onClick={() =>
                                                day !== null &&
                                                !pastDay &&
                                                setSelectedDate({
                                                    day,
                                                    month: date.month,
                                                    year: date.year,
                                                })
                                            }
                                            className={`min-h-24 w-full flex items-center justify-center border-solid border-b border-r border-zinc-700/40 transition-colors
                                                ${
                                                    day
                                                        ? isToday
                                                            ? "bg-blue-700/30 hover:bg-blue-600/40 cursor-pointer"
                                                            : pastDay
                                                              ? "bg-zinc-900/30 cursor-default"
                                                              : "bg-zinc-800/60 hover:bg-zinc-700/40 cursor-pointer"
                                                        : "cursor-default"
                                                } ${leftEndDay && "border-l"} ${
                                                    rightEndDay && "border-r"
                                                } ${topEndDay && "border-t"} ${
                                                    bottomEndDay && "border-b"
                                                }`}>
                                            {day !== null && (
                                                <span
                                                    className={`flex size-8 items-center justify-center rounded-full text-sm font-medium ${
                                                        isSelected
                                                            ? "bg-blue-500 text-white"
                                                            : "text-white"
                                                    }`}>
                                                    {day}
                                                </span>
                                            )}
                                        </button>
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
