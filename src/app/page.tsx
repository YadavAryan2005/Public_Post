import About from "@/components/About";
import Contact from "@/components/Contact";
import Homepage from "@/components/Homepage";

export default function Home() {
  return (
    <main className='bg-[#0d0c22] px-2 mb-16'>
      <Homepage />
      <About />
      <Contact />
    </main>
  );
}
