import React, { useState  , useEffect } from "react";
import protectRoute from "../auth/protectedRoutes";
import { PencilIcon } from "../../assets/icons/icons";
import axios from "axios";
import { Button , Modal } from "@mui/material";
import { Audio } from "react-loader-spinner";
 
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

  const [loader, setLoader] = useState(false)

  const generateSuccess = (success) =>
  toast.success(success, {
    position: "top-center",
  });

  const [firstNameUpdate, setFirstNameUpdate] = useState("");
  const [lastNameUpdate, setLastNameUpdate] = useState("");
  const [genderUpdate, setGenderUpdate] = useState("");
  const [telephoneUpdate, setTelephoneUpdate] = useState("");

  const [updatedInfo , setUpdatedInfo] = useState(false);

  const updateUserInfo = async(e) => {
    e.preventDefault()
    try {
      setLoader(true)
      setUpdatedInfo(false)
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_PORT}/v1/api/u/user/info/update` , {
        firstNameUpdate , 
        lastNameUpdate , 
        genderUpdate , 
        telephoneUpdate
      },{withCredentials: true})
      if(response){
        setUpdatedInfo(true)
        setLoader(false)
        generateSuccess("Updated your info")
        setFirstNameUpdate("")
        setLastNameUpdate("")
        setGenderUpdate("")
        setTelephoneUpdate("")
      }
      
    } catch (err) {
      console.log(err)
    }
  }

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="main-container mt-10">
      <div className=" w-11/12 md:w-10/12 2xl:w-8/12 mx-auto mt-10 mb-10 relative">
        <div className={`flex text-gray-700 dark:text-gray-200  flex-col lg:flex-row justify-evenly  bg-white dark:bg-subMajorDark mx-auto p-5`}>
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

        <Button onClick={handleOpen}>
        <div
          className={`hover:bg-white p-2 float-right dark:text-gray-200 text-gray-700 rounded-md dark:hover:bg-gray-500 transition-all duration-1000`}
        >
          <PencilIcon />
        </div>
        </Button>
        <Modal open={open} onClose={handleClose}>
          <form onSubmit={updateUserInfo} className="absolute shadow-xl updateInfo left-1/2 -translate-x-1/2 top-1/2 sm:w-10/12  w-11/12 flex flex-wrap gap-3 bg-white dark:bg-subMajorDark p-10 rounded-md">
            <div className="w-full flex justify-evenly">
              <div className="text-xl font-medium text-gray-700 dark:text-gray-200">Update Your Info</div>
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
              <select
                    onChange={(e)=>{setGenderUpdate(e.target.value)}}
                    name="gender"
                    id="gender"
                    className="selectpicker w-[50%]  mt-2 p-[0.70rem] outline-none border-2 rounded-md text-gray-500"
                    required
                  >
                    <option value="">--Select gender--</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
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
            {loader == false && (
            <button type="submit" className="bg-blue-500 px-10 py-2 text-center text-white rounded-md mx-auto">Update</button>
          )}
          {loader == true && (
            <button className="button bg-blue-500 self-center px-5 py-2 text-white rounded-md flex gap-1 font-semibold">
              <Audio
                height="24"
                width="60"
                radius="9"
                color="white"
                ariaLabel="loading"
              />
            </button>
          )}
          </form>
          </Modal>   
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
