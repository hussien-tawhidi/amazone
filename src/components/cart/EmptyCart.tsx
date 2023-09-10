"use client";
import Link from "next/link";
import { MdOutlineHourglassEmpty } from "react-icons/md";

interface Props {}

const EmptyCart = () => {
  return (
    <div className='bg-white h-64 col-span-5 flex flex-col items-center justify-center py-6 rounded-lg shadow-lg'>
      <h1 className='text-lg font-medium'>You Cart is empty</h1>
      <span className="text-5xl animate-bounce text-gray-700 mt-5">
        <MdOutlineHourglassEmpty />
      </span>
          <Link href='/'>
              <button className="w-52 h-10 bg-amazon_blue text-white rounded-sm text-sm font-semibold hover:bg-amazon_yellow hover:text-black duration-200">go to shopping</button>
      </Link>
    </div>
  );
};

export default EmptyCart;
