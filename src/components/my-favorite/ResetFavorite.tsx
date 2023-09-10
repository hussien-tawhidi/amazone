"use client";

import { resetFavorite } from "@/redux/slices/postsSlices";
import { useDispatch } from "react-redux";

interface Props {}

const ResetFavorite = () => {
  const dispatch = useDispatch();

  const handleResetFavorite = () => {
    const confirmReset = window.confirm(
      "Are you sure you want to reset cart data ?"
    );
    if (confirmReset) {
      dispatch(resetFavorite());
    }
  };

  return (
    <button
      className='w-44 h-10 font-semibold bg-gray-200 rounded-lg hover:bg-red-600 hover:text-white duration-300 flex items-center justify-center mt-4'
      onClick={handleResetFavorite}>
      Reset Favorite
    </button>
  );
};

export default ResetFavorite;
