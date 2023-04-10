import React from "react";
import { protectRoute } from "../components/protectedRoutes";
import { ToastContainer } from "react-toastify";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()
  const [cookies, setCookie, removeCookie] = useCookies([]);
  protectRoute()
  const logOut = () => {
    removeCookie("jwt");
    navigate("/authenticate");
  };
  return (
    <div className="h-[100vh] w-full bg-white flex justify-center items-center">
      <div className="text-3xl  text-blue-500 font-semibold">
        <h1>Super Secret Page</h1>
        <button className="text-white text-xl bg-red-500 py-2 px-5 rounded-md mt-5 ml-16" onClick={logOut}>Log out</button>
        <p></p>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Home