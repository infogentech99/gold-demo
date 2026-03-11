import Image from "next/image";
import RoseHeroTemp from "./components/RoseHeroTemp";
import EventList from "./components/EventList";
import MeetBride from "./components/MeetBride";
import Countdown from "./components/Countdown";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f2e5d9] overflow-hidden">
    <RoseHeroTemp/>
    <EventList/>
    <MeetBride/>
    <Countdown/>
    </div>
  );
}
