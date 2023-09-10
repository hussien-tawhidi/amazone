"use client";
import { useSelector } from "react-redux";
import { StateProps, StoreProduct } from "../../../types";
import FavoriteProducts from "./FavoriteProducts";
import ResetFavorite from "./ResetFavorite";
import Link from "next/link";

interface Props {}

const MyFavorite = () => {
  const { favoriteData } = useSelector((state: StateProps) => state.next);
  return (
    <div className='w-full mx-auto px-6 gap-10 py-4'>
      {favoriteData.length > 0 ? (
        <div className='bg-white p-6 rounded-lg'>
          <div className='flex items-center justify-between  pb-1'>
            <p className='text-2xl font-semibold text-amazon_blue'>
              Favorite Items
            </p>
            <p className='text-lg font-semibold text-amazon_blue'>Action</p>
          </div>
          <div className='shadow-sm mt-4'>
            {favoriteData.map((item: StoreProduct) => (
              <FavoriteProducts key={item._id} item={item} />
            ))}
          </div>
          <ResetFavorite />
        </div>
      ) : (
        <div className='bg-white h-96 flex flex-col items-center justify-center py-5 rounded-lg shadow-lg'>
          <h1>Nothing is not available in favorite list</h1>
          <Link href="/">
            <button className='w-52 h-10 bg-amazon_blue text-white rounded-lg text-sm font-semibold hover:bg-amazon_yellow hover:text-black duration-200 mt-2'>
              Go To Home
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default MyFavorite;
