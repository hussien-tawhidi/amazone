"use client"

import { addToCart, addToFavorite } from '@/redux/slices/postsSlices';
import React from 'react'
import { FaHeart } from 'react-icons/fa';
import { HiShoppingCart } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import { StoreProduct } from '../../../types';

interface Props {
    subButtons:StoreProduct
}

const SubButtons = ({subButtons}:Props) => {
const dispatch=useDispatch()

  return (
    <div className='w-12 h-24 absolute bottom-10 right-0 border-[1px] border-gray-400 bg-white rounded-md flex flex-col translate-x-20 group-hover:translate-x-0 transition-transform duration-300'>
      <span
        onClick={() =>
          dispatch(
            addToCart({
              _id: subButtons._id,
              brand: subButtons.brand,
              category: subButtons.category,
              image: subButtons.image,
              description: subButtons.description,
              isNew: subButtons.isNew,
              oldPrice: subButtons.oldPrice,
              price: subButtons.price,
              title: subButtons.title,
              quantity: 1,
            })
          )
        }
        className='w-full h-full border-b-[1px] border-b-gray-400 flex items-center justify-center text-xl bg-transparent hover:bg-amazon_yellow cursor-pointer duration-300'>
        <HiShoppingCart />
      </span>
      <span
        onClick={() =>
          dispatch(
            addToFavorite({
              _id: subButtons._id,
              brand: subButtons.brand,
              category: subButtons.category,
              image: subButtons.image,
              description: subButtons.description,
              isNew: subButtons.isNew,
              oldPrice: subButtons.oldPrice,
              price: subButtons.price,
              title: subButtons.title,
              quantity: 1,
            })
          )
        }
        className='w-full h-full border-b-[1px] border-b-gray-400 flex items-center justify-center text-xl bg-transparent hover:bg-amazon_yellow cursor-pointer duration-300'>
        <FaHeart />
      </span>
    </div>
  );
}

export default SubButtons