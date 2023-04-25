import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const CardSuggested = (props) => {
  const [follow, setFollow] = useState("Follow +");
  const [id , setId] = useState(props.id)

  const followUsers = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/v1/api/u/home/suggested/follow",
        { id },
        { withCredentials: true }
      );
      setFollow("Following");
    } catch (err) {
      console.log(err);
    }
  };

  
  return (
    <div className="rounded-xl overflow-hidden max-w-[210px] flex flex-col bg-white dark:bg-subMajorDark box-border">
      <Link to={`/u/user/visit/${props.id}`}>
        <img
          className="w-[210px] h-[140px] object-cover"
          src="/Images/profile.jpeg"
          alt="profile image"
        />
        <div className="text-xl mt-3 mb-1 text-center dark:text-gray-200 text-gray-700 font-medium">
          {props.firstName} {props.lastName}
        </div>
      </Link>
      <div className="text-center mb-4 dark:text-white">
        {props.followers} Followers
      </div>
      <button
        onClick={followUsers}
        type="submit"
        className="hover:bg-blue-500 hover:text-white self-end justify-self-end transition-all duration-1000 mb-10 border-2 border-blue-500 text-blue-500 w-9/12 py-2 mx-auto rounded-3xl text-lg font-medium"
      >
        {follow}
      </button>
    </div>
  );
};

export default CardSuggested;
