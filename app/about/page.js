import AboutUsFeature from "./components/about-us-feature";

export default function AboutUs () {
return (
  <>
<section
 className="h-[748px] flex items-center"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/images/about-hero.avif')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
<div className="max-w-7xl mx-auto container h-full flex flex-col justify-center items-center text-white py-16">
        
        {/* First Header */}
        <div className="text-center space-y-4">
         
          <h2 className="max-w-[900px] text-[50px] leading-normal  md:text-[87px] md:leading-none font-[600] uppercase">
          Havenly Interior {" "}
            <span className="text-[#a9c2e0]">Designers</span>
          </h2>
          <h2 className="hidden md:block text-[24px] font-[400]">
          Meet the perfect designer for your space and style.
          </h2>
        </div>
        <button className="w-[128px] h-[40px] rounded-full uppercase font-semibold bg-white text-black mt-4">
            Shop Now
        </button>
        </div>
        
</section>
<AboutUsFeature />
  </>


)
}