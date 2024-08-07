import Image from "next/image";
import contact from "../images/contact.png";
function Contact() {
  return (
    <div
      id='contact'
      className=' bg-[#0d0c22] mt-20 flex flex-col w-full rounded-xl p-2 pt-8 md:pt-2 pb-0 lg:min-h-[98vh]  justify-center min-h-[500px]'
    >
      <div className='max-w-[2000px] xl:px-[150px] md:px-[30px] lg:px-[90px] sm:px-[20px] justify-center items-center sm:flex'>
        <div className='sm:w-1/2 '>
          <Image src={contact} width={500} alt='contact img' />
        </div>
        <form className='sm:w-1/2 text-serif text-white flex flex-col gap-5'>
          <input
            className='p-2 rounded-md outline-none text-black font'
            type='text'
            name=''
            id=''
            placeholder='Name and Sername'
          />
          <input
            className='p-2 rounded-md outline-none text-black font'
            type='email'
            name=''
            id=''
            placeholder='Email Address'
          />
          <input
            className='p-2 rounded-md outline-none text-black font'
            type='number'
            name=''
            id=''
            placeholder='Enter Number'
          />
          <textarea
            rows={4}
            className='p-2 rounded-md outline-none text-black font'
            name=''
            id=''
            placeholder=' Message'
          ></textarea>
          <input
            className='cursor-pointer p-2 rounded-md bg-blue-500'
            type='submit'
            value='Send'
          />
        </form>
      </div>
    </div>
  );
}

export default Contact;
