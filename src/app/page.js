import About from "@/Components/About";
import Contact from "@/Components/Contact";
import Footer from "@/Components/Footer";
import Introduction from "@/Components/Introduction";
import Nav from "@/Components/Nav";
import Projects from "@/Components/Projects";
import Service from "@/Components/Service";
import Testimonial from "@/Components/Testimonial";

export default function Home() {
  return (
    <main className="select-none">
      <div className="container mx-auto flex flex-col gap-20">
        <Nav />
        <Introduction />
        <About />
        <Service />
        <Projects />
        <Testimonial />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
