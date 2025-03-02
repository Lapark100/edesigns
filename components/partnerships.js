export default function Partnership() {
    return (
        <section className="bg-[#e8e5de] h-auto md:h-[620px] flex flex-col md:flex-row">
            {/* Text Container */}
            <div className="w-full md:w-1/2 flex justify-center md:block">
                <div className="max-w-7xl mx-auto container px-6 md:px-0">
                    {/* Text Content */}
                    <div className="pt-12 md:pt-[107px] space-y-4 md:pl-[17rem] text-center md:text-left">
                        <p className="text-[14px] font-semibold tracking-wide text-black">
                            Our Partners in Style
                        </p>
                        <p className="max-w-[450px] text-[16px] leading-snug mx-auto md:mx-0">
                            Having a hard time finding the perfect piece for your home? We’ve got you. Our designers thoughtfully source products from your favorite brands (tailored to your style and budget).
                        </p>

                        {/* Brand List */}
                        <div className="space-y-4 pt-2 pb-6 md:pb-0 border-b w-[70%] md:w-[70%]  border-black inline-block">
                            <p className="text-black text-[28px] md:text-[38px]">
                                Interior Define
                            </p>

                            <p className="text-black text-[28px] md:text-[38px]">
                                Crate & Barrel
                            </p>

                            <p className="text-black text-[28px] md:text-[38px]">
                                Burrow
                            </p>

                            <p className="text-black text-[28px] md:text-[38px]">
                                Anthropologie
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Image Container */}
            <div
                className="w-full md:w-1/2 h-[300px] md:h-full"
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/images/our-partners.jpg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            ></div>
        </section>
    );
}
