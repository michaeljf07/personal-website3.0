import { google } from "googleapis";
import { DateTime } from "luxon";

const WORKING_HOUR_START = 9; // 9am
const WORKING_HOUR_END = 17; // 5pm
const SLOT_DURATION_MINUTES = 30;
const TIMEZONE = "America/Los_Angeles";

type BusySlot = { start: string; end: string };

// getWeekBounds(date) determines the start and end of the week for a given date
function getWeekBounds(date: { day: number; month: number; year: number }) {
    const dt = DateTime.fromObject(
        { year: date.year, month: date.month, day: date.day },
        { zone: TIMEZONE },
    );
    const weekStart = dt.startOf("week").minus({ days: 1 }); // Sunday
    const weekEnd = weekStart.plus({ days: 7 }).endOf("day");
    return { weekStart, weekEnd };
}

function slotOverlapsBusy(slotStart: DateTime, slotEnd: DateTime, busy: BusySlot[]): boolean {
    const slotStartMs = slotStart.toMillis();
    const slotEndMs = slotEnd.toMillis();
    const bufferMs = 1000 * 60 * 15; // 15 minutes

    for (const b of busy) {
        const busystart = new Date(b.start).getTime() - bufferMs; // buffer the start time by 15 minutes
        const busyend = new Date(b.end).getTime() + bufferMs; // buffer the end time by 15 minutes
        if (slotStartMs < busyend && slotEndMs > busystart) return true;
    }
    return false;
}

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const day = searchParams.get("day");
    const month = searchParams.get("month");
    const year = searchParams.get("year");

    if (!day || !month || !year) {
        return Response.json({ error: "day, month, year required" }, { status: 400 });
    }

    const date = {
        day: parseInt(day, 10),
        month: parseInt(month, 10),
        year: parseInt(year, 10),
    };
    if (isNaN(date.day) || isNaN(date.month) || isNaN(date.year)) {
        return Response.json({ error: "Invalid date params" }, { status: 400 });
    }

    try {
        const auth = new google.auth.JWT({
            email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
            key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
            scopes: ["https://www.googleapis.com/auth/calendar.readonly"],
        });

        const calendar = google.calendar({ version: "v3", auth });
        const { weekStart, weekEnd } = getWeekBounds(date);

        const response = await calendar.freebusy.query({
            requestBody: {
                timeMin: weekStart.toISO(),
                timeMax: weekEnd.toISO(),
                timeZone: TIMEZONE,
                items: [{ id: process.env.GOOGLE_CALENDAR_ID! }],
            },
        });

        const calendarData = response.data.calendars?.[process.env.GOOGLE_CALENDAR_ID!];
        const rawBusy = (calendarData?.busy ?? []) as Array<{
            start?: string | null;
            end?: string | null;
        }>;
        const busy: BusySlot[] = rawBusy
            .filter((b): b is { start: string; end: string } => Boolean(b?.start && b?.end))
            .map((b) => ({ start: b.start, end: b.end }));

        const slots: { start: string; end: string; day: number; month: number; year: number }[] =
            [];

        for (let d = 0; d < 7; d++) {
            const dayStart = weekStart.plus({ days: d });

            for (let h = WORKING_HOUR_START; h < WORKING_HOUR_END; h++) {
                for (let m = 0; m < 60; m += SLOT_DURATION_MINUTES) {
                    const slotStart = dayStart.set({
                        hour: h,
                        minute: m,
                        second: 0,
                        millisecond: 0,
                    });
                    const slotEnd = slotStart.plus({ minutes: SLOT_DURATION_MINUTES });

                    if (slotStart < DateTime.now().setZone(TIMEZONE)) continue;

                    if (!slotOverlapsBusy(slotStart, slotEnd, busy)) {
                        slots.push({
                            start: slotStart.toISO()!,
                            end: slotEnd.toISO()!,
                            day: dayStart.day,
                            month: dayStart.month,
                            year: dayStart.year,
                        });
                    }
                }
            }
        }

        return Response.json({
            success: true,
            slots,
            weekStart: weekStart.toISO(),
            weekEnd: weekEnd.toISO(),
        });
    } catch (error: unknown) {
        console.error("Availability API Error:", error);
        const message = error instanceof Error ? error.message : "Failed to fetch availability";
        return Response.json(
            { error: "Failed to fetch availability", details: message },
            { status: 500 },
        );
    }
}
