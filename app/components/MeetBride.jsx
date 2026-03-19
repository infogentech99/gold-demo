export default function () {
    return (
        <>
       
        {/* WEDDING TEMPLATE THREE */}
        <section className=" w-full min-h-360 bg-[url('/assets/meetbride_bg.png')] bg-cover bg-center bg-no-repeat md:bg-cover md:min-h-[3355px]">
        <div className="grid grid-cols-1 grid-rows-[230px_200px_570px_120px_150px]  p-4 md:grid-cols-2 md:grid-rows-[1300px_1200px_200px_200px] md:gap-y-24 md:p-4">
        <div className="grid place-items-center items-end md:items-center md:col-span-1">
  
          {/* Stack container */}
          <div className="relative grid place-items-center md:mt-0 mt-12">

          {/* Center Image */}
          <img src="/assets/bride_img.png" alt="couple" width={120} height={120}
          className="rounded-full object-cover border-t-8 border-white z-10 md:w-100 md:h-100 w-60 h-65"/>

          {/* Left Image */}
          <img src="assets/meet_leftimg.png" alt="flowers" width={60} height={120} className="absolute left-1/2 z-20 -translate-x-[160%]
           -translate-y-0 md:-translate-x-[160%] md:-translate-y-0 md:w-45 md:h-75 w-30 h-50"/>

          {/* Right Image */}
          <img src="assets/meet_rightimg.png" alt="flowers" width={60} height={120} className="absolute left-1/2 z-20 translate-x-[50%]
           -translate-y-0 md:translate-x-[55%] md:-translate-y-0 md:w-45 md:h-75 w-30 h-50"/>

        </div>
        </div>
            {/* Right (text) */}
            <div className="grid justify-items-center items-start text-center md:text-left md:items-center md:place-items-start md:pr-26">  
            <div className="flex flex-col mb-0 md:mb-0">  
            <h2 className="text-[#BD8C1C] text-base md:text-2xl  tracking-widest leading-tight md:leading-loose font-Jacques md:mt-4 mt-32"> MEET THE </h2>
            <h2 className="text-[#BD8C1C] text-2xl md:text-6xl  leading-none md:leading-tight md:tracking-wide font-Jacques"> BRIDE AND <br /> GROOM </h2>
            <p className="text-[#BD8C1C] text-xs md:text-base 2xl:text-2xl leading-snug px-3.5 md:px-0 2xl:px-0 font-Jacques pt-4">
              We are both so delighted that you are able to join us in celebrating what we hope will be one of the happiest days 
              of our lives. The affection shown to us by so many people since our roka has been incredibly moving, and has touched us 
             both deeply. We would like to take this opportunity to thank everyone most sincerely for their kindness.We are
             looking forward to see you at the wedding.
            </p>
            </div>
            </div>
          

          <div className="grid justify-items-center items-end text-center md:col-span-2">
              <div className="flex flex-col mt-0 md:mt-0"> 
              <h3 className="text-[#1A2860] text-xl md:text-4xl leading-tight font-Jacques">See the <br/> route</h3>
              <p className="text-[#1A2860] text-[11px] md:text-[20px] font-Jacques">Click to message on Whatsapp</p>
              <div className="mt-2 flex justify-center">
                <img src="/assets/circle-img.png" width={25} height={25} alt="circle" className="md:w-10 md:h-10" />
              </div>
              </div>
          </div>
          <div className="grid place-items-center text-center md:col-span-2 mt-4">
              <h3 className="text-[#1A2860] text-xl md:text-4xl font-Jacques">THINGS TO <br/> KNOW</h3>
              <p className="text-[#1A2860]  text-[9px] md:text-[20px] text-center font-Jacques">
                To help you feel at ease and enjoy every moment of the celebrations, <br/> we've gathered a few thoughtful details we'd love 
                for you to know before the big day.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 place-items-center text-center gap-8 text-[#1A2860] md:col-span-2">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-4"> 
              <div className="">
                <img src="assets/instagram.png" alt="instagram" width={20} height={30} className="md:w-[60px] md:h-[60px] w-8 h-8 mx-auto" />
                <h4 className="text-xs md:text-3xl font-Jacques font-medium">HASHTAG</h4>
                <p className="text-[12px] md:text-2xl font-Jacques">While posting photos on <br></br> social media please use <br></br> the hashtag - #abkan</p>
              </div>
              <div className="">
                <img src="assets/temperature.png" alt="weather" width={21.4} height={30} className="md:w-[60px] md:h-[60px] w-8 h-8 mx-auto" />
                <h4 className="text-xs md:text-3xl font-Jacques font-medium">WEATHER</h4>
                <p className="text-[12px] md:text-2xl font-Jacques">It will be mostly sunny with <br></br> temperature reaching up to 28 degrees at the venue</p>
              </div>
              <div className="">
                <img src="assets/person.png" alt="staff" width={16.3} height={30} className="md:w-[60px] md:h-[60px] w-8 h-8 mx-auto" />
                <h4 className="text-xs md:text-3xl font-Jacques font-medium">STAFF</h4>
                <p className="text-[12px] md:text-2xl font-Jacques">We recommend the nearby hotel called Bhola Bhawan near the venue for the staff members</p>
              </div>
              <div className="">
                <img src="assets/car.png" alt="parking" width={29.4} height={30} className="md:w-[80px] md:h-[60px] w-10 h-8 mx-auto" />
                <h4 className="text-xs md:text-3xl font-Jacques font-medium">PARKING</h4>
                <p className="text-[12px] md:text-2xl font-Jacques">Valet parking for all our guests will be available at the venue</p>
              </div>
              </div>
            </div>
          
        </div>
        </section></>
    );

}