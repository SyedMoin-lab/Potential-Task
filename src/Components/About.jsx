import Image from "next/image";

const About = () => {
  return (
    <div id="about">
      <div className="hero ">
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          <div className="relative ">
            <Image
              src="/Mamun.png"
              className="max-w-xs sm:max-w-sm md:max-w-md rounded-full"
              alt="MY Photo"
              width={500}
              height={500}
            />
            <div className="absolute top-8 sm:top-12 md:top-16 right-10 sm:right-20 md:right-[90px]">
              <Image src="/Overlap.png" alt="Overlap" width={310} height={70} />
            </div>
          </div>
          <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold">
              About Me
            </h2>
            <p className="py-4 sm:py-5 md:py-6 text-base sm:text-lg md:text-xl">
              Web designer passionate about creating beautiful, functional
              websites. I specialize in responsive design and intuitive user
              experiences. My goal is to bring your vision to life with
              creativity and precision. Lets build something amazing together!bvfd
            </p>
            <div className="flex flex-col gap-4">
              <div>
                <div className="text-xl sm:text-2xl font-semibold">UX</div>
                <progress
                  className="progress progress-error w-full"
                  value="90"
                  max="100"
                ></progress>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-semibold">
                  Website Design
                </div>
                <progress
                  className="progress progress-error w-full"
                  value="85"
                  max="100"
                ></progress>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-semibold">
                  App Design
                </div>
                <progress
                  className="progress progress-error w-full"
                  value="95"
                  max="100"
                ></progress>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-semibold">
                  Graphic Design
                </div>
                <progress
                  className="progress progress-error w-full"
                  value="90"
                  max="100"
                ></progress>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
