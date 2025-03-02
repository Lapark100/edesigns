import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import testImg from "@/public/images/test-img-1.png"
import testImg2 from "@/public/images/test-img-2.png"
import testImg3 from "@/public/images/test-img-3.png"
import Image from "next/image"

export default function CarouselTestimonial() {
    return (
        <section className="bg-white h-auto flex items-center justify-center py-10 md:h-[531px]">
            <div className="max-w-7xl mx-auto container px-4 w-full relative overflow-hidden">
                <Carousel>
                    <CarouselContent>
                        <CarouselItem className="flex justify-center items-center">
                            <div className="w-full flex flex-col items-center justify-center text-center gap-4 md:gap-6">
                                <p className="max-w-[90%] text-[20px] md:text-[34px] leading-normal">
                                    "Unlike [another design service] though, we actually loved everything we saw from Havenly."
                                </p>
                                <Image 
                                    width={40} height={40} 
                                    src={testImg} alt="test-img" 
                                    className="rounded-full md:w-[50px] md:h-[50px]"
                                />
                            </div>
                        </CarouselItem>

                        <CarouselItem className="flex justify-center items-center">
                            <div className="w-full flex flex-col items-center justify-center text-center gap-4 md:gap-6">
                                <p className="max-w-[90%] text-[20px] md:text-[34px] leading-normal">
                                    "Unlike [another design service] though, we actually loved everything we saw from Havenly."
                                </p>
                                <Image 
                                    width={40} height={40} 
                                    src={testImg2} alt="test-img" 
                                    className="rounded-full md:w-[50px] md:h-[50px]"
                                />
                            </div>
                        </CarouselItem>

                        <CarouselItem className="flex justify-center items-center">
                            <div className="w-full flex flex-col items-center justify-center text-center gap-4 md:gap-6">
                                <p className="max-w-[90%] text-[20px] md:text-[34px] leading-normal">
                                    "Unlike [another design service] though, we actually loved everything we saw from Havenly."
                                </p>
                                <Image 
                                    width={40} height={40} 
                                    src={testImg3} alt="test-img" 
                                    className="rounded-full md:w-[50px] md:h-[50px]"
                                />
                            </div>
                        </CarouselItem>
                    </CarouselContent>

                    {/* Fix button positioning */}
                    <CarouselPrevious className="absolute left-1 top-1/2 transform -translate-y-1/2 md:left-10" />
                    <CarouselNext className="absolute right-1 top-1/2 transform -translate-y-1/2 md:right-10" />
                </Carousel>
            </div>
        </section>
    )
}
