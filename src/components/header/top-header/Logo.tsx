"use client";

import Image from "next/image";
import logo from "../../../images/logo.png";
import Link from "next/link";

interface Props {}

const Logo = () => {
  return (
    <Link
      href='/'
      className='px-2 border border-transparent hover:border-slate-400 cursor-pointer duration-300 flex items-center justify-center h-[70%]'>
      <Image
        src={logo}
        alt='logo'
        className='w-28 object-cover cursor-pointer mt-1'
      />
    </Link>
  );
};

export default Logo;
