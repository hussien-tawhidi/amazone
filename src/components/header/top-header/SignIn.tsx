"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { signIn, useSession } from "next-auth/react";
import { addUser } from "@/redux/slices/postsSlices";
import { BiCaretDown } from "react-icons/bi";
import { StateProps } from "../../../../types";

const SignIn = () => {
  const { data: session } = useSession();

  const dispatch = useDispatch();
  const { userInfo } = useSelector((state: StateProps) => state.next);

  useEffect(() => {
    if (session) {
      dispatch(
        addUser({
          name: session?.user?.name,
          email: session?.user?.email,
          image: session?.user?.image,
        })
      );
    }
  }, [session, dispatch]);

  return (
    <div className='text-xs text-gray-100 flex flex-col justify-center px-2 border border-transparent hover:border-slate-300 cursor-pointer duration-300 h-[70%]'>
      {userInfo ? (
        <div className='flex items-center px-2 gap-2'>
          <Image
            src={userInfo?.image}
            alt={userInfo?.name}
            width={30}
            height={30}
            className='object-cover rounded-full'
          />
          <div>
            <p> {userInfo?.name} </p>
            <p className='text-white font-bold flex items-center'>
              Account $ Lists{" "}
              <span>
                <BiCaretDown />
              </span>
            </p>
          </div>
        </div>
      ) : (
        <button onClick={() => signIn()} type='submit' className="flex flex-col ">
          <p> Hello, SignIn </p>
          <p className='text-white font-bold flex items-center'>
            Account $ Lists{" "}
            <span>
              <BiCaretDown />
            </span>
          </p>
        </button>
      )}
    </div>
  );
};

export default SignIn;
