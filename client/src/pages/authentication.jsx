import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";
import LoginImage from "../assets/Images/logo.1.png";
import Theme from "../components/theme/theme";
import { Close } from "../assets/icons/icons";
import Switcher from "../components/theme/switcher";
import { SideComp } from "../components/home/sideBar/sideComp";

const Authentication = () => {
  //  redirect options using useNavigate hook
  const history  = useNavigate()
  // handling the errors
  const [cookies] = useCookies(["cookie-name"]);
  const navigate = useNavigate();
  useEffect(() => {
    if (cookies.jwt) {
      navigate("/");
    }
  }, [cookies, navigate]);

  const generateError= (error) =>
  toast.error(error, {
    position: "top-center",
  });


  // Intergration with login to the server
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const loginSubmitData = (event) => {
    setLoginData((prevLoginData) => {
      return {
        ...prevLoginData,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleSubmitLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_PORT}/v1/api/login`,
        {
          ...loginData,
        },
        { withCredentials: true }
      ).then(async (response) => {
        const authToken = await response.data.token;
        document.cookie = `jwt=${authToken}; path=/; domain=socialiteinc.vercel.app; Secure; SameSite=None`;
        navigate("/");
      })
    } catch (error) {
      generateError(error.response.data.error)
      console.log(error.response.data.error)
    }
  };

  // Intergration with signup to the server
  const [signupData, setSignupData] = useState({ firstName: "", lastName: "", email: "", password: "", gender: "", telephone: "" });
  const signupSubmitData = (event) => {
    setSignupData((prevSignupData) => {
      return {
        ...prevSignupData,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleSubmitSignup = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_PORT}/v1/api/register`,
        {
          ...signupData,
        },
        { withCredentials: true }
      ).then(async (response) => {
        if(response.data.status){
          const authToken = await response.data.token;
          document.cookie = `jwt=${authToken}; path=/; domain=socialiteinc.vercel.app; Secure; SameSite=None`
          navigate("/");
        }else if(response.data.errors){
          generateError(response.errors.email)
          console.log(response.data.errors)
        }
      })
    } catch (error) {
      generateError(error.response.data.errors.email)
      console.log(error.response.data.errors.email);
    }
  };


  const [signupToggle, setSignupToggle] = useState(false);
  const [opacity , setOpacity] = useState('');
  const showSignup = () => {
    setSignupToggle(true);
    setOpacity('opacity-20')
  };
  const hideSignup = () => {
    setSignupToggle(false);
    setOpacity('')
  };

  // thme management in the authentication
  Theme()

  return (
    <div className="authentication relative dark:bg-mainDark dark:text-white">
      {/* The login page and the login form */}
      <ToastContainer />
      <div className={opacity}>
        <div className="lg:flex max-w-5xl min-h-screen mx-auto p-6 py-10">
          <div className="flex flex-col items-center lg: lg:flex-row lg:space-x-10">
            <div className="lg:mb-12 flex-1 lg:text-left text-center">
              <img
                src={LoginImage}
                alt="socialite image"
                className="lg:mx-0 lg:w-52 mx-auto w-40"
              />
              <p className="font-medium lg:mx-0 md:text-2xl mt-6 mx-auto sm:w-3/4 text-xl">
                {" "}
                Connect with friends and the world around you on Socialite.
              </p>
            </div>
            <div className="lg:mt-0 lg:w-96 md:w-1/2 sm:w-2/3 mt-10 w-full">
              <form className="p-6 space-y-4 relative bg-white dark:bg-subMajorDark shadow-lg rounded-lg" onSubmit={handleSubmitLogin}>
                <input
                  type="email"
                  name="email"
                  onChange={loginSubmitData}
                  placeholder="Email or Phone Number"
                  className="p-2 w-full outline-none border-2 rounded-md dark:text-gray-900"
                  required
                />
                <input
                  type="password"
                  name="password"
                  onChange={loginSubmitData}
                  placeholder="Password"
                  className="p-2 w-full outline-none border-2 rounded-md dark:text-gray-900"
                  required
                />
                <button
                  type="submit"
                  className="bg-blue-600 font-semibold p-3 rounded-md text-center text-white w-full"
                >
                  Log In
                </button>
                <a href="#" className="text-blue-500 text-center block">
                  {" "}
                  Forgot Password?{" "}
                </a>
                <hr className="pb-3.5" />
                <div className="flex">
                  <a
                    onClick={showSignup}
                    href="#register"
                    className="bg-green-600 hover:bg-green-500 hover:text-white font-semibold py-3 px-5 rounded-md text-center text-white mx-auto"
                  >
                    Create New Account
                  </a>
                </div>
              </form>
            </div>
          </div>
      <SideComp component={<Switcher />}/>

        </div>
      </div>
      {/* The signup  / register form of socialite */}

      {signupToggle && (
        <div
          id="register"
          className="absolute lg:w-8/12 xl:w-6/12 min-[860px]:w-10/12 lg:top-36 top-0 min-[860px]:left-1/2 min-[860px]:transform min-[860px]:-translate-x-1/2 signup"
        >
          <div className="rounded-xl shadow-2xl p-4 lg:w-12/12 bg-white dark:bg-subMajorDark">
            <div
              onClick={hideSignup}
              className="p-3 bg-gray-100 rounded-full m-3 float-right hover:bg-red-300 transition-all duration-1000"
            >
              <Close />
            </div>
            <div className="border-b px-7 py-5">
              <div className="lg:text-2xl text-xl font-semibold mb-1">
                {" "}
                Sign Up
              </div>
              <div className="text-base text-gray-600 dark:text-gray-300">
                {" "}
                It's quick and easy.
              </div>
            </div>
            <form className="p-7 space-y-5" onSubmit={handleSubmitSignup}>
              <div className="grid lg:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  name="firstName"
                  onChange={signupSubmitData}
                  className="p-2 w-full outline-none border-2 rounded-md dark:text-gray-900"
                  required
                />
                <input
                  type="text"
                  placeholder="Last  Name"
                  name="lastName"
                  onChange={signupSubmitData}
                  className="p-2 w-full outline-none border-2 rounded-md dark:text-gray-900"
                  required
                />
              </div>
              <input
                type="email"
                placeholder="Info@example.com"
                name="email"
                onChange={signupSubmitData}
                className="p-2 w-full outline-none border-2 rounded-md dark:text-gray-900"
                required
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={signupSubmitData}
                className="p-2 w-full outline-none border-2 rounded-md dark:text-gray-900"
                minLength={6}
                required
              />

              <div className="grid lg:grid-cols-2 gap-3">
                <div>
                  <label className="mb-0" htmlFor="gender"> Gender </label>
                  <select
                    onChange={signupSubmitData}
                    name="gender"
                    id="gender"
                    className="selectpicker  mt-2 p-[0.70rem] w-full outline-none border-2 rounded-md dark:text-gray-900"
                    required 
                  >
                    <option value="">--Select--</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="mb-2"> Phone: optional </label>
                  <input
                    type="tel"
                    name="telephone"
                    onChange={signupSubmitData}
                    placeholder="+250 785 304 805"
                    className="mt-2 p-2 w-full outline-none border-2 rounded-md dark:text-gray-900"
                  />
                </div>
              </div>
              <p className="text-[.85em] text-gray-400 dark:text-gray-200 pt-3">
                By clicking Sign Up, you agree to our
                <a href="/privacy-policy" className="text-blue-500">
                  Terms
                </a>
                ,<a href="/privacy-policy">Data Policy</a> and
                <a href="/privacy-policy">Cookies Policy</a>. You may receive SMS
                Notifications from us and can opt out any time.
              </p>
              <button type="reset" className="dark:text-red-400 text-red-700">Clear form</button>
              <div className="flex">
                <button
                  type="submit"
                  className="bg-blue-600 font-semibold mx-auto px-10 py-3 rounded-md text-center text-white"
                >
                  Get Started
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Authentication;