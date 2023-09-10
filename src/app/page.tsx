import HeroSlider from "@/components/hero-slider/HeroSlider";
import Products from "@/components/products";

async function getData() {
  const res = await fetch("https://fakestoreapiserver.reactbd.com/tech");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Home() {
  const data = await getData();

  return (
    <div>
      <div className='bg-gray-300'>
        <HeroSlider />
        <div className='relative md:-mt-20 lgl:-mt-32 xl:-mt-60 z-20 mb-10'>
          <Products productsData={data} />
        </div>
      </div>
    </div>
  );
}
