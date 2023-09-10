"use client";

import Image from "next/image";
import React from "react";
import { HiShoppingCart } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";
import FormattedAmount from "./FormattedAmount";
import { useDispatch } from "react-redux";
import { addToCart, addToFavorite } from "@/redux/slices/postsSlices";
import Link from "next/link";

const Products = ({ productsData }: any) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className='w-full px-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6'>
        {productsData?.map((product: any) => (
          <div
            key={product._id}
            className='w-full bg-white text-black p-4 border border-gray-300 rounded-lg group overflow-hidden'>
            <div className='w-full h-[260px] relative'>
              <Link
                href={{
                  pathname: `/products-details/${product._id}`,
                  query: {
                    _id: product._id,
                    brand: product.brand,
                    category: product.category,
                    image: product.image,
                    description: product.description,
                    isNew: product.isNew,
                    oldPrice: product.oldPrice,
                    price: product.price,
                    title: product.title,
                  },
                }}>
                <Image
                  width={300}
                  height={300}
                  src={product.image}
                  alt={product.title}
                  className='w-full h-full object-cover scale-90 hover:scale-100 transition-transform duration-300'
                />
              </Link>
              <div className='w-12 h-24 absolute bottom-10 right-0 border-[1px] border-gray-400 bg-white rounded-md flex flex-col translate-x-20 group-hover:translate-x-0 transition-transform duration-300'>
                <span
                  onClick={() =>
                    dispatch(
                      addToCart({
                        _id: product._id,
                        brand: product.brand,
                        category: product.category,
                        image: product.image,
                        description: product.description,
                        isNew: product.isNew,
                        oldPrice: product.oldPrice,
                        price: product.price,
                        title: product.title,
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
                        _id: product._id,
                        brand: product.brand,
                        category: product.category,
                        image: product.image,
                        description: product.description,
                        isNew: product.isNew,
                        oldPrice: product.oldPrice,
                        price: product.price,
                        title: product.title,
                        quantity: 1,
                      })
                    )
                  }
                  className='w-full h-full border-b-[1px] border-b-gray-400 flex items-center justify-center text-xl bg-transparent hover:bg-amazon_yellow cursor-pointer duration-300'>
                  <FaHeart />
                </span>
              </div>
              {product.isNew && (
                <p className='absolute top-0 right-0 text-amazon_blue font-medium text-xs tracking-wide animate-bounce'>
                  !save{" "}
                  <FormattedAmount amount={product.oldPrice - product.price} />
                </p>
              )}
            </div>
            <hr />
            <div className='px-4 py-3 flex flex-col gap-1'>
              <p className='text-xs text-gray-500 tracking-wide'>
                {product.category}
              </p>
              <p className='text-base font-medium'>{product.title}</p>
              <p className='flex items-center gap-2'>
                <span className='text-sm line-through'>
                  <FormattedAmount amount={product.oldPrice} />
                </span>
                <span className='text-amazon_blue font-semibold'>
                  <FormattedAmount amount={product.price} />
                </span>
              </p>
              <p className='text-xs text-gray-600 text-justify'>
                {product.description.substring(0, 120)}
              </p>
              <button
                className='h-10 font-medium bg-amazon_blue text-white rounded-md hover:bg-amazon_yellow hover:text-black duration-300 mt-2'
                onClick={() =>
                  dispatch(
                    addToCart({
                      _id: product._id,
                      brand: product.brand,
                      category: product.category,
                      image: product.image,
                      description: product.description,
                      isNew: product.isNew,
                      oldPrice: product.oldPrice,
                      price: product.price,
                      title: product.title,
                      quantity: 1,
                    })
                  )
                }>
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
