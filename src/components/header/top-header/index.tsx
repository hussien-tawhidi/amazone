"use client";

import Logo from "./Logo";
import Dilevery from "./Dilevery";
import Search from "./search/Search";
import SignIn from "./SignIn";
import Favorite from "./Favorite";
import Cart from "./Cart";
import { useSelector } from "react-redux";
import { StateProps, StoreProduct } from "../../../../types";

interface Props {
  getData: StoreProduct,
  
}

const Header = ({ getData }: Props) => {


  const { productData, favoriteData } = useSelector(
    (state: StateProps) => state.next
  );

  return (
    <div className='w-full  h-20 bg-amazon_blue text-lightText sticky top-0 z-50'>
      <div className='h-full w-full mx-auto inline-flex items-center justify-between gap-1 mdl:gap-3 px-4'>
        <Logo />
        <Dilevery />
        <Search getData={getData} />
        <SignIn />
        <Favorite favoriteData={favoriteData} />
        <Cart cartNumb={productData} />
      </div>
    </div>
  );
};

export default Header;
