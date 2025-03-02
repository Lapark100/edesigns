import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import galImg from "@/public/images/gallery-img-1.webp"
import galImg2 from "@/public/images/gallery-img-2.webp"
import galImg3 from "@/public/images/gallery-img-3.webp"
import Image from "next/image"

export default function Gallery() {
    return (
        <section className="bg-[#f3f0eb] h-auto">
            <div className="max-w-7xl mx-auto container pb-[66px] px-4">
                {/* Header  */}
                <div className="pt-[66px] space-y-4">
                    <h3 className="uppercase tracking-wide text-[16px] md:text-[18px] font-semibold text-center">
                        Get Inspired
                    </h3>

                    <h2 className="text-[28px] md:text-[48px] font-semibold text-center leading-tight">
                        Explore Our Various Designs
                    </h2>
                </div>

                {/* Gallery Slides */}
                <div className="pt-10 pb-10 md:pt-16">
                    <Carousel>
                        <CarouselContent>
                            <CarouselItem className="flex justify-center items-center">
                                <div className="w-full flex flex-col items-center justify-center text-center gap-6">
                                    <Image
                                        width={0}
                                        height={0}
                                        src={galImg}
                                        alt="gallery-img-1"
                                        className="w-full md:w-[80%] h-[300px] md:h-[751px] object-cover rounded-xl"
                                    />
                                </div>
                            </CarouselItem>

                            <CarouselItem className="flex justify-center items-center">
                                <div className="w-full flex flex-col items-center justify-center text-center gap-6">
                                    <Image
                                        width={0}
                                        height={0}
                                        src={galImg2}
                                        alt="gallery-img-2"
                                        className="w-full md:w-[80%] h-[300px] md:h-[751px] object-cover rounded-xl"
                                    />
                                </div>
                            </CarouselItem>

                            <CarouselItem className="flex justify-center items-center">
                                <div className="w-full flex flex-col items-center justify-center text-center gap-6">
                                    <Image
                                        width={0}
                                        height={0}
                                        src={galImg3}
                                        alt="gallery-img-3"
                                        className="w-full md:w-[80%] h-[300px] md:h-[751px] object-cover rounded-xl"
                                    />
                                </div>
                            </CarouselItem>
                        </CarouselContent>

                        {/* Adjusted positioning for responsiveness */}
                        <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 md:left-10" />
                        <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 md:right-10" />
                    </Carousel>
                </div>

                {/* Button */}
                <div className="flex justify-center items-center">
                    <button className="h-[40px] w-[152px] uppercase font-semibold border border-[#e59400] bg-[#e59400] text-black hover:bg-[#304561] hover:text-white transition-colors duration-300 rounded-full">
                        Get Started
                    </button>
                </div>
            </div>
        </section>
    )
}
