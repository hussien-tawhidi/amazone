"use client";

import Link from "next/link";
import { StoreProduct } from "../../../../../types";
import Image from "next/image";
import FormattedAmount from "@/components/products/FormattedAmount";

interface Props {
  item: StoreProduct;
  emptySearchQuery: any;
}

const SearchItem = ({ item, emptySearchQuery }: Props) => {
  return (
    <Link
      className='w-full shadow-md flex items-center justify-between gap-4 scale-100 hover:shadow-lg hover:bg-gray-100 duration-200'
      key={item._id}
      href={{
        pathname: `/products-details/${item._id}`,
        query: {
          _id: item._id,
          brand: item.brand,
          category: item.category,
          image: item.image,
          description: item.description,
          isNew: item.isNew,
          oldPrice: item.oldPrice,
          price: item.price,
          title: item.title,
        },
      }}
      onClick={emptySearchQuery}>
      <Image
        src={item.image}
        alt={item.title}
        width={300}
        height={300}
        className='w-24'
      />
      <div className='flex flex-col  gap-2'>
        <p className='text-xs -mb-3'>
          {item.brand} _ {item.category}
        </p>
        <p className='text-lg font-semibold'>{item.title}</p>
        <p className='text-xs'>{item.description.substring(0, 100)}</p>
        <p className='text-sm gap-1'>
          Price:{" "}
          <span className='font-semibold'>
            <FormattedAmount amount={item.price} />
          </span>
          <span className='text-gray-600 line-through'>
            <FormattedAmount amount={item.oldPrice} />
          </span>
        </p>
      </div>
      <div className='flex text-right px-4'>
        <p className='text-base font-semibold animate-bounce text-amazon_blue'>
          Save <FormattedAmount amount={item.oldPrice - item.price} />
        </p>
      </div>
    </Link>
  );
};

export default SearchItem;
