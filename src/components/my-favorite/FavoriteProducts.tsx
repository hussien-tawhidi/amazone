"use client";
import Image from "next/image";
import { StoreProduct } from "../../../types";
import FormattedAmount from "../products/FormattedAmount";
import { useDispatch } from "react-redux";
import { addToCart, deleteFavorite } from "@/redux/slices/postsSlices";
import { HiShoppingCart } from "react-icons/hi";

interface Props {
  item: StoreProduct;
}

const FavoriteProducts = ({ item }: Props) => {
  const dispatch = useDispatch();

  return (
    <div className='bg-gray-100 rounded-lg flex flex-col md:flex-row py-2 items-center gap-4 shadow-md mt-2'>
      <Image src={item.image} alt={item.title} height={150} width={150} />
      <div className='flex items-center px-2 gap-4'>
        <div className='flex flex-col gap-1'>
          <p className='text-lg font-semibold text-amazon_blue'>{item.title}</p>
          <p className='text-sm text-gray-600'>{item.description}</p>
          <p className='text-sm text-gray-600'>
            Unit Price{" "}
            <span className='font-semibold text-amazon_blue'>
              <FormattedAmount amount={item.price} />
            </span>
          </p>
          <button
            type='submit'
            onClick={() => {
              dispatch(
                addToCart({
                  _id: item._id,
                  brand: item.brand,
                  category: item.category,
                  image: item.image,
                  description: item.description,
                  isNew: item.isNew,
                  oldPrice: item.oldPrice,
                  price: item.price,
                  title: item.title,
                  quantity: 1,
                })
              ) && dispatch(deleteFavorite(item._id));
            }}
            className='w-44 h-10 font-medium bg-amazon_blue text-white rounded-md hover:bg-amazon_yellow duration-200 hover:text-black mt-2 flex items-center justify-center cursor-pointer'>
            Add to cart
          </button>
        </div>
        <div className='text-lg font-semibold text-amazon_blue'>
          <FormattedAmount amount={item.price * item.quantity} />
        </div>
      </div>
    </div>
  );
};

export default FavoriteProducts;
