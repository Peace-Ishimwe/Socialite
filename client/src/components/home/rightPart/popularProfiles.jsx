import React, { useEffect, useState } from "react";
import Profiles from "./poularProfiles/profiles";
import axios from "axios";

const PopularProfiles = () => {
  const [profiles, setProfiles] = useState();
  useEffect(() => {
    const getPopularProfiles = async () => {
      const response = await axios.post(
          `${import.meta.env.VITE_BACKEND_PORT}/v1/api/u/home/popular/profiles`,
          {},
          { withCredentials: true }
        )
        .then((response) => {
          setProfiles(response.data);
        });
    };
    getPopularProfiles();
  }, []);

  return (
    <div className="main-container bg-gray-100 dark:bg-subMajorDark w-full pb-5 rounded-md overflow-scroll h-[23.5rem]">
      <div className="mb-5 text-lg dark:text-white font-semibold text-black sticky top-0 shadow-md p-5 bg-gray-200 dark:bg-subMajorDark">
        Popular profiles
      </div>
      <div className="flex flex-col gap-3 pl-5">
        {profiles != null &&
          profiles.map((profile) => {
            return <Profiles key={profile._id} id={profile._id} firstName={profile.firstName} lastName={profile.lastName} profileImage={profile.profileImage} followersCount={profile.followersCount} />;
          })}
      </div>
    </div>
  );
};

export default PopularProfiles;
