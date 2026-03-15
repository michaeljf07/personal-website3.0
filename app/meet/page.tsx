"use client";

import Calendar from "../components/meet/Calendar";
import BackgroundImage from "../components/BackgroundImage";
import Availability from "../components/meet/Availability";
import { useState, Suspense, Activity } from "react";
import type { SelectedDate } from "../components/meet/types";

export default function MeetingsPage() {
    const [selectedDate, setSelectedDate] = useState<SelectedDate | null>(null);
    return (
        <div className="h-dvh min-h-screen overflow-y-auto pb-12">
            <BackgroundImage />
            <h1 className="text-3xl font-bold text-center text-gray-200 mt-8 mb-4">
                Book a Meeting With Me
            </h1>
            <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />

            <Suspense fallback={<div>Loading...</div>}>
                <Activity mode={selectedDate ? "visible" : "hidden"}>
                    <Availability selectedDate={selectedDate} />
                </Activity>
            </Suspense>
        </div>
    );
}
