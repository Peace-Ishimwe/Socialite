import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const CardSuggested = (props) => {
  const [follow, setFollow] = useState(false);
  const [id, setId] = useState(props.id);
  const [numberOfFollows, setNumberOfFollows] = useState(props.followers);

  const followUsers = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/v1/api/u/home/suggested/follow",
        { id },
        { withCredentials: true }
      );
      setFollow(true);
      setNumberOfFollows(numberOfFollows + 1);
    } catch (err) {
      console.log(err);
    }
  };

  const unFollowUsers = async () => {
    try {
      const response = await axios
        .post(
          "http://localhost:3000/v1/api/u/home/suggested/unfollow",
          { id },
          { withCredentials: true }
        )
        .then((response) => {
          setFollow(false);
          setNumberOfFollows(numberOfFollows - 1);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const checkIfFollowing = async () => {
      try {
        const response = await axios
          .post(
            "http://localhost:3000/v1/api/u/home/check/follow",
            { id },
            { withCredentials: true }
          )
          .then((response) => {
            if (response.data.isFollowing === true) {
              setFollow(true);
            }
          });
      } catch (err) {
        console.log(err);
      }
    };

    checkIfFollowing();
  }, []);

  return (
    <div className="rounded-xl overflow-hidden max-w-[210px] min-w-[210px] flex flex-col bg-white dark:bg-subMajorDark box-border">
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
        {numberOfFollows} Followers
      </div>
      {follow === false && (
        <button
          onClick={followUsers}
          type="submit"
          className="hover:bg-blue-500 hover:text-white self-end justify-self-end transition-all duration-1000 mb-10 border-2 border-blue-500 text-blue-500 w-9/12 py-2 mx-auto rounded-3xl text-lg font-medium"
        >
          Follow +
        </button>
      )}
      {follow === true && (
        <button
          onClick={unFollowUsers}
          type="submit"
          className="hover:bg-blue-500 hover:text-white self-end justify-self-end transition-all duration-1000 mb-10 border-2 border-blue-500 text-blue-500 w-9/12 py-2 mx-auto rounded-3xl text-lg font-medium"
        >
          Following
        </button>
      )}
    </div>
  );
};

export default CardSuggested;
