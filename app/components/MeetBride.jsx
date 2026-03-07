export default function () {
    return (
        <>
       
        {/* WEDDING TEMPLATE THREE */}
        <section className=" w-full min-h-[1344px] bg-[url('/assets/meetbride_bg.png')] bg-cover bg-center bg-no-repeat md:bg-cover md:min-h-[3355px]">
        <div className="grid grid-cols-1 grid-rows-[230px_200px_570px_120px_150px] gap-2 p-4 md:grid-cols-2 md:grid-rows-[1300px_1200px_200px_200px] md:gap-y-24 md:p-4">
        <div className="grid place-items-center items-end md:items-center md:col-span-1">
  
          {/* Stack container */}
          <div className="relative grid place-items-center">

          {/* Center Image */}
          <img src="/assets/bride_img.png" alt="couple" width={120} height={120}
          className="rounded-full object-cover border-t-8 border-white z-10 md:w-75 md:h-75 "/>

          {/* Left Image */}
          <img src="assets/meet_leftimg.png" alt="flowers" width={60} height={120} className="absolute left-1/2 z-20 -translate-x-[140%]
           -translate-y-0 md:-translate-x-[135%] md:-translate-y-0 md:w-35 md:h-65 "/>

          {/* Right Image */}
          <img src="assets/meet_rightimg.png" alt="flowers" width={60} height={120} className="absolute left-1/2 z-20 translate-x-[40%]
           -translate-y-0 md:translate-x-[35%] md:-translate-y-0 md:w-35 md:h-65 "/>

        </div>
        </div>
            {/* Right (text) */}
            <div className="grid justify-items-center items-start text-center md:text-left md:items-center md:place-items-start">  
            <div className="flex flex-col mb-0 md:mb-0">  
            <h2 className="text-[#BD8C1C] text-base md:text-2xl  tracking-widest leading-tight md:leading-loose font-jacques"> MEET THE </h2>
            <h2 className="text-[#BD8C1C] text-2xl md:text-4xl  leading-none md:leading-tight md:tracking-wide font-jacques"> BRIDE AND <br /> GROOM </h2>
            <p className="text-[#BD8C1C] text-xs md:text-base 2xl:text-2xl leading-snug px-3.5 md:px-0 2xl:px-0 font-jacques">
              We are both so delighted that you are able to join us in celebrating what we hope will be one of the happiest days 
              of our lives. The affection shown to us by so many people since our roka has been incredibly moving, and has touched us 
             both deeply. We would like to take this opportunity to thank everyone most sincerely for their kindness.We are
             looking forward to see you at the wedding.
            </p>
            </div>
            </div>
          

          <div className="grid justify-items-center items-end text-center md:col-span-2">
              <div className="flex flex-col mt-0 md:mt-0"> 
              <h3 className="text-[#1A2860] text-xl md:text-4xl leading-tight font-jacques">See the <br/> route</h3>
              <p className="text-[#1A2860] text-[11px] md:text-base font-jacques">Click to message on Whatsapp</p>
              <div className="mt-2 flex justify-center">
                <img src="assets/circle-img.png" width={25} height={25} alt="circle" className="md:w-[40px] md:h-[40px]" />
              </div>
              </div>
          </div>
          <div className="grid place-items-center text-center md:col-span-2 mt-4">
              <h3 className="text-[#1A2860] text-xl md:text-4xl font-jacques">THINGS TO <br/> KNOW</h3>
              <p className="text-[#1A2860]  text-[9px] md:text-base text-center font-jacques">
                To help you feel at ease and enjoy every moment of the celebrations, <br/> we've gathered a few thoughtful details we'd love 
                for you to know before the big day.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 place-items-center text-center gap-8 text-[#1A2860] md:col-span-2">
                <div className="flex flex-row gap-0"> 
              <div className="">
                <img src="assets/instagram.png" alt="instagram" width={20} height={30} className="md:w-[60px] md:h-[60px] mx-auto" />
                <h4 className="text-xs md:text-lg font-jacques">HASHTAG</h4>
                <p className="text-[8px] md:text-lg 2xl:text-3xl font-jacques">While posting photos on social media please use the hashtag - #abkan</p>
              </div>
              <div className="">
                <img src="assets/temperature.png" alt="weather" width={21.4} height={30} className="md:w-[60px] md:h-[60px] mx-auto" />
                <h4 className="text-xs md:text-lg font-jacques">WEATHER</h4>
                <p className="text-[8px] md:text-lg 2xl:text-3xl font-jacques">It will be mostly sunny with temperature reaching up to 28 degrees at the venue</p>
              </div>
              <div className="">
                <img src="assets/person.png" alt="staff" width={16.3} height={30} className="md:w-[60px] md:h-[60px] mx-auto" />
                <h4 className="text-xs md:text-lg font-jacques">STAFF</h4>
                <p className="text-[8px] md:text-lg 2xl:text-3xl font-jacques">We recommend the nearby hotel called Bhola Bhawan near the venue for the staff members</p>
              </div>
              <div className="">
                <img src="assets/car.png" alt="parking" width={29.4} height={30} className="md:w-[60px] md:h-[60px] mx-auto" />
                <h4 className="text-xs md:text-lg font-jacques">PARKING</h4>
                <p className="text-[8px] md:text-lg 2xl:text-3xl font-jacques">Valet parking for all our guests will be available at the venue</p>
              </div>
              </div>
            </div>
          
        </div>
        </section></>
    );

}