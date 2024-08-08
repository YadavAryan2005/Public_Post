"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Aryan123 from "../images/Aryan123.png";
const navLinks = [
  { name: "Home", link: "/" },
  { name: "About", link: "/#about" },
  { name: "Contact", link: "/#contact" },
  { name: "Post", link: "/blog" },
];
function Nav() {
  const { data: session, status } = useSession();
  const [Open, isOpen] = useState(false);
  return (
    <>
      <div className='w-full text-white bg-slate-800 p-5 z-20  fixed  top-0 overflow-hidden'>
        <div className='max-w-[2000px] xl:px-[150px] md:px-[30px]  lg:px-[90px] sm:px-[20px] justify-between items-center flex'>
          <span className='flex font-mono justify-center items-center'>
            <Image
              src={Aryan123}
              alt='logo'
              width={50}
              height={50}
              className='cursor-pointer top-0'
            />
            Public_Thoughts
          </span>
          <ul className='gap-4 hidden sm:flex'>
            {navLinks.map((Links) => {
              return (
                <Link
                  href={Links.link}
                  key={Links.name}
                  className={`  rounded-full px-5`}
                >
                  <li>{Links.name}</li>
                </Link>
              );
            })}
            {status === "authenticated" ? (
              <li
                className='cursor-pointer flex gap-2'
                onClick={() => signOut()}
              >
                <img
                  src={(session?.user?.image as string) || " "}
                  width={30}
                  height={30}
                  alt='profile'
                  className='rounded-full'
                />
                Logout
              </li>
            ) : (
              <Link href={"/login"}>
                <li>login</li>
              </Link>
            )}
          </ul>
          {Open ? (
            <div
              onClick={() => isOpen((prev) => !prev)}
              className='sm:hidden cursor-pointer font-bold flex w-5'
            >
              X
            </div>
          ) : (
            <div className='sm:hidden flex-col md:hidden'>
              <div
                className='cursor-pointer w-8 flex flex-col gap-1 '
                onClick={() => isOpen((prev) => !prev)}
              >
                <hr className='border-2' />
                <hr className='border-2' />
                <hr className='border-2' />
              </div>
            </div>
          )}
        </div>
      </div>
      {Open && (
        <ul className='sm:hidden fixed p-5 z-20  w-full flex flex-col justify-center items-center bg-[#0d0c22c9] backdrop-blur-lg  gap-1 text-white'>
          {navLinks.map((Links) => {
            return (
              <Link
                href={Links.link}
                key={Links.name}
                onClick={() => isOpen((prev) => !prev)}
                className={`${
                  "/" +
                    window.location.href.split("/").at(-1)?.toLowerCase() ===
                    Links.link && "bg-white text-black w-full text-center"
                } rounded-md px-5 py-3`}
              >
                <li className='w-full'>{Links.name}</li>
              </Link>
            );
          })}
          {status === "authenticated" ? (
            <li className='cursor-pointer flex gap-2' onClick={() => signOut()}>
              <img
                src={(session?.user?.image as string) || " "}
                width={30}
                height={30}
                alt='profile'
                className='rounded-full'
              />
              Logout
            </li>
          ) : (
            <Link href={"/login"}>
              <li>login</li>
            </Link>
          )}
        </ul>
      )}
    </>
  );
}

export default Nav;
