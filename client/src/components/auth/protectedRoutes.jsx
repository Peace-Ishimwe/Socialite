import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

const protectRoute = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [aboutUserIn, setLastAboutUser] = useState("");
  const [followers, setFollowers] = useState("");
  const [followings, setFollowings] = useState("");
  const [gender, setGender] = useState("");
  const [telephone, setTelephone] = useState("");
  const [id , setId] = useState("");

  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies([]);

  useEffect(() => {
    const verifyUser = async () => {
      try {
        if (!cookies.jwt) {
          navigate("/authenticate");
        } else {
          const { data } = await axios.post(
            `${import.meta.env.VITE_BACKEND_PORT}/v1/api`,
            {},
            {
              withCredentials: true,
            }
          );
          if (data) {
            setEmail(data.email);
            setFirstName(data.firstName);
            setLastName(data.lastName);
            setLastAboutUser(data.about);
            setFollowers(data.followers)
            setFollowings(data.followings)
            setGender(data.gender)
            setTelephone(data.telephone)
            setId(data.id)
          }
          if (!data.status) {
            removeCookie("jwt");
            navigate("/authenticate");
          }
        }
      } catch (err) {
        console.log(err);
      }
    };
    verifyUser();
  }, []);

  return [email, firstName, lastName, aboutUserIn , followers, followings , gender , telephone , id];
};

export default protectRoute;