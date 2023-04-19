import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

const protectRoute =  () => {
  // const [userData , setUserData] = useState()
  const [email , setEmail] = useState("")
  const [firstName , setFirstName] = useState("")
  const [lastName , setLastName] = useState("")

  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies([]);

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
        setEmail(data.email)
        setFirstName(data.firstName)
        setLastName(data.lastName)
        if (!data.status) {
          removeCookie("jwt");
          navigate("/authenticate");
        };
      }
    };

    verifyUser();
  }, [cookies, navigate, removeCookie]);

  return [ email , firstName , lastName ]

}

export default protectRoute