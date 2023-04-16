import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

export const protectRoute = () => {
    const navigate = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies([]);
    const [data , setData] = useState()
    useEffect(() => {
        const verifyUser = async () => {
         if (!cookies.jwt) {
           navigate("/authenticate");
         } else {
           const { data } = await axios.post(
             "http://localhost:5000/v1/api",
             {},
             {
               withCredentials: true,
             }
           );
           if (!data.status) {
             removeCookie("jwt");
             navigate("/authenticate");
           }
         }
       };
       verifyUser();
     }, [cookies, navigate, removeCookie]);
}