import { signIn } from "@/auth";
import Image from "next/image";
import oauth from "../images/Oauth.png";
import github from "../images/icons8-github.svg";
import google from "../images/icons8-google.svg";
export async function SignIn() {
  return (
    <div className='bg-[#0d0c22] mt-20 min-h-[90vh] flex flex-col w-full p-2 pt-8 md:pt-2 pb-0 lg:min-h-[98vh]  justify-center min-h-[500px]'>
      <div className='max-w-[2000px] xl:px-[150px] md:px-[30px] lg:px-[90px] sm:px-[20px] justify-center items-center flex'>
        <div className='bg-white rounded-md p-10 text-white font-serif text-xl flex flex-col gap-2 justify-center items-center'>
          <Image src={oauth} width={200} alt='Oauth' className='rounded-md' />
          <form
            action={async () => {
              "use server";
              const data: any = await signIn("github");
              console.log(await data.json());
            }}
          >
            <button
              type='submit'
              className='flex gap-3 items-center bg-purple-600 rounded-md p-3 transition duration-500 hover:bg-purple-700'
            >
              <Image src={github} width={30} alt='github' />
              Signin with GitHub
            </button>
          </form>
          <form
            action={async () => {
              "use server";
              const data: any = await signIn("google");
              console.log(await data.json());
            }}
          >
            <button
              type='submit'
              className='flex gap-3 items-center bg-purple-600 rounded-md p-3 transition duration-500 hover:bg-purple-700'
            >
              <Image src={google} width={30} alt='google' />
              Signin with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
