"use client";

import SingleProduct from "@/components/single-products-details";

interface Props {}

const Dynamic = ({ searchParams }: any) => {

  return <SingleProduct single={searchParams} />;
};

export default Dynamic;
