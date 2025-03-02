import priceImg from "@/public/images/price-img1.png";
import Image from "next/image";

export default function Price() {
  return (
    <section className="bg-[#e0dfaf] h-auto">
      <div className="max-w-7xl mx-auto container py-16 space-y-4 px-4 md:px-0">
        {/* Header */}
        <div className="w-full md:w-2/3 py-8 text-center md:text-left">
          <h3 className="max-w-[857px] text-[32px] md:text-[48px]">
            Our interior design services are tailored to your space, style, and budget.
          </h3>
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
          <div className="w-full md:w-1/2 md:mt-8">
            <div className="flex flex-col md:flex-row gap-4 items-center md:items-start">
              <div className="bg-white w-[80%] md:w-[300px] h-[462px] pt-[34px] px-[38px] flex flex-col items-center text-center">
                <h3 className="md:max-w-[190px] h-[100px] text-[32px] md:text-[42px] text-black font-[400] md:mb-2">
                  Design Online
                </h3>
                <p className="w-[234px] h-[95px] text-[14px] md:text-[16px] md:pt-8">
                  Your designer will work with you 1:1 to bring your vision to life, complete with a 3D rendering of your actual space.
                </p>
                <div className="mt-4 md:mt-14 leading-1">
                  <p className="max-w-[224px] p-0 m-0">Starting at</p>
                  <p className="text-[28px] md:text-[35px] font-[400] text-black">$159</p>
                  <button className="h-[47px] w-[223px] mt-2 uppercase font-semibold border border-[#e59400] bg-[#e59400] text-black hover:bg-[#304561] hover:text-white transition-colors duration-300 rounded-full">
                    Get Started Online
                  </button>
                </div>
              </div>

              <div className="bg-white w-[80%] md:w-[300px] h-[462px] pt-[34px] px-[38px] flex flex-col items-center text-center">
                <h3 className="md:max-w-[190px] h-[100px] text-[32px] md:text-[42px] text-black font-[400] mb-2">
                  Design In-Person
                </h3>
                <p className="w-[234px] h-[95px] text-[14px] md:text-[16px] md:pt-8">
                  Our in-person offering allows you to collaborate with your designer 1:1 in your home to bring your vision to life.
                </p>
                <div className="mt-8 md:mt-14 leading-1">
                  <p className="max-w-[224px] p-0 m-0">First room at</p>
                  <p className="text-[28px] md:text-[35px] font-[400] text-black">$499</p>
                  <button className="h-[47px] w-[223px] uppercase font-semibold border border-[#e59400] bg-[#e59400] mt-2 text-black hover:bg-[#304561] hover:text-white transition-colors duration-300 rounded-full">
                    Get Started In-Person
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src={priceImg}
              alt="price-img"
              width={500}
              height={330}
              className="w-[300px] h-[200px] md:w-[866px] md:h-[572px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
