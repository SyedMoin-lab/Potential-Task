import SocialMedia from "@/Shared/SocialMedia";
import Image from "next/image";

const Footer = () => {
  return (
    <section>
      <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
        <div className="mb-4">
          <Image src="/logo.png" alt="Description" width={200} height={70} />
        </div>
        <nav className="grid grid-flow-col gap-4">
          <ul className="flex flex-wrap justify-center gap-5">
            <li>
              <a
                href="#home"
                className="nav-text text-xs font-bold uppercase tracking-widest text-slate-700 hover:text-[#FD6F00] focus-visible:text-[#FD6F00]"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="nav-text text-xs font-bold uppercase tracking-widest text-slate-700 hover:text-[#FD6F00] focus-visible:text-[#FD6F00]"
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="nav-text text-xs font-bold uppercase tracking-widest text-slate-700 hover:text-[#FD6F00] focus-visible:text-[#FD6F00]"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="nav-text text-xs font-bold uppercase tracking-widest text-slate-700 hover:text-[#FD6F00] focus-visible:text-[#FD6F00]"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="nav-text text-xs font-bold uppercase tracking-widest text-slate-700 hover:text-[#FD6F00] focus-visible:text-[#FD6F00]"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="nav-text text-xs font-bold uppercase tracking-widest text-slate-700 hover:text-[#FD6F00] focus-visible:text-[#FD6F00]"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <nav className="mt-5">
          <div className="grid grid-flow-col gap-4">
            <SocialMedia />
          </div>
        </nav>
      </footer>
      <aside className="bg-[#545454] py-5 text-center text-white">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-[#FD6F00]">Mumair</span> All Rights Reserved,
          Inc.
        </p>
      </aside>
    </section>
  );
};

export default Footer;
