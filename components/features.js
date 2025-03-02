export default function Features() {
  return (
    <section className="bg-white h-auto pb-16">
      <div className="max-w-7xl mx-auto container px-4">
        {/* Features Header */}
        <div className="py-16">
          <h3 className="uppercase text-center font-semibold text-[16px] md:text-[18px]">
            How Havenly Works
          </h3>
        </div>

        <div className="space-y-16">
          {/* Feature Item */}
          <div className="flex flex-col items-center text-center md:flex-row md:text-left md:space-x-16 md:w-full">
            <p className="text-[24px] font-semibold md:text-[34px]">01</p>

            <div className="space-y-4 w-full md:w-full">
              <h3 className="text-[24px] font-normal md:text-[34px]">
                Match with one of our talented designers and get inspired.
              </h3>
              <p className="text-[16px] font-[400] md:w-full pb-8">
                With 10 years of experience in all 50 states and 100,000+ designs, we’ll help you hone your style, get inspired, and realize your design dreams for your specific space.
              </p>
            </div>

            <div className="w-full md:w-full h-[326px] rounded-lg flex space-x-2">
              <div
                className="w-1/2 h-full rounded-tl-lg rounded-bl-lg"
                style={{
                  backgroundImage: `url('/images/features-img1.webp')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="flex flex-col w-1/2 space-y-2">
                <div
                  className="h-1/2 rounded-tr-lg rounded-br-lg"
                  style={{
                    backgroundImage: `url('/images/features-img8.webp')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <div
                  className="h-1/2 rounded-tr-lg rounded-br-lg"
                  style={{
                    backgroundImage: `url('/images/features-img9.webp')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center md:flex-row md:text-left md:space-x-16 md:w-full">
            <p className="text-[24px] font-semibold md:text-[34px]">02</p>

            <div className="space-y-4 w-full md:w-full">
              <h3 className="text-[24px] font-normal md:text-[34px]">
                Collaborate 1:1 with your designer to create your perfect space.
              </h3>
              <p className="text-[16px] font-[400] md:w-full pb-8">
                Let your designer guide you to a design that meets your functional needs and suits your unique style. See it come to life with a 3D rendering of the design in your actual space.
              </p>
            </div>

            <div
              className="w-full md:w-full h-[326px] rounded-lg"
              style={{
                backgroundImage: `url('/images/features-img2.webp')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center md:flex-row md:text-left md:space-x-16 md:w-full">
            <p className="text-[24px] font-semibold md:text-[34px]">03</p>

            <div className="space-y-4 w-full md:w-full">
              <h3 className="text-[24px] font-normal md:text-[34px]">
                Bring your design home with ease.
              </h3>
              <p className="text-[16px] font-[400] md:w-full pb-8">
                Our designers source from 100+ home brands so no two spaces are ever alike. Leverage Havenly’s proprietary platform with a simple consolidated checkout and never overpay with our price guarantee.
              </p>
            </div>

            <div className="w-full md:w-full h-[326px] flex rounded-lg">
              <div
                className="w-1/2 h-full rounded-tl-lg rounded-bl-lg"
                style={{
                  backgroundImage: `url('/images/feature-img15.webp')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div
                className="w-1/2 h-full rounded-tr-lg rounded-br-lg"
                style={{
                  backgroundImage: `url('/images/feature-img16.webp')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
