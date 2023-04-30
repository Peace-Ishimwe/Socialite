import React, { useEffect } from "react";
import SideBar from "../components/home/sideBar";
import Header from "../components/navBar/header";
import User from "../components/visitUser/user";
import UserInfo from "../components/visitUser/userInfo";
import UserPost from "../components/visitUser/userPost";
import { useNavigate, useParams } from "react-router-dom";
import FollowUser from "../components/visitUser/followUser";
import protectRoute from "../components/auth/protectedRoutes";

const UserDashboard = () => {
  const { userId } = useParams();
  const [
    email,
    firstName,
    lastName,
    aboutUserInfo,
    followers,
    followings,
    gender,
    telephone,
    id,
  ] = protectRoute();
  const navigate = useNavigate();
  if (userId === id) {
    console.log(userId, id);
    navigate("/u/user");
  }

  return (
    <div className="bg-gray-200 dark:bg-mainDark flex h-[100vh] overflow-y-scroll">
      <SideBar display="hidden md:flex h-fit max-h-[100vh] px-5" />
      <div className="w-full h-[100vh] overflow-y-scroll">
        <Header />
        <User />
        <FollowUser />
        <UserInfo />
        <UserPost />
      </div>
    </div>
  );
};

export default UserDashboard;
