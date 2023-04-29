import React, { useState  , useEffect } from "react";
import protectRoute from "../auth/protectedRoutes";
import { PencilIcon } from "../../assets/icons/icons";
import { CloseCirled } from "../../assets/icons/icons";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
 
const UserInfo = () => {
  const [
    email,
    firstName,
    lastName,
    about,
    followers,
    followings,
    gender,
    telephone,
  ] = protectRoute();

  const generateSuccess = (success) =>
  toast.success(success, {
    position: "top-center",
  });

  const [firstNameUpdate, setFirstNameUpdate] = useState("");
  const [lastNameUpdate, setLastNameUpdate] = useState("");
  const [genderUpdate, setGenderUpdate] = useState("");
  const [telephoneUpdate, setTelephoneUpdate] = useState("");
  const [showUpdate, setShowUpdate] = useState(false);

  const [updatedInfo , setUpdatedInfo] = useState(false);

  const updateUserInfo = async(e) => {
    e.preventDefault()
    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_PORT}/v1/api/u/user/info/update` , {
        firstNameUpdate , 
        lastNameUpdate , 
        genderUpdate , 
        telephoneUpdate
      },{withCredentials: true})
      if(response){
        setUpdatedInfo(true)
        setShowUpdate(false)
        generateSuccess("Updated your info")
      }
      
    } catch (err) {
      console.log(err)
    }
  }

  const [blur, setBlur] = useState("");

  useEffect(() => {
    if (showUpdate) {
      setBlur("pointer-events-none blur-xl");
    } else {
      setBlur("");
    }
  }, [blur, showUpdate]);

  return (
    <div className="main-container mt-10">
      <div className=" w-11/12 md:w-10/12 2xl:w-8/12 mx-auto mt-10 mb-10 relative">
        <div className={`${blur} flex text-gray-700 dark:text-gray-200 font-extrabold flex-col lg:flex-row justify-evenly  bg-white dark:bg-subMajorDark mx-auto p-5`}>
          <div className="flex flex-col gap-2">
            {" "}
            <div className="flex gap-3"><span>First Name: </span> {updatedInfo == false ? <span>{firstName}</span> : <span>{firstNameUpdate}</span> }</div>
            <div className="flex gap-3"><span>Last Name: </span> {updatedInfo == false ? <span>{lastName}</span> : <span>{lastNameUpdate}</span> }</div>
          </div>
          <div className="flex flex-col gap-2">
            {" "}
            <div className="flex gap-3"><span>Email:</span> {email}</div>
            <div className="flex gap-3">Gender: {updatedInfo == false ? <span>{gender}</span> : <span>{genderUpdate}</span> }</div>
          </div>
          <div className="flex gap-3">Telephone: {updatedInfo == false ? <span>{telephone}</span> : <span>{telephoneUpdate}</span> }</div>
        </div>
        <button
          className={`${blur} hover:bg-white p-2 float-right dark:text-gray-200 text-gray-700 rounded-md dark:hover:bg-gray-500 transition-all duration-1000`}
          onClick={()=>{setShowUpdate(true)}}
        >
          <PencilIcon />
        </button>

        { showUpdate && 
          <form onSubmit={updateUserInfo} className="absolute shadow-xl updateInfo left-1/2 -translate-x-1/2 top-1/2 sm:w-10/12  w-11/12 flex flex-wrap gap-3 bg-white dark:bg-subMajorDark p-10 rounded-md">
            <div className="w-full flex justify-evenly">
              <div className="text-xl font-medium text-gray-700 dark:text-gray-200">Update Your Info</div>
              <div><CloseCirled action={()=>{setShowUpdate(false)}} position="text-red-500" /></div>
            </div>
            <div className="w-full flex gap-3">
              {" "}
              <input
                type="text"
                className="w-6/12 outline-none p-2 rounded-md border-2 "
                name="firstName"
                placeholder="firtsName"
                onChange={(e) => {
                  setFirstNameUpdate(e.target.value);
                }}
                required
              />
              <input
                type="text"
                className="w-6/12 outline-none p-2 rounded-md border-2 "
                name="firstName"
                placeholder="firtsName"
                onChange={(e) => {
                  setLastNameUpdate(e.target.value);
                }}
                required
              />
            </div>
            <div className="w-full flex gap-3">
              {" "}
              <input
                type="text"
                className="w-6/12 outline-none p-2 rounded-md border-2 "
                name="gender"
                placeholder="gender"
                onChange={(e) => {
                  setGenderUpdate(e.target.value);
                }}
                required
              />
              <input
                type="tel"
                className="w-6/12 outline-none p-2 rounded-md border-2 "
                name="telephone"
                placeholder="telephone"
                onChange={(e) => {
                  setTelephoneUpdate(e.target.value);
                }}
                required
              />
            </div>
            <button type="submit" className="bg-blue-500 px-10 py-2 text-center text-white rounded-md mx-auto">Update</button>
          </form>
        }
      </div>
      <div className="followStatus flex mb-10  items-center justify-evenly mt-14 bg-white dark:bg-subMajorDark w-11/12 md:w-10/12 2xl:w-8/12 mx-auto p-5">
        <div className="follow flex flex-col justify-center items-center">
          <span className="dark:text-gray-200 text-gray-700 font-bold text-xl">
            {followers}
          </span>
          <span className="dark:text-gray-200 text-gray-700">Followers</span>
        </div>
        <div className="h-14 w-[.13rem] bg-[#cfcdcd]"></div>
        <div className="follow flex flex-col justify-center items-center">
          <span className="dark:text-gray-200 text-gray-700 font-bold text-xl">
            {followings}
          </span>
          <span className="dark:text-gray-200 text-gray-700">Followings</span>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
