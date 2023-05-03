import React, { useEffect , useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const UserInfo = () => {
  const { userId } = useParams();
  const [userInfo, setUserInfo] = useState();
  
  useEffect(()=>{
    const getUserInfo = async () => {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_BACKEND_PORT}/v1/api/u/user/info/visit/${userId}`,
          {},
          { withCredentials: true }
        );
        if (response && response.data) {
          setUserInfo(response.data);
        }
      } catch (err) {
        console.error(err);
      }
    };
    getUserInfo()
  },[userId])

  return (
    <div className="main-container mt-10">
      <div className=" w-11/12 md:w-10/12 2xl:w-8/12 mx-auto mt-10 mb-10">
        <div className="flex text-gray-700 dark:text-gray-200 rounded-md  flex-col lg:flex-row justify-evenly  bg-white dark:bg-subMajorDark mx-auto p-5">
          <div className="flex flex-col gap-2">
          <div>FirstName: {userInfo != null && <span>{userInfo.firstName}</span> }</div>
            <div>LastName: {userInfo != null && <span>{userInfo.lastName}</span> }</div>           
          </div>
          <div className="flex flex-col gap-2">
            <div>Email: {userInfo != null && <span>{userInfo.email}</span> }</div>
            <div>Gender: {userInfo != null && <span>{userInfo.gender}</span> }</div>
          </div>
          <div>{userInfo != null && <span>Phone number: {userInfo.telephone}</span> }</div>
        </div>
      </div>
      <div className="followStatus flex mb-10  items-center justify-evenly mt-10 rounded-md bg-white dark:bg-subMajorDark w-11/12 md:w-10/12 2xl:w-8/12 mx-auto p-5">
        <div className="follow flex flex-col justify-center items-center">
          <span className="dark:text-gray-200 text-gray-700 font-bold text-xl">
            {userInfo != null && <span>{userInfo.followers.length}</span> }
          </span>
          <span className="dark:text-gray-200 text-gray-700">Followers</span>
        </div>
        <div className="h-14 w-[.13rem] bg-[#cfcdcd]"></div>
        <div className="follow flex flex-col justify-center items-center">
          <span className="dark:text-gray-200 text-gray-700 font-bold text-xl">
            {userInfo != null && <span>{userInfo.followings.length}</span>}
          </span>
          <span className="dark:text-gray-200 text-gray-700">Followings</span>
        </div>
      </div>
    </div>
  );
};
export default UserInfo;
