"use client";

import Image from "next/image";
import { StoreProduct } from "../../../types";
import { useDispatch } from "react-redux";
import Details from "./details";
import SubButtons from "./SubButtons";

interface Props {
  single: StoreProduct;
}

const SingleProduct = ({ single }: Props) => {
  return (
    <div className='max-w-screen-xl mx-auto px-4 py-4 md:py-10'>
      <div className='w-full grid md:grid-cols-3 bg-gray-100 rounded-lg'>
        <div className='flex items-center justify-center bg-gray-200 rounded-lg relative group overflow-hidden'>
          <Image
            src={single.image}
            alt={single.title}
            width={500}
            height={500}
          />
          <SubButtons subButtons={single} />
        </div>
        <Details singleDetails={single} />
      </div>
    </div>
  );
};

export default SingleProduct;
