import React from "react";
import { MapIcon } from "../../../../assets/icons/icons";
import { Link } from "react-router-dom";

const Profiles = (props) => {
  return (
    <Link to={`/u/user/visit/${props.id}`} className="flex items-center gap-2 text-gray-700 dark:text-gray-200">
      <img
        className="object-cover rounded-full w-10 h-10"
        src={props.profileImage}
        alt="profiles"
      />
      <div>
        <div className="text-[16px]">{props.firstName} {props.lastName}</div>
        <div className="text-[14px]">{props.followersCount} followers</div>
      </div>
    </Link>
  );
};

export default Profiles;
