import { google } from "googleapis";

export async function GET() {
    try {
        // 1. Initialize the Auth Client using the Options Object
        const auth = new google.auth.JWT({
            email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
            key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
            scopes: ["https://www.googleapis.com/auth/calendar.readonly"],
            subject: undefined, // Optional: only used for domain-wide delegation
        });

        const calendar = google.calendar({ version: "v3", auth });

        // 2. Fetch the next 10 events
        const response = await calendar.events.list({
            calendarId: process.env.GOOGLE_CALENDAR_ID,
            timeMin: new Date().toISOString(),
            maxResults: 10,
            singleEvents: true,
            orderBy: "startTime",
        });

        return Response.json({ success: true, events: response.data.items });
    } catch (error: any) {
        console.error("Google Calendar Error:", error);
        return Response.json(
            {
                error: "Failed to connect",
                details: error.message,
            },
            { status: 500 },
        );
    }
}
