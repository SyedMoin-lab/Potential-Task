import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="flex justify-between text-4xl text-black gap-5">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
    </div>
  );
};

export default SocialMedia;
