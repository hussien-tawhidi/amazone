"use client"
import Image from "next/image";
import carticon from "../../../images/cartIcon.png";
import Link from "next/link";

interface Props {
  cartNumb:[]
}

const Cart = ({ cartNumb }:Props) => {
  return (
    <Link
      href='/cart'
      className='flex items-center px-2 border border-transparent hover:border-slate-300 cursor-pointer duration-300 h-[70%] relative'>
      <Image
        src={carticon}
        alt='cart icon'
        className='w-auto object-cover h-8'
      />
      <span className='absolute text-amazon_yellow text-sm top-2 left-[29px]'>
        {cartNumb ? cartNumb.length : 0}
      </span>
    </Link>
  );
};

export default Cart;
