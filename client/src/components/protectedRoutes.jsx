import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { toast } from "react-toastify";

export const protectRoute = () => {
    const generateData = (data) =>
    toast(`Hi ${data.user} 😄`, {
      position: "top-right",
    });
    const navigate = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies([]);
    const [data , setData] = useState()
    useEffect(() => {
        const verifyUser = async () => {
         if (!cookies.jwt) {
           navigate("/authenticate");
         } else {
           const { data } = await axios.post(
             "http://localhost:5000",
             {},
             {
               withCredentials: true,
             }
           );
           if (!data.status) {
             removeCookie("jwt");
             navigate("/authenticate");
           }else{
            generateData(data);
           }
         }
       };
       verifyUser();
     }, [cookies, navigate, removeCookie]);
}