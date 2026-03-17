export default function () {
    return(
        <>
         <section className=" relative w-full min-h-1100 bg-[url('/assets/bg_eventlist5.jpg')] md:bg-[url('/assets/deskbg_eventlist_t.png')] bg-cover bg-center md:bg-center bg-no-repeat md:bg-cover md:min-h-[4000px] bg-[#EDE4D9] py-10 md:py-0 overflow-hidden">
        <div className="grid grid-cols-2 grid-rows-[100px_480px_480px_480px_800px] gap-y-0 p-2 py-0 md:grid-cols-3 md:grid-rows-[160px_850px_850px_1500px] md:gap-y-2 md:p-4">
          <div className="grid col-span-2 md:col-span-3 text-center place-items-center">
          <div className="flex flex-row">
          {/* Heading */}
          <h2 className="text-center text-3xl md:text-4xl font-semibold text-[#BD8C1C] font-Jacques mt-20">
            On the following events
          </h2>
          </div>
          </div>
        <div className="grid col-span-2 row-span-3 md:row-span-2 md:col-span-3 text-center justify-items-center items-start pt-10 py-0 px-6 md:pt-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-14 gap-y-12 md:gap-x-16 md:gap-y-12 place-items-center mt-28">
        {/* Image Wrapper */}
        <div className="relative md:w-75">
        {/* Image */}
        <img src="assets/haldi.png" alt="Haldi" width={300} height={500} className="w-full h-auto"  />
        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-start text-center px-3 pt-20 md:pt-18 gap-0 md:gap-0 leading-tight bg-black/10">
          <h2 className="font-Jacques font-medium tracking-tight text-3xl md:text-[34px] text-[#b85606] italic">Haldi</h2>
          <p className="font-Jacques text-[14px]  md:text-[14px]  leading-snug text-[#2d544e]">at our New Address:</p>
          <p className="font-Jacques text-[14px]  md:text-[14px]  leading-snug font-semibold text-[#416156]">Embassy Towers,</p>
          <p className="font-Jacques text-[12px]  md:text-[12px]  leading-snug text-[#2d544e] ">37 Dr Abani Dutta Road, Mumbai.</p>
          <div className="my-1 md:my-1.5 flex items-center justify-center">
            <span className="h-px w-28 md:w-35 bg-[#2d544e] opacity-80"></span>
          </div>
          <p className="font-Jacques text-[14px] md:text-[14px] font-semibold text-[#b85606]">25th August, 2024</p>
          <p className="font-Jacques text-[12px]  md:text-[14px] text-[#2d544e]">1 pm Onwards</p>
          <div className="my-1 md:my-1.5 flex items-center justify-center">
            <span className="h-px w-28 md:w-35 bg-[#2d544e] opacity-80"></span>
          </div>
        </div>
        </div>

        {/* Image Wrapper */}
        <div className="relative md:w-75">
        {/* Image */}
        <img src="assets/mehendi.png" alt="Mehendi" width={300} height={500} className="w-full h-auto" />
        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-start text-center px-3 pt-20 md:pt-18 gap-0 md:gap-0 leading-tight bg-black/10">
          <h2 className="font-Jacques font-medium tracking-tight text-3xl md:text-[34px] text-[#395c35] italic">Mehendi</h2>
          <p className="font-Jacques text-[14px] md:text-[14px] text-[#2d544e]">at our New Address:</p>
          <p className="font-Jacques text-[14px] md:text-[14px] font-semibold text-[#416156] leading-snug">Embassy Towers,</p>
          <p className="font-Jacques text-[12px] md:text-[12px] text-[#2d544e] leading-snug px-4">37 Dr Abani Dutta Road, Mumbai.</p>
          <div className="my-1 md:my-1.5 flex items-center justify-center">
            <span className="h-px w-28 md:w-37 bg-[#2d544e] opacity-80"></span>
          </div>
          <p className="font-Jacques text-[14px] md:text-[14px] font-semibold text-[#416156]">28th August, 2024</p>
          <p className="font-Jacques text-[12px] md:text-[14px] text-[#2d544e]">1 pm Onwards</p>
          <div className="my-1 md:my-1.5 flex items-center justify-center">
            <span className="h-px w-28 md:w-37 bg-[#2d544e] opacity-80"></span>
          </div>
        </div>
        </div>

        {/* Image Wrapper */}
        <div className="relative md:w-75">
        {/* Image */}
        
        <img src="assets/cocktail.png" alt="Cocktail" width={300} height={500} className="w-full h-auto" />
        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-start text-center px-3 pt-28 md:pt-20 gap-0 md:gap-0 leading-tight bg-black/10">
          <h2 className="font-Jacques font-medium tracking-tight leading-none px-12 text-3xl md:px-2 md:text-[34px] text-[#f7bc68] italic md:leading-relax">Cocktail Party</h2>
          <p className="font-Jacques text-[14px] md:text-[14px] text-[#e3d8da] mt-1"> at our New Address: </p>
          <p className="font-Jacques text-[14px] md:text-[14px] font-semibold text-[#dbcfc5] leading-snug">Embassy Towers,</p>
          <p className="font-Jacques text-[12px] md:text-[12px] text-[#e3d8da] px-4">37 Dr Abani Dutta Road, Mumbai.</p>
          <div className="my-1 md:my-1.5 flex items-center justify-center">
            <span className="h-px w-28 md:w-37 bg-[#f7bc68] opacity-80"></span>
          </div>
          <p className="font-Jacques text-[14px] md:text-[14px] font-semibold text-[#f7bc68]">31st August, 2024</p>
          <p className="font-Jacques text-[12px] md:text-[12px] text-[#e3d8da]">7 pm Onwards</p>
          <div className="my-1 md:my-1.5 flex items-center justify-center">
            <span className="h-px w-28 md:w-37 bg-[#f7bc68] opacity-80"></span>
          </div>
        </div>
        </div>

        {/* Row 2 */}
        {/* Image Wrapper */}
        <div className="relative md:w-75">
        {/* Image */}
        <img src="assets/pre-wedding-party.png" alt="Pre Wedding Party" width={300} height={500} className="w-full h-auto" />
        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-start text-center px-3 pt-24 md:pt-18 gap-0 md:gap-0 leading-tight bg-black/10">
          <h2 className="font-Jacques font-medium tracking-tight text-3xl md:text-[34px] text-[#ad4d15] italic leading-7">Pre-Wedding <br/> Party</h2>
          <p className="font-Jacques text-[14px] md:text-[14px] text-[#b34666] mt-2">at our New Address:</p>
          <p className="font-Jacques text-[14px] md:text-[14px] font-semibold text-[#b84b6a] leading-snug">Embassy Towers,</p>
          <p className="font-Jacques text-[12px] md:text-[12px] text-[#b34666] px-4">37 Dr Abani Dutta Road, Mumbai.</p>
          <div className="my-1 md:my-0.5 flex items-center justify-center">
            <span className="h-px w-28 md:w-38 bg-[#b34666] opacity-80"></span>
          </div>
          <p className="font-Jacques text-[14px] md:text-[14px] font-semibold text-[#b84b6a]">29th August, 2024</p>
          <p className="font-Jacques text-[12px] md:text-[12px] text-[#b34666]">7 pm Onwards</p>
          <div className="my-1 md:my-0.5 flex items-center justify-center">
            <span className="h-px w-28 md:w-38 bg-[#b34666] opacity-80"></span>
          </div>
        </div>
        </div>
        {/* Image Wrapper */}
        <div className="relative md:w-75">
        {/* Image */}
        <img src="assets/shaadi_s.png" alt="Shaadi Party" width={300} height={500} className="w-full h-auto" />
        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-start text-center px-3 pt-16 md:pt-14 gap-0 md:gap-0 leading-tight bg-black/10">
          <h2 className="font-Jacques font-medium tracking-tight text-3xl md:text-[34px] text-[#a16828] italic leading-none">Shaadi</h2>
          <p className="font-Jacques text-[12px] md:text-[12px] text-[#665742]">at our New Address:</p>
          <p className="font-Jacques text-[12px] md:text-[12px] font-semibold text-[#665742] leading-snug">Embassy Towers,</p>
          <p className="font-Jacques text-[12px] md:text-[12px] text-[#665742] px-2">123 Anywhere St., Any City, ST 12345</p>
          <div className="my-0.5 md:my-1 flex items-center justify-center">
            <span className="h-px w-31 md:w-38 bg-[#665742] opacity-80"></span>
          </div>
          <p className="font-Jacques text-[12px] md:text-[14px] font-semibold text-[#ba5827]">Saturday, 21 June 2025</p>
          <p className="font-Jacques text-[12px] md:text-[12px] text-[#665742]">7 pm Onwards</p>
          <div className="my-0.5 md:my-1 flex items-center justify-center">
            <span className="h-px w-31 md:w-38 bg-[#665742] opacity-80"></span>
          </div>
        </div>
        </div>
        {/* Image Wrapper */}
        <div className="relative md:w-75 ">
        <div className="grid place-items-center">  
        {/* Image */}
        <img src="assets/reception.png" alt="Reception" width={300} height={500} className="w-full h-auto" />
        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-start text-center px-3 pt-18 md:pt-16 gap-0 md:gap-0 leading-tight bg-black/10">
          <h2 className="font-Jacques font-medium tracking-tight text-[32px] md:text-[34px] text-[#a16828] italic leading-none">Reception</h2>
          <p className="font-Jacques text-[10px] md:text-[12px] text-[#665742] mt-1">at our New Address:</p>
          <p className="font-Jacques text-[10px] md:text-[12px] font-semibold text-[#665742] leading-snug">Embassy Towers,</p>
          <p className="font-Jacques text-[8px] md:text-[12px] text-[#665742] px-2">123 Anywhere St., Any City, ST 12345</p>
          <div className="my-0.5 md:my-1 flex items-center justify-center">
            <span className="h-px w-31 md:w-38 bg-[#665742] opacity-80"></span>
          </div>
          <p className="font-Jacques text-[12px] md:text-[14px] font-semibold text-[#ba5827]">30th August, 2024</p>
          <p className="font-Jacques text-[12px] md:text-[12px] text-[#665742]">7 pm Onwards</p>
          <div className="my-0.5 md:my-1 flex items-center justify-center">
            <span className="h-px w-31 md:w-38 bg-[#665742] opacity-80"></span>
          </div>
        </div>
        </div>

        </div>

        </div>
        </div>
        

        {/* Full-width Image Section */}
        {/* CTA */}
          <div className="grid place-items-center items-end col-span-2 md:col-span-3 text-center lg:mt-450 mt-680"> 
          <div className="pb-6 flex flex-col items-center text-center text-[#1A2860]">
          <h4 className="leading-none xl:leading-relax text-sm sm:text-lg md:text-lg lg:text-xl xl:text-3xl text-[#1A2860] px-30 sm:px-36 md:px-40 lg:px-40 xl:px-49 font-Jacques">
              See the <br/> route
          </h4>
          <p className="text-xs sm:text-sm md:text-base xl:text-xl  text-[#1A2860] font-Jacques">Click to open the map</p>
          <img src="/assets/circle-img.png" alt="icon" width={30} height={30} className="mx-auto pt-1 sm:pt-1 md:pt-1 lg:pt-1 xl:pt-1 w-5 sm:w-6 md:w-7 lg:w-8 xl:w-10"/>        
          </div>
          </div>
          
        </div>

        </section>
        </>
    );
}