import Image from "next/image";
import about from "../images/about.png";
function About() {
  return (
    <div
      id='about'
      className='bg-[#0d0c22] mt-20 flex flex-col w-full rounded-xl p-2 pt-8 md:pt-2 pb-0 lg:min-h-[98vh]  justify-center min-h-[500px]'
    >
      <div className='max-w-[2000px] xl:px-[150px] md:px-[30px] lg:px-[90px] sm:px-[20px] justify-center items-center sm:flex'>
        <div className='sm:w-1/2 text-serif text-white flex flex-col gap-5'>
          <h1>About Agency</h1>
          <h1 className='text-3xl md:text-4xl lg:5xl top-0'>
            We create digital ideas that are bigger,bolder braver and better.
          </h1>
          <div className='flex flex-wrap gap-5 text-xs'>
            <span>
              <h1 className='text-blue-500 text-3xl'>10 K+</h1>
              <p>Year of Experience</p>
            </span>
            <span>
              <h1 className='text-blue-500 text-3xl'>234 K+</h1>
              <p>Project Reached</p>
            </span>
            <span>
              <h1 className='text-blue-500 text-3xl'>5 K+</h1>
              <p>Services and plugins</p>
            </span>
          </div>
        </div>
        <div className='sm:w-1/2 flex justify-end'>
          <Image src={about} width={500} alt='homepage' />
        </div>
      </div>
    </div>
  );
}

export default About;
