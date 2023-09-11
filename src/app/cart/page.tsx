import { useSelector } from "react-redux";
import { Metadata } from "next";
import { StateProps, StoreProduct } from "../../../types";
import CartProducts from "@/components/cart";
import ResetCart from "@/components/cart/ResetCart";
import EmptyCart from "@/components/cart/EmptyCart";
import Payment from "@/components/cart/Payment";

interface Props {}

export const metadata: Metadata = {
  title: "cart",
  description: "this page all content is on your cart that you selected !",
};
const Cart = () => {
  const { productData } = useSelector((state: StateProps) => state.next);
  console.log(productData);
  return (
    <div className='mx-auto px-6 grid grid-cols-5 gap-10 py-4'>
      {productData.length > 0 ? (
        <>
          <div className='bg-white col-span-4 p-4 rounded-lg'>
            <div className='flex items-center justify-between border-b-[1px] border-b-gray-400 pb-1'>
              <p className='text-2xl font-semibold text-amazon_blue'>
                Shopping Cart
              </p>
              <p className='text-lg font-semibold text-amazon_blue'>Subtitle</p>
            </div>
            <>
              {productData.map((item: StoreProduct) => (
                <div key={item._id}>
                  <CartProducts item={item} />
                </div>
              ))}
              <ResetCart />
            </>
          </div>
          <div className='bg-white h-64 col-span-1 p-4 rounded-lg flex  justify-center'>
            <Payment />
          </div>
        </>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

export default Cart;
