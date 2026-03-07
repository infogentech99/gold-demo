'use client';
import FallingPetals from "./FallingPetals";
export default function RoseHeroTemp({
    groomName = 'Sandeep',
    bride = 'Monika'
}) {
    return (
        <>
            <section className="relative w-full">
                <FallingPetals />

                <picture>
                    {/* Desktop Image */}
                    <source
                        media="(min-width: 768px)"
                        srcSet="/assets/rosetem_hero.webp"
                    />

                    <img
                        src="/assets/rosetem_hero_mobile.png"
                        alt="Wedding Hero"
                        className="w-full h-auto"
                    />
                </picture>

                {/* TEXT OVERLAY */}
                <div className="absolute inset-0 flex flex-col items-center text-center pointer-events-none md:mt-132 mt-24">
                    <img src="/assets/rose_hero_texticon.png" alt="rose_hero_texticon" className="md:w-80 md:mb-4 w-20 mb-2" />
                    <h1 className="text-xl md:text-8xl font-semi-bold text-[#1A2860] uppercase font-Jacques-plain">
                        {groomName}
                    </h1>
                    <h3 className="text-xl md:text-4xl font-semi-bold text-[#1A2860] uppercase font-Jacques-plain border rounded-full py-2 px-4 bg-[#D1D4DF] border-[#D1D4DF]">
                        &
                    </h3>
                    <h2 className="text-xl md:text-8xl font-semi-bold text-[#1A2860] uppercase font-Jacques-plain">
                        {bride}
                    </h2>
                    <img src="/assets/rose_hero_texticon_lower.png" alt="rose_hero_texticon" className="md:w-80 md:mb-4 w-20 mb-2" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 flex flex-col justify-center items-center gap-12 pb-16 px-12">
                    <h2 className="md:text-2xl text-xl text-[#FFEABA] font-Jacques-plain">ॐ श्री गणेशाय नम</h2>
                    <img src="/assets/ganesh.png" alt="Ganesh" className="md:h-40 md:w-35 w-25 h-30" />
                    <h2 className="md:text-3xl text-xl text-[#FFEABA] text-center font-Jacques-plain leading-12">With the heavenly blessings of <br></br>Smt. Lata Devi & Sm. Kamal Kapoor <br></br> and <br></br> Mrs. Reena & Mr. Rajiv Kapoor</h2>
                    <h2 className="md:text-8xl text-4xl text-[#FFEABA] font-Jacques-plain text-center tracking-wider">WE <br></br>INVITE</h2>
                    <h2 className="md:text-3xl text-xl text-[#FFEABA] text-center font-Jacques-plain leading-12">You to join us in the wedding celebrations of <br/>Daughter of <br></br>
                        Mrs. Shalini & Mr. Aakash Mittal,</h2>

                </div>
            </section>
        </>
    );
}