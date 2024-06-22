// import { Separator } from "@radix-ui/react-separator";
// import MainLayout from "src/layout/main-layout";
// import dummyPng from "@assets/images/default.png";
// import ProfileVendor from "./profile-vendor";
// import { MdAttachEmail } from "react-icons/md";
// import { FaAddressCard } from "react-icons/fa";
// import { BsFillTelephoneFill } from "react-icons/bs";
// import React from "react";
// import ProfilePreferences from "./profiel-preference";
// import ProfileFavourites from "./profile-favourites";
// import { FaLongArrowAltRight } from "react-icons/fa";
// import "./profile-animation.css"
// import { useQuery } from "react-query";
// import { fetchUserByID } from "@lib/services/user.service";
// import { auth } from "src/firebase/firebase-config";
// import Loader from "@components/loading/loader";
// import { User } from "@lib/types/user-types";
// import { format } from "date-fns";

// function capitalize(str : string | undefined) {
//   return str ? str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() : '';
// }

// function formatDate(timestamp : any) {
//   if (!timestamp) return '';

//   // Extract seconds and convert to milliseconds
//   const date = new Date(timestamp.seconds * 1000);

//   // Format the date as 'dd MM yyyy'
//   return format(date, 'dd MMMM yyyy');
// }

// export default function ProfilePage() {
//   // State
//   const [activeSection, setActiveSection] = React.useState('Vendor')
//   const uid = auth.currentUser?.uid

//   // Fetch User using useQuery and FetchUserByID
//   if(!uid){
//     return <Loader/>
//   }

//   const [userData, setUserData] = React.useState<User>();
//   const { isLoading: isLoadingUserData } = useQuery(
//     ["fetchUserByID", uid],
//     () => fetchUserByID(uid),
//     {
//       onSuccess: (data: User) => {
//         setUserData(data);

//         console.log(userData?.dob);
//       },
//       onError: (error: any) => {
//         console.log("Error fetching user data ", error.message);
//       },
//     }
//   );

//   if (isLoadingUserData) {
//     return (
//     <Loader />
//     );
//   }

//   return (
//     <MainLayout className={`lg:pt-14 pt-16`}>
//       {/* Image Background */}

//       {/* Content */}
//       <div
//         className={`flex flex-col lg:flex-row w-screen min-h-screen box-border lg:px-32 font-nunito pt-4 lg:gap-x-4 lg:gap-y-0 gap-y-4`}
//       >
//         {/* Left */}
//         <div
//           className={`px-4 lg:px-0 lg:w-[40%] flex flex-col justify-start items-center gap-y-8`}
//         >
//           <div className="flex flex-col justify-center items-center gap-y-2">
//             <div className="w-[6rem] h-[6rem]">
//               <img src={dummyPng} alt="" className="rounded-full" />
//             </div>
//             <h1 className="text-2xl font-bold">{userData?.firstName} {capitalize(userData?.lastName)}</h1>
//             <div className="flex flex-col text-center text-slate-600">
//               <span>{formatDate(userData?.dob)}</span>
//               <span>BINUS University</span>
//             </div>
//           </div>
//           {/* Student Detail */}
//           <div className="flex flex-row w-full justify-around">
//             <div className="flex flex-col text-center items-center">
//               <FaAddressCard className="text-3xl" />
//               <span className="text-black">{userData?.nim}</span>
//             </div>

//             <div className="flex flex-col text-center items-center">
//               <MdAttachEmail className="text-3xl" />
//               <span className="text-black">{userData?.email}</span>
//             </div>

//             <div className="flex flex-col text-center items-center">
//               <BsFillTelephoneFill className="text-3xl" />
//               <span className="text-black">{userData?.phoneNumber}</span>
//             </div>
//           </div>
//           <Separator
//             aria-orientation="vertical"
//             className="border-[1.5px] shadow-xl mx-2 w-full"
//           />
//           <span className="text-justify text-black">
//             Description Lorem ipsum dolor sit amet consectetur, adipisicing
//             elit. Optio neque dolor nihil rem cumque provident maiores
//             laboriosam reprehenderit ipsum reiciendis! Illum sint voluptatum at!
//             Sapiente odio atque minima nulla nobis!
//           </span>

