"use client";

import { SiMediamarkt } from "react-icons/si";
import FormattedAmount from "../products/FormattedAmount";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { StateProps, StoreProduct } from "../../../types";
import { signIn } from "next-auth/react";

const Payment = () => {
  const { userInfo } = useSelector((state: StateProps) => state.next);

  const { productData } = useSelector((state: any) => state.next);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    let amt = 0;
    productData.map((item: StoreProduct) => {
      amt += item.price * item.quantity;
      return;
    });
    setTotalAmount(amt);
  }, [productData]);

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex gap-2'>
        <span className='bg-green-600 rounded-full p-1 h-6 w-6 text-sm text-white flex items-center justify-center mt-1'>
          <SiMediamarkt />
        </span>
        <p className='text-sm'>
          Your order qualifies for Free shipping by choosing this option at
          checkout. see details ...
        </p>
      </div>
      <p className='flex items-center justify-between px-2 font-semibold'>
        Total:{" "}
        <span className='font-bold text-xl'>
          <FormattedAmount amount={totalAmount} />
        </span>
      </p>
      {userInfo ? (
        <div className='flex flex-col items-center justify-center'>
          <button className='w-full h-10 text-sm font-semibold bg-amazon_blue text-white rounded-lg hover:bg-amazon_yellow duration-200'>
            Proceed to Buy
          </button>
        </div>
      ) : (
        <div className='flex flex-col items-center justify-center'>
          <button className='w-full h-10 text-sm font-semibold bg-amazon_blue bg-opacity-50 text-white rounded-lg cursor-not-allowed'>
            Proceed to Buy
          </button>
          <p className='text-xs text-red-500 font-semibold animate-bounce mt-3 flex flex-col'>
            Please login to continue{" "}
            <button
              onClick={() => signIn()}
              type='submit'
              className='w-full h-10 text-sm font-semibold bg-amazon_blue text-white rounded-lg hover:bg-amazon_yellow duration-200'>
              SignIn
            </button>
          </p>
        </div>
      )}
    </div>
  );
};

export default Payment;
