"use client"
import { StoreProduct } from '../../../types';
import { addToCart } from '@/redux/slices/postsSlices';
import FormattedAmount from '../products/FormattedAmount';
import { useDispatch } from 'react-redux';

interface Props {
  singleDetails:StoreProduct
}

const Details = ({ singleDetails }: Props) => {
    const dispatch=useDispatch()

  return (
    <div className='md:col-span-2 flex flex-col gap-3 justify-center p-4'>
      <p className='text-xs md:text-sm text-amazon_blue font-semibold -mb-3'>
        {singleDetails.category} _ {singleDetails.brand}
      </p>
      <h1 className='text-xl md:text-3xl tracking-wide font-semibold'>
        {singleDetails.title}
      </h1>
      <p className='text-sm text-gray-600'>{singleDetails.description}</p>
      <div className=''>
        <p className='text-base text-gray-600 flex items-center gap-1'>
          Price:{" "}
          <span className='text-lg text-amazon_blue font-semibold'>
            <FormattedAmount amount={singleDetails.price} />
          </span>
          <span className='ml-1 line-through'>
            <FormattedAmount amount={singleDetails.oldPrice} />
          </span>
        </p>
        <p className='text-sm text-gray-500 flex items-center gap-1'>
          You Save{" "}
          <span>
            <FormattedAmount amount={singleDetails.oldPrice - singleDetails.price} />
          </span>
        </p>
        <button
          className='w-full h-10 font-medium bg-amazon_blue text-white rounded-md hover:bg-amazon_yellow hover:text-black duration-300 mt-2'
          onClick={() =>
            dispatch(
              addToCart({
                _id: singleDetails._id,
                brand: singleDetails.brand,
                category: singleDetails.category,
                image: singleDetails.image,
                description: singleDetails.description,
                isNew: singleDetails.isNew,
                oldPrice: singleDetails.oldPrice,
                price: singleDetails.price,
                title: singleDetails.title,
                quantity: 1,
              })
            )
          }>
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Details