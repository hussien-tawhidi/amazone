import { BeatLoader } from "react-spinners";

interface Props {}

const loading = () => {
  return (
    <div className='w-full flex flex-col gap-6 items-center justify-center py-20'>
      <p className=''>Data loading</p>
      <BeatLoader color='#131921' size={40}/>
    </div>
  );
};

export default loading;
