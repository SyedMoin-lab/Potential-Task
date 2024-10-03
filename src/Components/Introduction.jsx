import SocialMedia from "@/Shared/SocialMedia";
import Image from "next/image";

const Introduction = () => {
  return (
    <div id="home">
      <div className="hero ">
        <div className="flex flex-col lg:flex-row-reverse items-center lg:items-start">
          <div className="relative ">
            <Image
              src="/My.png"
              className="max-w-xs sm:max-w-sm md:max-w-md rounded-full"
              alt="MY Photo"
              width={500}
              height={500}
            />
            <div className="absolute top-8 sm:top-12 md:top-16 right-10 sm:right-20 md:right-[90px]">
              <Image src="/Overlap.png" alt="Overlap" width={310} height={70} />
            </div>

            <div className="py-5 lg:flex justify-center hidden ">
              <SocialMedia />
            </div>
          </div>
          <div className="  px-4 lg:px-8">
            <h3 className="text-xl sm:text-2xl font-semibold">
              Hi I am <br />
              <span className="text-3xl sm:text-4xl text-[#FD6F00]">
                Muhammad Umair
              </span>
            </h3>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold w-full flex flex-col">
              UI & UX <br />
              <span className="text-center lg:text-left">Designer</span>
            </h1>
            <p className="py-4 sm:py-6 text-base sm:text-lg md:text-xl">
              Welcome to my portfolio! I specialize in creating visually
              stunning and user-friendly websites that help businesses thrive
              online. With a keen eye for detail and a deep understanding of
              design principles, I craft unique digital experiences tailored to
              meet your brands needs.
            </p>
            <a href="https://your-link-here.com" target="_blank" rel="noopener noreferrer">
  <button className="text-white btn bg-[#FD6F00] hover:bg-[#fd6e00cc] px-4 py-2 sm:px-6 sm:py-3 rounded-md">
    Hire Me
  </button>
</a>

          </div>
        </div>
      </div>
    </div>
  );
};
export default Introduction;
