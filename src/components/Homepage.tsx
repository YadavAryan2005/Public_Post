import { auth } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import brand from "../images/brands.png";
import hero from "../images/hero.gif";
async function Homepage() {
  const session = await auth();
  if (!session) {
    redirect("/login");
  } else {
    console.log(session);
  }
  return (
    <div className='bg-[#0d0c22] mt-20 flex flex-col w-full rounded-xl p-2 pt-8 md:pt-2 pb-0 lg:min-h-[98vh]  justify-center min-h-[500px]'>
      <div className='max-w-[2000px] xl:px-[150px] md:px-[30px] lg:px-[90px] sm:px-[20px] justify-center items-center sm:flex'>
        <div className='sm:w-1/2 text-serif text-white flex flex-col gap-5'>
          <h1 className='text-4xl md:text-6xl lg:text-7xl top-0 flex flex-wrap gap-3  md:flex-col'>
            <p>Creative</p>
            <p> Thoughts</p>
            <p> Agency</p>
          </h1>
          <p className='text-sm text-[#fbfbfbc4]'>
            Welcome to our community. Your posts are public and visible to
            everyone. Share your thoughts openly while adhering to our community
            guidelines for a respectful environment
          </p>
          <div className='font-bold'>
            <Link
              href='#about'
              className='text-black transition duration-700 ease-in-out  bg-white hover:bg-slate-300 rounded-md p-2'
            >
              Learn More
            </Link>
            &nbsp;&nbsp;
            <Link
              href='#contact'
              className='text-black transition duration-700 ease-in-out  bg-white hover:bg-slate-300 rounded-md p-2'
            >
              Contact
            </Link>
          </div>
          <Image src={brand} alt='homepage' className='bottom-0' />
        </div>
        <div className='sm:w-1/2 flex justify-end'>
          <Image src={hero} alt='homepage' />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
