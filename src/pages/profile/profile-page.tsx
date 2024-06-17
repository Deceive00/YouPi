import { Separator } from "@radix-ui/react-separator";
import MainLayout from "src/layout/main-layout";
import dummyPng from "@assets/images/default.png";
import ProfileVendor from "./profile-vendor";
import { MdAttachEmail } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import React from "react";
import ProfilePreferences from "./profiel-preference";
import ProfileFavourites from "./profile-favourites";
import { FaLongArrowAltRight } from "react-icons/fa";
import "./profile-animation.css"
import { useQuery } from "react-query";
import { fetchUserByID } from "@lib/services/user.service";
import { auth } from "src/firebase/firebase-config";
import Loader from "@components/loading/loader";
import { User } from "@lib/types/user-types";
import { format } from "date-fns";

function capitalize(str : string | undefined) {
  return str ? str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() : '';
}

function formatDate(timestamp : any) {
  if (!timestamp) return '';

  // Extract seconds and convert to milliseconds
  const date = new Date(timestamp.seconds * 1000);

  // Format the date as 'dd MM yyyy'
  return format(date, 'dd MMMM yyyy');
}

export default function ProfilePage() {
  // State
  const [activeSection, setActiveSection] = React.useState('Vendor')
  const uid = auth.currentUser?.uid

  // Fetch User using useQuery and FetchUserByID
  if(!uid){
    return <Loader/>
  }

  const [userData, setUserData] = React.useState<User>();
  const { isLoading: isLoadingUserData } = useQuery(
    ["fetchUserByID", uid],
    () => fetchUserByID(uid),
    {
      onSuccess: (data: User) => {
        setUserData(data);

        console.log(userData?.dob);
      },
      onError: (error: any) => {
        console.log("Error fetching user data ", error.message);
      },
    }
  );

  if (isLoadingUserData) {
    return (
    <Loader />
    );
  }

  return (
    <MainLayout className={`lg:pt-14 pt-16`}>
      {/* Image Background */}

      {/* Content */}
      <div
        className={`flex flex-col lg:flex-row w-screen min-h-screen box-border lg:px-32 font-nunito pt-4 lg:gap-x-4 lg:gap-y-0 gap-y-4`}
      >
        {/* Left */}
        <div
          className={`px-4 lg:px-0 lg:w-[40%] flex flex-col justify-start items-center gap-y-8`}
        >
          <div className="flex flex-col justify-center items-center gap-y-2">
            <div className="w-[6rem] h-[6rem]">
              <img src={dummyPng} alt="" className="rounded-full" />
            </div>
            <h1 className="text-2xl font-bold">{userData?.firstName} {capitalize(userData?.lastName)}</h1>
            <div className="flex flex-col text-center text-slate-600">
              <span>{formatDate(userData?.dob)}</span>
              <span>BINUS University</span>
            </div>
          </div>
          {/* Student Detail */}
          <div className="flex flex-row w-full justify-around">
            <div className="flex flex-col text-center items-center">
              <FaAddressCard className="text-3xl" />
              <span className="text-black">{userData?.nim}</span>
            </div>

            <div className="flex flex-col text-center items-center">
              <MdAttachEmail className="text-3xl" />
              <span className="text-black">{userData?.email}</span>
            </div>

            <div className="flex flex-col text-center items-center">
              <BsFillTelephoneFill className="text-3xl" />
              <span className="text-black">{userData?.phoneNumber}</span>
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
        <div className={`lg:w-[60%] lg:px-0 px-4`}>
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

          <div className="w-full h-[80%] overflow-y-auto rounded-md pb-4 lg:pb-0">
            {activeSection == "Vendor" && <ProfileVendor />}
            {activeSection == "Favourites" && <ProfileFavourites />}
            {activeSection == "Preferences" && <ProfilePreferences />}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
