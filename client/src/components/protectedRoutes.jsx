import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { toast } from "react-toastify";

export const protectRoute = () => {
    const navigate = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies([]);
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
           } else
             toast(`Hi ${data.user} 🦄`);
         }
       };
       verifyUser();
     }, [cookies, navigate, removeCookie]);
}