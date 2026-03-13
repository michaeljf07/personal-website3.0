import Calendar from "../components/meet/Calendar";
import BackgroundImage from "../components/BackgroundImage";

export default function MeetingsPage() {
    return (
        <div className="h-screen gap-4">
            <BackgroundImage />
            <h1 className="text-3xl font-bold text-center my-12">Book a Meeting With Me</h1>
            <Calendar />
        </div>
    );
}
