import React, { useState } from "react";
import Theme from "../theme/theme";
import Footer from "../footer/footer";
import axios from "axios";
import { Audio } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";

const Contact = () => {
  Theme();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [telephone, setTelephone] = useState();
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false)

  const generateSuccess = (success) =>
    toast.success(success, {
      position: "top-center",
    });

  const handleSubmitMessage = (e) => {
    e.preventDefault()
    setLoader(true)
    const response = axios
      .post(
        `${import.meta.env.VITE_BACKEND_PORT}/v1/api/contact/us`,
        { email, name, subject, telephone, message },
        { withCredentials: true }
      )
      .then((response) => {
        setLoader(false)
        generateSuccess(response.data);
        setEmail("");
        setMessage("");
        setTelephone("");
        setSubject("");
        setName("");
      });
  };
  return (
    <div className="main_content dark:bg-subMainDark md:h-[100vh] overflow-y-scroll">
      <div
        className={`bg-blue-400 dark:bg-mainDark flex from-blue-400  h-52 items-center justify-center lg:h-80 pb-10 relative to-blue-300 via-blue-400 w-full`}
      >
        <div className="text-center max-w-xl mx-auto z-10 relative px-5">
          <div className="lg:text-4xl text-2xl text-white font-semibold mb-3">
            {" "}
            Leave a message{" "}
          </div>
          <div className="text-white text-lg font-medium text-opacity-90">
            {" "}
            Contact us if you have any questions about our company We will try
            to provide an answer{" "}
          </div>
        </div>
      </div>
      <div className="mcontainer">
        <div className="-mt-16 bg-white dark:bg-subMajorDark max-w-2xl mx-auto p-10 relative rounded-md shadow">
          <form onSubmit={handleSubmitMessage} className="grid md:grid-cols-2 md:gap-y-7 md:gap-x-6 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="with-border p-2 w-full outline-none border-2 rounded-md"
              value={name}
              onChange={(e)=>{setName(e.target.value)}}
            />
            <input
              type="email"
              placeholder="Email address"
              className="with-border p-2 w-full outline-none border-2 rounded-md"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="tel"
              placeholder="Contact Number"
              className="with-border p-2 w-full outline-none border-2 rounded-md"
              required
              value={telephone}
              onChange={(e) => {
                setTelephone(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="subject"
              value={subject}
              className="with-border p-2 w-full outline-none border-2 rounded-md"
              onChange={(e) => {
                setSubject(e.target.value);
              }}
              required
            />
            <textarea
              placeholder="How can we help?"
              rows="5"
              className="with-border md:col-span-2 p-5 px-7 resize-none h-72 outline-none border-2 rounded-md"
              required
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            ></textarea>
            <div className="md:col-span-2 md:flex items-center justify-between">
              <div>
                <div className="checkbox flex items-center gap-1">
                  <input className="w-4 h-4" type="checkbox" id="chekcbox2" />
                  <label htmlFor="chekcbox2">
                    <span className="checkbox-icon"></span>{" "}
                    <span className="font-medium text-gray-400">
                      I agree to the Terms &amp; Conditions
                    </span>
                  </label>
                </div>
              </div>
              {loader == false && (
                <button
                  type="submit"
                  className="bg-blue-500 px-10 py-2 text-center text-white rounded-md mx-auto"
                >
                  Submit
                </button>
              )}
              {loader == true && (
                <button className="bg-blue-500 px-10 py-2 text-center text-white rounded-md mx-auto">
                  <Audio
                    height="24"
                    width="60"
                    radius="9"
                    color="white"
                    ariaLabel="loading"
                  />
                </button>
              )}
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
