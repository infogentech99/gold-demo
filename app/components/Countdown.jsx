"use client";
import { useEffect, useState } from "react";

export default function () {
   const TARGET_DATE = new Date("2026-06-04").getTime();
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
    });

    useEffect(() => {
        const updateCountdown = () => {
            const now = new Date().getTime();
            const diff = TARGET_DATE - now;
            if (diff <= 0) {
                setTimeLeft({ days: 0, hours: 0, minutes: 0 });
                return;
            }
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor(
                (diff % (1000 * 60 * 60)) / (1000 * 60)
            );

            setTimeLeft({ days, hours, minutes });
        };

        updateCountdown(); // first run
        const interval = setInterval(updateCountdown, 60000); // every minute

        return () => clearInterval(interval);
    }, []);
    return (
        <>
          <section className="w-full min-h-267.5 bg-[#EDEDED] bg-[url('/assets/countdown_bg.png')] bg-cover bg-center bg-no-repeat md:bg-cover md:min-h-675">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-2 md:gap-6 text-[#280F56] place-items-center">
            <h2 className="text-2xl md:text-5xl text-center pt-10 md:pt-60 font-Jacques"> THE COUNTDOWN BEGINS  </h2>
             <h2 className="lg:text-[40px] text-2xl text-center text-[#280F56] font-Jacques"> {timeLeft.days}D {timeLeft.hours}H {timeLeft.minutes}M</h2>
            
            <p className="lg:text-[22px] text-[20px] text-[#280F56] text-center lg:px-100 md:px-25 px-10 font-Jacques">
                        Our families are excited that you are able to join us in celebrating what we hope will be one of the happiest days of our lives.
                    </p>
                    <div className="flex flex-col-1 gap-4 justify-center items-center mt-4">
                       <a href="https://www.instagram.com/theinvitearc/" target="_blank"><img src="/assets/instagram.png" alt="" className="h-10 w-10"/></a>
                    </div>
                    <p className="lg:text-[16px] text-xl text-[#280F56] text-center font-Jacques">
                        © <a href="https://invitearc.com/" target="_blank">InviteArc</a> 2026 </p>
            
            
          </div>
        </section>
        </>
    );
}