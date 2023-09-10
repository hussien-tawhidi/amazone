"use client";

import { SlLocationPin } from "react-icons/sl";
interface Props {}

const Dilevery = () => {
  return (
    <div className='px-2 border border-transparent hover:border-slate-400 cursor-pointer duration-300 items-center justify-center h-[70%] hidden xl:inline-flex gap-1'>
      <SlLocationPin />
      <div className='text-xs'>
        <p>Deliver to</p>
        <p className='text-white font-bold uppercase'>USA</p>
      </div>
    </div>
  );
};

export default Dilevery;
