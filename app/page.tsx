"use client";
import Image from "next/image";
import RoseHeroTemp from "./components/RoseHeroTemp";
import EventList from "./components/EventList";
import MeetBride from "./components/MeetBride";
import Countdown from "./components/Countdown";
import { useEffect, useRef, useState } from "react";


export default function Home() {
   const audioRef = useRef<HTMLAudioElement | null>(null);
  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);

  const startMusic = async () => {
    const audio = audioRef.current;
    if (!audio || started) return;

    try {
      audio.volume = 0.3;
      await audio.play();
      setStarted(true);
      setPlaying(true);
    } catch { }
  };

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      try {
        await audio.play();
        setPlaying(true);
      } catch { }
    }
  };

  // First user interaction (mobile + desktop)
  useEffect(() => {
    const handler = () => startMusic();

    window.addEventListener("click", handler);
    window.addEventListener("touchstart", handler);

    return () => {
      window.removeEventListener("click", handler);
      window.removeEventListener("touchstart", handler);
    };
  }, [started]);

  return (
    <div className="min-h-screen bg-[#f2e5d9] overflow-hidden">
      <button
        onClick={() => {
          started ? toggleMusic() : startMusic();
        }}
        className="fixed bottom-4 right-4 z-50 bg-[#FF35A1] text-white p-3 rounded-xl text-xl"
      >
        {playing ? "⏸" : "▶"}
      </button>

      <audio ref={audioRef} src="/assets/background_song.mp3" loop preload="auto" playsInline />
      
    <RoseHeroTemp/>
    <EventList/>
    <MeetBride/>
    <Countdown/>
    <div className="fixed top-5 left-5 z-50">
  <a href="https://invitearc.com/">
    <button className="flex items-center gap-3 border-white border-2 bg-white/0 backdrop-blur text-white px-6 py-3 rounded-full shadow-lg cursor-pointer">    
      <span className="text-3xl leading-none">←</span>
      <span className="text-[16px] font-semibold">
        Exit Preview
      </span>
    </button>
  </a>
</div>
    </div>
  );
}
