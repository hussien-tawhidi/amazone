import Image from "next/image";
import { StoreProduct } from "../../../types";
import FormattedAmount from "../products/FormattedAmount";
import { LuMinus, LuPlus } from "react-icons/lu";
import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  deleteProduct,
  increaseQuantity,
} from "@/redux/slices/postsSlices";
import { AiOutlineDelete } from "react-icons/ai";

interface Props {
  item: StoreProduct;
}

const CartProducts = ({ item }: Props) => {
  const dispatch = useDispatch();

  return (
    <div className='bg-gray-100 rounded-lg flex items-center gap-4 my-2'>
      <Image
        src={item.image}
        alt={item.title}
        width={150}
        height={150}
        className='object-cover'
      />
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
          <div className='flex items-center gap-6'>
            <div className='flex items-center mt-1 justify-between border border-gray-300 px-4 py-1 rounded-full w-28 shadow-lg shadow-gray-300'>
              <span
                className='w-6 h-6 flex items-center justify-center rounded-full text-base bg-transparent hover:bg-gray-300 cursor-pointer duration-300'
                onClick={() =>
                  dispatch(
                    increaseQuantity({
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
                  )
                }>
                <LuPlus />
              </span>
              <span>{item.quantity}</span>
              <span
                className='w-6 h-6 flex items-center justify-center rounded-full text-base bg-transparent hover:bg-gray-300 cursor-pointer duration-300'
                onClick={() =>
                  dispatch(
                    decreaseQuantity({
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
                  )
                }>
                <LuMinus />
              </span>
            </div>
            <div className='flex items-center justify-center text-sm font-medium text-gray-400 hover:text-red-600 cursor-pointer duration-300'>
              <span
                className='mt-[2px] text-2xl'
                onClick={() => dispatch(deleteProduct(item._id))}>
                <AiOutlineDelete />
              </span>
            </div>
          </div>
        </div>
        <div className='text-lg font-semibold text-amazon_blue'>
          <FormattedAmount amount={item.price * item.quantity} />
        </div>
      </div>
    </div>
  );
};

export default CartProducts;
