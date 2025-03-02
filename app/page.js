
import Hero from "@/components/hero";
import Features from "@/components/features";
import Price from "@/components/price";
import CarouselTestimonial from "@/components/carousel";
import Gallery from "@/components/gallery";
import Partnership from "@/components/partnerships";
import Guarantee from "@/components/guarantee";


export default function Home() {
  return (
    <div className="">
      <main className="">
   
     <Hero />
     <Features />
     <Price />
     <CarouselTestimonial />
     <Gallery />
     <Partnership /> 
     <Guarantee />
   
      </main>
      
    </div>
  );
}
