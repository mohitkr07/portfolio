import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
export default function Home() {
  return (
    <div className="flex flex-col">
      <div style={{ height: "calc(100vh - 4rem)" }} className=" flex flex-col">
        <Hero />
      </div>
      <Projects />
      <Contact />
    </div>
  );
}
