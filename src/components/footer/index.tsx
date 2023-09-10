import Image from "next/image";
import logo from "../../images/logo.png";

interface Props {}

const Footer = () => {
  return (
    <div className='w-full h-20 bg-amazon_light text-gray-300 flex items-center justify-center gap-4'>
      <Image src={logo} alt='logo' className='w-24' />{" "}
      <p className='text-sm -mt-4'>
        All right reserved{" "}
        <a
          href='/'
          className='hover:text-white hover:underline decoration-[1px] cursor-pointer duration-300'>
          Hussien Tawhidi
        </a>
      </p>
    </div>
  );
};

export default Footer;
