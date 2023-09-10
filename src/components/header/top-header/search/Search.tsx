"use client";

import Image from "next/image";
import Link from "next/link";
import { HiOutlineSearch } from "react-icons/hi";
import { StateProps, StoreProduct } from "../../../../../types";
import FormattedAmount from "@/components/products/FormattedAmount";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAllProducts } from "@/redux/slices/postsSlices";
import SearchItem from "./SearchItem";

interface Props {
  getData: StoreProduct;
}

const Search = ({ getData }: Props) => {
  const dispatch = useDispatch();
  const [allData, setAllData] = useState([]);

  const { allProducts } = useSelector((state: StateProps) => state.next);

  useEffect(() => {
    dispatch(setAllProducts({ allProducts: getData }));
  }, [dispatch, getData]);

  useEffect(() => {
    setAllData(allProducts.allProducts);
  }, [allProducts.allProducts]);

  const [searchQuery, setSearchQuery] = useState("");
  const [filterProducts, setFilterProducts] = useState([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const filtered = allData.filter((item: StoreProduct) =>
      item.title.toLocaleLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilterProducts(filtered);
  }, [allData, searchQuery]);

  const emptySearchQuery = () => {
    setSearchQuery("");
  };

  return (
    <div className='flex-1 h-10 hidden md:inline-flex items-center justify-between relative'>
      <input
        onChange={handleChange}
        type='text'
        className='w-full h-full rounded-md px-2 placeholder:text-sm text-base text-black border-[3px] border-transparent outline-none focus-visible:border-amazon_yellow'
        placeholder='Search here ...'
      />
      <span className='w-12 h-full bg-amazon_yellow text-black text-2xl flex items-center justify-center absolute right-0 top-0 bottom-0 rounded-tr-md rounded-br-md'>
        <HiOutlineSearch />
      </span>
      {searchQuery && (
        <div className='absolute left-0 top-12 w-full mx-auto max-h-96 bg-gray-200 rounded-lg overflow-y-scroll overflow-x-hidden cursor-pointer text-black'>
          {filterProducts.length > 0 ? (
            <>
              {searchQuery &&
                filterProducts.map((item: StoreProduct) => (
                  <SearchItem
                    item={item}
                    key={item._id}
                    emptySearchQuery={emptySearchQuery}
                  />
                ))}
            </>
          ) : (
            <div className='bg-gray-50 flex items-center justify-center py-10 rounded-lg shadow-lg'>
              <p className='text-xl font-semibold animate-bounce'>
                Nothing is matches with your search keywords. Please try again!
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
