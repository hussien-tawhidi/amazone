"use client";

import Link from "next/link";

interface Props {
  favoriteData: [];
}

const Favorite = ({ favoriteData }: Props) => {
  return (
    <Link
      href='/my-favorite'
      className='text-xs relative text-gray-100 flex flex-col justify-center px-2 border border-transparent hover:border-slate-300 cursor-pointer duration-300 h-[70%]'>
      <p>Market</p>
      <p className='text-white font-bold'>& favorite</p>
      {favoriteData.length > 0 && (
        <span className='absolute right-2 top-2 w-4 h-4 border-[1px] border-gray-400 flex items-center justify-center text-xs text-amazon_yellow'>
          {favoriteData.length}
        </span>
      )}
    </Link>
  );
};

export default Favorite;
