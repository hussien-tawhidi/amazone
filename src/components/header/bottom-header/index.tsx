"use client";

import { LuMenu } from "react-icons/lu";
import { signOut, useSession, signIn } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import { StateProps } from "../../../../types";
import { removeUser } from "@/redux/slices/postsSlices";

const BottomHeader = () => {
  const { data: session } = useSession();

  const dispatch = useDispatch();
  const { userInfo } = useSelector((state: StateProps) => state.next);

  const handleSignOut = () => {
    signOut();
    dispatch(removeUser());
  };

  return (
    <div className='w-full h-10 bg-amazon_light text-sm text-white px-4 flex items-center'>
      <p className='flex items-center gap-1 h-8 px-2 border border-transparent hover:border-slate-300 cursor-pointer duration-300'>
        <LuMenu /> All
      </p>
      <p className='hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-slate-300 cursor-pointer duration-300'>
        Todays Deals
      </p>
      <p className='hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-slate-300 cursor-pointer duration-300'>
        Customer Service
      </p>
      <p className='hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-slate-300 cursor-pointer duration-300'>
        Registery
      </p>
      <p className='hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-slate-300 cursor-pointer duration-300'>
        Gift Cards
      </p>
      <p className='hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-slate-300 cursor-pointer duration-300'>
        Sell
      </p>
      <p className='hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-amazon_yellow text-amazon_yellow cursor-pointer duration-300'>
        {session ? (
          <button onClick={handleSignOut} type='submit'>
            Sign out
          </button>
        ) : (
          <button onClick={() => signIn()} type='submit'>
            Sign in
          </button>
        )}
      </p>
    </div>
  );
};

export default BottomHeader;
