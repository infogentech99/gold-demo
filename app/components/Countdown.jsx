export default function () {
    return (
        <>
          <section className="w-full min-h-267.5 bg-[#EDEDED] bg-[url('/assets/countdown_bg.png')] bg-cover bg-center bg-no-repeat md:bg-cover md:min-h-675">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-2 md:gap-6 text-[#280F56] place-items-center">
            <h2 className="text-2xl md:text-5xl text-center pt-10 md:pt-80 font-jacques"> THE COUNTDOWN BEGINS <br/> <span className="md:text-4xl">11</span>8D  <span className="md:text-4xl">11</span>H <sub className="md:text-5xl">47</sub>M </h2>
            <p className="text-xs md:text-2xl text-center py-2 font-jacques">
              Mittal family is excited that you are able to join us in celebrating what <br/> we hope will be one of the happiest days of our lives.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-25 md:gap-60 text-[#280F56] place-items-center text-center"> 
            <div>
              <p className="text-base md:text-2xl text-center font-jacques">Links</p>
              <p className="text-xs md:text-lg tracking-tight pt-1 md:pt-3 font-jacques">Venue location</p>
              <p className="text-xs md:text-base font-jacques">RSVP</p>
              <p className="text-xs md:text-base font-jacques">Instagram</p>
            </div>
            <div>
              <p className="text-base md:text-2xl text-center font-jacques">Links</p>
              <p className="text-xs md:text-lg tracking-tight pt-1 md:pt-3 font-jacques">The invite</p>
              <p className="text-xs md:text-base font-jacques">Bride and Groom</p>
              <p className="text-xs md:text-base font-jacques">Things to know</p>
            </div>
            </div>
          </div>
        </section>
        </>
    );
}