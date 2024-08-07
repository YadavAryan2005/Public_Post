import About from "@/components/About";
import BlogForm from "@/components/BlogForm";
import Contact from "@/components/Contact";
import Homepage from "@/components/Homepage";

export default function Home() {
  return (
    <main className="bg-[#0d0c22] px-2">
      <Homepage/>
    <About/>
    <Contact/>
    </main>
  );
}
