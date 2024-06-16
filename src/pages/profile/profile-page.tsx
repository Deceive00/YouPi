import { Separator } from "@radix-ui/react-separator";
import MainLayout from "src/layout/main-layout";
import dummyPng from "@assets/images/default.png";
import ProfileVendor from "./profile-vendor";
import { FaUniversity } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa";
import React from "react";
import ProfilePreferences from "./profiel-preference";
import ProfileFavourites from "./profile-favourites";
import { FaLongArrowAltRight } from "react-icons/fa";
import "./profile-animation.css"
import { useAuth } from "@lib/hooks/useAuth";

export default function ProfilePage() {
  // State
  const [activeSection, setActiveSection] = React.useState('Vendor')

  // Curr User
  // const {user} = useAuth()

  return (
    <MainLayout className={`lg:pt-14 sm:pt-16`}>
      {/* Image Background */}

      {/* Content */}
      <div
        className={`flex flex-row w-screen min-h-screen box-border px-32 font-nunito pt-4 gap-x-4`}
      >
        {/* Left */}
        <div
          className={`w-[40%] flex flex-col justify-start items-center gap-y-8`}
        >
          <div className="w-[6rem] h-[6rem]">
            <img src={dummyPng} alt="" className="rounded-full" />
          </div>
          <h1 className="text-2xl font-bold">{}</h1>
          <div className="flex flex-col text-center text-slate-600">
            <span>3 May 2023</span>
            <span>ryan@binus.ac.id</span>
          </div>
          {/* Student Detail */}
          <div className="flex flex-row w-full justify-around">
            <div className="flex flex-col text-center items-center">
              <FaAddressCard className="text-3xl" />
              <span className="text-black">2602098710</span>
            </div>

            <div className="flex flex-col text-center items-center">
              <FaUniversity className="text-3xl" />
              <span className="text-black">BINUS University</span>
            </div>

            <div className="flex flex-col text-center items-center">
              <FaMoneyBillWave className="text-3xl" />
              <span className="text-black">12 Transaction</span>
            </div>
          </div>
          <Separator
            aria-orientation="vertical"
            className="border-[1.5px] shadow-xl mx-2 w-full"
          />
          <span className="text-justify text-black">
            Description Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Optio neque dolor nihil rem cumque provident maiores
            laboriosam reprehenderit ipsum reiciendis! Illum sint voluptatum at!
            Sapiente odio atque minima nulla nobis!
          </span>

          <div className="w-full justify-end flex">
            <button className="w-full py-2 border-0 font-bold border-slate-300 text-primary bg-secondary rounded-sm flex justify-center items-center gap-x-2 hover:animate-arrow">
              Edit Profile
              <FaLongArrowAltRight className="text-primary text-xl transition-transform duration-500" />
            </button>
          </div>
        </div>
        {/* Right */}
        <div className={`w-[60%]`}>
          {/* Header */}
          <div className="flex flex-row gap-x-8 w-full">
            <h1
              className={`font-bold transition-all ease-in-out duration-500 cursor-pointer text-xl ${
                activeSection == "Vendor" ? "text-red-400" : "text-slate-500"
              }`}
              onClick={() => setActiveSection("Vendor")}
            >
              Vendor
            </h1>
            <h1
              className={`font-bold transition-all ease-in-out duration-500 cursor-pointer text-xl ${
                activeSection == "Favourites"
                  ? "text-red-400"
                  : "text-slate-500"
              }`}
              onClick={() => setActiveSection("Favourites")}
            >
              Favourites
            </h1>
            <h1
              className={`font-bold transition-all ease-in-out duration-500 cursor-pointer text-xl ${
                activeSection == "Preferences"
                  ? "text-red-400"
                  : "text-slate-500"
              }`}
              onClick={() => setActiveSection("Preferences")}
            >
              Preferences
            </h1>
          </div>

          <Separator
            aria-orientation="vertical"
            className="border-[1.5px] shadow-xl w-full mb-8 mt-4"
          />

          <div className="w-full h-[80%] overflow-y-auto rounded-md">
            {activeSection == "Vendor" && <ProfileVendor />}
            {activeSection == "Favourites" && <ProfileFavourites />}
            {activeSection == "Preferences" && <ProfilePreferences />}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
