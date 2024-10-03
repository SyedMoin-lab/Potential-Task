import SectionTitle from "@/Shared/SectionTitle";
import Image from "next/image";

const Service = () => {
  const services = [
    {
      icon: "/service1.png",
      service: "UI/UX",
      description:
        "Designing clean, user-friendly interfaces that make your digital products intuitive and engaging.",
    },
    {
      icon: "/service2.png",
      service: "Web Design ",
      description:
        "Building responsive, visually appealing websites that deliver exceptional user experiences .",
    },
    {
      icon: "/service3.png",
      service: "App Design",
      description:
        "Designing sleek, user-friendly apps that offer seamless and engaging mobile experiences.",
    },
    {
      icon: "/service4.png",
      service: "Graphic Design",
      description:
        "Creating visually striking designs that communicate your brand's message with clarity.",
    },
  ];
  return (
    <div id="services">
      <SectionTitle
        title={"Services"}
        SubTitle={
          "Discover Our Expertise: Comprehensive Services Tailored to Meet Your Needs. Explore How We Can Help Elevate Your Business."
        }
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 m-5">
        {services.map((service) => (
          <div key={service.service} className="p-5 bg-[#F8F8F8] rounded-xl">
            <div
              className={`${
                service.icon === "/service3.png" ? "max-w-11" : "max-w-20"
              }`}
            >
              <Image
                src={service.icon}
                alt={service.service}
                width={70}
                height={80}
              />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold mt-4">
              {service.service}
            </h3>
            <p className="text-lg sm:text-xl mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
