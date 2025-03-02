import Image from "next/image"
import aboutImg from "@/public/images/about-img-1.avif"
import aboutImg2 from "@/public/images/about-img-2.avif"
import aboutImg3 from "@/public/images/about-img-3.avif"

export default function AboutUsFeature() {
  return (
    <section className="bg-white h-auto">
      <div className="max-w-7xl mx-auto container py-16">
        <div className="md:flex gap-8">
        <div className="pt-[51px] pb-[49px] space-y-8 flex flex-col items-center text-center md:items-start md:text-left">
  <h3 className="text-[48px] max-w-[420px] font-[400]">
    What is my interior design style?
  </h3>
  <p className="max-w-[420px] text-[16px] font-[400]">
    Not sure whether your style is Bohemian, Glam, or Midcentury Modern? Our home decor style quiz helps you uncover your unique design style.
  </p>
  <p className="max-w-[420px] text-[16px] font-[400]">
    Not sure whether your style is Bohemian, Glam, or Midcentury Modern? Our home decor style quiz helps you uncover your unique design style.
  </p>
  <div className="flex flex-col items-center md:items-start py-4">
    <button className="w-[128px] h-[40px] rounded-full uppercase font-semibold bg-[#e59400] text-black mt-4">
      Shop Now
    </button>
  </div>
</div>


            <div className="flex gap-4">
            <div className="flex gap-4 pt-[40px]">
            <Image width={405} height={525} src={aboutImg} alt="test-img" className=""/>
          </div>

          <div className="flex gap-4 pt-[40px]">
            <Image width={405} height={525} src={aboutImg2} alt="test-img" />
          </div>
            </div>
         
        </div>

        <div className="pt-[72px] md:flex gap-16">
        <Image 
  src={aboutImg3} 
  alt="test-img"
  className="w-[578px] h-[361px] md:w-[784px] md:h-[490px]" 
/>

<div className="space-y-8 flex flex-col items-center text-center md:items-start md:text-left">
  <div className="pt-[40px]">
    <h3 className="text-[48px] max-w-[420px] font-[400]">
      What is my interior design style?
    </h3>
    <p className="max-w-[420px] text-[16px] font-[400]">
      Not sure whether your style is Bohemian, Glam, or Midcentury Modern? Our home decor style quiz helps you uncover your unique design style.
    </p>
    <div className="flex flex-col items-center md:items-start py-4">
      <button className="w-[128px] h-[40px] rounded-full uppercase font-semibold bg-[#e59400] text-black mt-4">
        Shop Now
      </button>
    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  )
}