//           <div className="w-full justify-end flex">
//             <button className="w-full py-2 border-0 font-bold border-slate-300 text-primary bg-secondary rounded-sm flex justify-center items-center gap-x-2 hover:animate-arrow">
//               Edit Profile
//               <FaLongArrowAltRight className="text-primary text-xl transition-transform duration-500" />
//             </button>
//           </div>
//         </div>
//         {/* Right */}
//         <div className={`lg:w-[60%] lg:px-0 px-4`}>
//           {/* Header */}
//           <div className="flex flex-row gap-x-8 w-full">
//             <h1
//               className={`font-bold transition-all ease-in-out duration-500 cursor-pointer text-xl ${
//                 activeSection == "Vendor" ? "text-red-400" : "text-slate-500"
//               }`}
//               onClick={() => setActiveSection("Vendor")}
//             >
//               Vendor
//             </h1>
//             <h1
//               className={`font-bold transition-all ease-in-out duration-500 cursor-pointer text-xl ${
//                 activeSection == "Favourites"
//                   ? "text-red-400"
//                   : "text-slate-500"
//               }`}
//               onClick={() => setActiveSection("Favourites")}
//             >
//               Favourites
//             </h1>
//             <h1
//               className={`font-bold transition-all ease-in-out duration-500 cursor-pointer text-xl ${
//                 activeSection == "Preferences"
//                   ? "text-red-400"
//                   : "text-slate-500"
//               }`}
//               onClick={() => setActiveSection("Preferences")}
//             >
//               Preferences
//             </h1>
//           </div>

//           <Separator
//             aria-orientation="vertical"
//             className="border-[1.5px] shadow-xl w-full mb-8 mt-4"
//           />

//           <div className="w-full h-[80%] overflow-y-auto rounded-md pb-4 lg:pb-0">
//             {activeSection == "Vendor" && <ProfileVendor />}
//             {activeSection == "Favourites" && <ProfileFavourites />}
//             {activeSection == "Preferences" && <ProfilePreferences />}
//           </div>
//         </div>
//       </div>
//     </MainLayout>
//   );
// }

import { useEffect, useState } from "react";
import MainLayout from "src/layout/main-layout";
import { Input } from "@components/ui/input";
import blank from "@assets/logo/blankprofpic.png";
import UserMiddleware from "src/middleware/user-middleware";
import { useMutation, useQuery } from "react-query";
import { User, UserType } from "@lib/types/user-types";
import { useNavigate } from "react-router-dom";
import { DatePicker } from "@components/ui/date-picker";
import { useAuth } from "@lib/hooks/useAuth";
import { Controller, useForm } from "react-hook-form";
import { updateUser } from "@lib/services/user.service";
import { convertTimestampToDate } from "@lib/services/formatter.service";
import AddAvatar from "@components/pictures/add-avatar";
import useUploadPhoto from "@lib/hooks/useUploadPhoto";
import { Button } from "@components/ui/button";
import Loader from "@components/loading/loader";
import { useToast } from "@components/ui/use-toast";
import { Toaster } from "@components/ui/toaster";

