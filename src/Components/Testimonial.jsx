"use client";
import SectionTitle from "@/Shared/SectionTitle";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonial = () => {
  const feedbacks = [
    {
      id: 1,
      photo: "/Ellipse 10.png",
      name: "Mr. Shajid",
      comment:
        "Great service and support! The team was incredibly responsive to all of my questions and concerns. They went above and beyond to ensure that the project was completed to my .",
    },
    {
      id: 2,
      photo: "/Ellipse 11.png",
      name: "Mr. Mahi",
      comment:
        "Amazing experience, highly recommend! The attention to detail and the level of professionalism shown by the team were outstanding. From the initial consultation to the final .",
    },
    {
      id: 3,
      photo: "/Ellipse 10.png",
      name: "Mr. Atik",
      comment:
        "Very satisfied with the results. The team took the time to understand my needs and delivered a product that exceeded my expectations. Their creativity and technical skills .",
    },
    {
      id: 4,
      photo: "/Ellipse 11.png",
      name: "Mr. Majid",
      comment:
        "Professional and efficient work. The team was a pleasure to work with, always providing prompt and clear communication. They met all deadlines ad were very flexible .",
    },
  ];

  return (
    <div id="testimonials">
      <SectionTitle
        title={"Testimonials"}
        SubTitle={
          "Client Testimonials: Hear from Those Who've Experienced Our Services Firsthand. Discover the Impact We've Made on Their Success."
        }
      />
      <div>
        <Swiper
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {feedbacks.map((feedback) => (
            <SwiperSlide key={feedback.id}>
              <div className="flex flex-col items-center pb-10 bg-[#F8F8F8] mb-10 mx-5">
                <div className="w-full px-3 sm:px-10">
                  <div className="flex md:items-center justify-between py-4 flex-col md:flex-row">
                    <div className="pr-4">
                      <Image
                        src={feedback.photo}
                        alt={feedback.name}
                        width={180}
                        height={180}
                        className="rounded-full p-1 border-2 border-blue-600"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-base sm:text-lg my-2">
                        <span className="text-[#FD6F00] text-xl font-bold">
                          "
                        </span>{" "}
                        {feedback.comment}{" "}
                        <span className="text-[#FD6F00] text-xl font-bold">
                          "
                        </span>
                      </p>
                      <h4>
                        <span className="font-bold">Name</span> <br />{" "}
                        {feedback.name}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
