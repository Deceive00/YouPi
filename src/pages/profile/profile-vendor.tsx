import React from "react"
import dummyPng from '@assets/images/delivery.jpg'
import RatingStars from "@pages/history/rating-stars"
import { CiShop } from "react-icons/ci";
import "./profile-animation.css"

interface Props {
    userId? : string
}

const ProfileVendor : React.FC<Props> = ({userId}) => {
    // Fetch Vendor If Exist
    
    return (
      <div className="w-full h-max flex flex-col items-center font-nunito">
        {/* Image */}
        <div className="w-full h-[22rem] bg-yellow-100 mb-4">
          <img src={dummyPng} className="w-full h-full rounded-md" alt="" />
        </div>

        <div className="w-full flex flex-col gap-y-4">
        <div className="flex flex-row w-full justify-between">
          <div className="flex flex-col">
            {/* Name */}
            <h1 className="text-2xl font-bold">Ramen Saia</h1>
            {/* Campus + Icon */}
            <div className={`text-slate-600`}>
              <span>BINUS Alam Sutera</span>
            </div>
          </div>

          {/* Rating */}
          <RatingStars name="vendor-rating"></RatingStars>
        </div>

        {/* Description */}
        <div className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sunt consectetur dolore illum, dolorum placeat quasi quisquam officiis libero, asperiores, qui odio eos quis ullam labore cum saepe aliquam. Itaque.
        </div>

        <div className="w-full border-[1px] border-primary py-2 flex justify-center items-center gap-x-2 rounded-md text-primary hover:animate-jump">
            <h1 className="font-bold">Vendor Detail</h1>
            <CiShop className="text-2xl transition-transform duration-1000"/>
        </div>
        </div>
      </div>
    );
}

export default ProfileVendor;