export default function ProfilePage() {
  const { user, userType, isLoading } = useAuth();
  const [load, setLoad] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm();
  const { toast } = useToast();
  const [errorMsg, setErrorMsg] = useState<null | {
    title: string;
    description: string;
    variant: "default" | "destructive" | "success" | "error";
  }>(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoading) {
      if (userType != UserType.USER) {
        navigate("/auth");
      }
    }
  }, [isLoading]);
  if (Object.keys(errors).length > 0 && errorMsg === null) {
    Object.values(errors).forEach((error) => {
      if (error && error.message) {
        setErrorMsg({
          title: "Form Validation Error",
          description: error.message as string,
          variant: "error",
        });
      }
    });
  }
  useEffect(() => {
    if (errorMsg !== null) {
      toast({
        title: errorMsg.title,
        description: errorMsg.description,
        variant: errorMsg.variant,
      });
    }
  }, [errorMsg]);

  const { uploadPhoto } = useUploadPhoto();
  const { mutate: update, isLoading: updateLoading } = useMutation(
    async (data: any) => {
      setLoad(true);
      const defaultPhoto =
        (user as User)?.profilePicture || "https://firebasestorage.googleapis.com/v0/b/youpi-92b43.appspot.com/o/default.png?alt=media&token=429db833-8c08-4045-8122-ad42130f2883";
      let profilePictureUrl: string = defaultPhoto;
      console.log(data);
      if (data.profilePicture && !data.profilePicture.length) {
        const ext = data.profilePicture.name.split(".")[1];
        const emailValue = data.email;
        const fileName = `users/${data.nim}/profilePicture/${emailValue}.${ext}`;

        profilePictureUrl =
          (await uploadPhoto(data?.profilePicture, fileName)) || defaultPhoto;
      }

      await updateUser({
        nim: data.nim,
        firstName: data.firstName,
        email: data.email,
        phoneNumber: data.phoneNumber,
        dob: data.dob,
        profilePicture: profilePictureUrl,
        isSender: (user as User)?.isSender,
        lastName: data.lastName,
        senderReview:(user as User)?.senderReview || 0,
      })
    },
    {
      onSuccess: () => {
        window.location.reload();
      },
      onError: (error: Error) => {
        console.error(error.message);
        toast({
          title: error.message,
          variant: "error",
        })
      },
    }
  );
  const handleManualSubmit = async () => {
    const isValid = await trigger();
    if (isValid) {
      handleSubmit((data) => update(data))();
    }
  };

  if (load) {
    return <MainLayout>
      <Loader />
    </MainLayout>;
  }

  return (
    <MainLayout>
      <UserMiddleware>
        <div className="container pt-20 w-4/5 mx-auto">
          <div className="flex bg-center relative w-full h-68 rounded-2xl pb-8 pl-8 shadow-md">
            <div
              className="w-full absolute left-0 top-0 h-32 bg-slate-400 rounded-t-2xl z-0"
              style={{
                backgroundImage:
                  "url('https://images.axios.com/gIMCWO5TN6OlCsXW965xfSKSC9k=/0x0:1920x1080/1920x1080/2024/05/16/1715870547736.jpg')",
                backgroundSize: "cover",
              }}
            ></div>
            <div className="flex">
              <div className="flex mt-20 relative align-bottom">
                <Controller
                  name="profilePicture"
                  control={control}
                  defaultValue={(user as User)?.profilePicture || null}
                  render={({ field }) => (
                    <AddAvatar
                      value={field.value}
                      onChange={field.onChange}
                      className="w-40 h-40 z-50 border-2 border-gray-300"
                      currentImg={(user as User)?.profilePicture || blank}
                    />
                  )}
                />
              </div>
              <div className="flex flex-col pl-6 h-auto justify-end gap-4">
                <div className="mt-10">
                  <h1 className="text-2xl font-bold">
                    {isLoading
                      ? "Loading"
                      : (user as User).firstName +
                        " " +
                        (user as User).lastName}
                  </h1>
                  {/* <p className='text-gray-500 font-medium'>@goyounjung04</p> */}
                </div>
                <button className="bg-primary color hover:bg-primary/90 rounded-md w-20 h-8 text-sm text-white">
                  Log Out
                </button>
              </div>
            </div>
          </div>
          {/* <h1 className='text-2xl font-bold my-11'>Personal Info</h1> */}
          <form
            action=""
            onSubmit={handleSubmit((data) => {
              console.log("awdaw");
              update(data);
            })}
            className="flex flex-col my-11 gap-4"
          >
            <div className="flex flex-col w-full gap-4 md:gap-">
              <div className="flex gap-4 md:gap-12 md:flex-row flex-col w-full">
                <div className="flex flex-col w-full md:w-1/2">
                  <Controller
                    name="firstName"
                    control={control}
                    defaultValue={
                      isLoading ? "Loading" : (user as User).firstName
                    }
                    rules={{ required: "First name is required" }}
                    render={({ field }) => (
                      <Input
                        {...field}
                        id="firstName"
                        type="text"
                        required
                        placeholder="First Name"
                        defaultValue={
                          isLoading ? "Loading" : (user as User).firstName
                        }
                      />
                    )}
                  />
                </div>
                <div className="flex flex-col w-full md:w-1/2">
                  <Controller
                    name="lastName"
                    control={control}
                    defaultValue={
                      isLoading ? "Loading" : (user as User).lastName
                    }
                    rules={{ required: "Last name is required" }}
                    render={({ field }) => (
                      <Input
                        {...field}
                        id="lastName"
                        type="text"
                        required
                        placeholder="Last Name"
                        defaultValue={
                          isLoading ? "Loading" : (user as User).lastName
                        }
                      />
                    )}
                  />
                </div>
              </div>
              <div className="flex gap-4 md:gap-12 md:flex-row flex-col w-full">
                <div className="flex flex-col w-full md:w-1/2">
                  <Controller
                    name="nim"
                    control={control}
                    defaultValue={isLoading ? "Loading" : (user as User)?.nim || ''}
                    rules={{ required: "NIM is required" }}
                    render={({ field }) => (
                      <Input
                        {...field}
                        id="nim"
                        type="text"
                        required
                        placeholder="NIM"
                        defaultValue={isLoading ? "Loading" : (user as User)?.nim || ''}
                      />
                    )}
                  />
                </div>
                <div className="flex flex-col w-full md:w-1/2">
                  <Controller
                    name="email"
                    control={control}
                    defaultValue={(user as User)?.email || ''}
                    render={({ field }) => (
                      <Input
                        type="text"
                        id="email"
                        defaultValue={
                          isLoading ? "Loading" : (user as User).email
                        }
                        placeholder="Email"
                        disabled
                      />
                    )}
                  />
                </div>
              </div>
              <div className="flex gap-4 md:gap-12 md:flex-row flex-col w-full">
                <div className="flex flex-col w-full md:w-1/2">
                  <Controller
                    name="phoneNumber"
                    control={control}
                    defaultValue={
                      isLoading ? "Loading" : (user as User).phoneNumber
                    }
                    rules={{
                      required: "Phone number is required",
                      pattern: {
                        value: /^[0-9]+$/,
                        message: "Phone number should only contain digits",
                      },
                    }}
                    render={({ field }) => (
                      <Input
                        {...field}
                        id="phoneNumber"
                        type="tel"
                        required
                        placeholder="Phone Number"
                        defaultValue={
                          isLoading ? "Loading" : (user as User).phoneNumber
                        }
                      />
                    )}
                  />
                </div>
                <div className="flex flex-col w-full md:w-1/2">
                  <Controller
                    name="dob"
                    control={control}
                    defaultValue={convertTimestampToDate((user as User)?.dob)}
                    rules={{ required: "Date of birth is required" }}
                    render={({ field }) => (
                      <DatePicker
                        value={field.value}
                        onChange={field.onChange}
                        placeholder="Date Of Birth"
                        className="col-span-2 lg:col-span-1"
                      />
                    )}
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-start items-start">
              <Button type="submit" onClick={handleManualSubmit}>
                Save Changes
              </Button>
            </div>
          </form>
        </div>
      </UserMiddleware>
      <Toaster />
    </MainLayout>
  );
}
