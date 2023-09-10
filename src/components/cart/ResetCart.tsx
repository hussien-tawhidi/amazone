"use client";

import { resetCart } from "@/redux/slices/postsSlices";
import { useDispatch } from "react-redux";

interface Props {}

const ResetCart = () => {
  const dispatch = useDispatch();

  const handleResetCart = () => {
    const confirmReset = window.confirm(
      "Are you sure you want to reset cart data ?"
    );
    if (confirmReset) {
      dispatch(resetCart());
    }
  };

  return (
    <button className='w-44 h-10 font-semibold bg-gray-200 rounded-lg hover:bg-red-600 hover:text-white duration-300 flex items-center justify-center' onClick={handleResetCart}>
      Reset Cart
    </button>
  );
};

export default ResetCart;
