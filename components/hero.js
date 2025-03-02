export default function Hero() {
  return (
    <section
      className=" h-[600px] md:h-[748px] flex items-center"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/images/havenly-hero.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* hero header */}
      <div className="max-w-7xl mx-auto container h-full flex flex-col justify-between items-center text-white py-16">
        
        {/* First Header */}
        <div className="text-center space-y-4">
          <h3 className="capitalize text-[18px] font-normal tracking-wide">
            PRESIDENTS DAY SALE
          </h3>
          <h2 className="max-w-[900px] text-[60px] md:text-[87px] leading-none font-[600] uppercase">
            Once-a-Year Deals{" "}
            <span className="text-[#a9c2e0]">You Can’t Miss</span>
          </h2>
        </div>

        {/* Second Header (15% Off) */}
        <div className="text-center flex flex-col items-center gap-2 leading-none">
          <p className="tracking-wide text-[18px] font-[400] m-0 p-0 uppercase">up to</p>
          <h3 className="font-[DM_Serif_Display] capitalize text-[70px] md:text-[99px]">
            15% Off
          </h3>
          <p className="tracking-wide text-[18px] font-[400] m-0 p-0 uppercase">
            Furniture and Decor
          </p>
          <button className="w-[128px] h-[40px] rounded-full uppercase font-semibold bg-white text-black mt-4">
            Shop Now
        </button>
        </div>
       
        
      </div>
    </section>
  );
}
