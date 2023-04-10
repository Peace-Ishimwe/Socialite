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
    <>
      <div className="private">
        <h1>Super Secret Page</h1>
        <button onClick={logOut}>Log out</button>
      </div>
      <ToastContainer />
    </>
  );
}

export default Home