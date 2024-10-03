import SectionTitle from "@/Shared/SectionTitle";

const Contact = () => {
  return (
    <div id="contact">
      <SectionTitle
        title={"Lets Design Together"}
        SubTitle={
          "Get in Touch: Reach Out to Us for Inquiries, Collaborations, or Support. We’re Here to Help and Look Forward to Connecting with You!"
        }
      />
      <div className="flex flex-col sm:flex-row justify-center items-center my-10 px-5">
        <input
          type="email"
          placeholder="Enter Your Email"
          required
          className="text-xl px-3 py-2 rounded-xl focus:border-[#FD6F00] border border-[#AFAFAF] bg-[#F8F8F8] sm:mr-3 max-w-xl w-full mb-4 sm:mb-0"
        />
        <button className="text-white btn bg-[#FD6F00] hover:bg-[#fd6e00cc] w-full sm:w-auto">
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default Contact;
