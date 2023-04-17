import React from "react";
import ProfileImage from "../../../../assets/Images/profile.jpeg";
import { MapIcon } from "../../../../assets/icons/icons";

const Profiles = (props) => {
  return (
    <div className="flex items-center gap-2 text-gray-700 dark:text-gray-200">
      <img
        className="object-cover rounded-full w-10 h-10"
        src={ProfileImage}
        alt="profiles"
      />
      <div>
        <div className="text-lg">{props.user}</div>
        <div>{props.followers} followers</div>
      </div>
      <a href="#"><MapIcon /></a>
    </div>
  );
};

export default Profiles;
