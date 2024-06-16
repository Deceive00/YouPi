import { FaHeart } from "react-icons/fa";

// Pass props of Vendor Name, Image, and Location
const FavouriteCard = () => {
  return (
    <div className="w-full flex flex-col justify-start items-center">
      <div className="flex w-full h-[8rem] bg-red-500 rounded-md mb-2">
        <img src="" alt="" />

        <div className="w-[30px] h-[30px] bg-black rounded-l-lg rounded-b-lg ml-auto flex justify-center items-center">
            <FaHeart className="text-red-500 text-xl"/>
        </div>
      </div>
      <h1 className="text-lg">Tomoro Coffee</h1>
      <span className="text-slate-500">BINUS Alam Sutera</span>
    </div>
  );
};

export default FavouriteCard;
