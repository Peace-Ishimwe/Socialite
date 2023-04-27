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
        <div className="text-lg">{props.firstName} {props.lastName}</div>
        <div>{props.followersCount} followers</div>
      </div>
      <MapIcon />
    </Link>
  );
};

export default Profiles;
