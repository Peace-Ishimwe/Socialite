import React from "react";
import { Link } from "react-router-dom";
import protectRoute from "../../auth/protectedRoutes";

export const SideComp = (props) => {
  return (
    <main
      className="sidebar-home font-semibold text-gray-800 dark:text-gray-200"
      onClick={props.onClick}
    >
      <div className="flex w-fit items-center gap-2">
        <div className="bg-gray-200 dark:bg-gray-700 rounded-full p-2">
          {props.component}
        </div>
        <span>
          {props.title}
          {props.true && (
            <div className="w-full h-[.188rem] bg-gray-700 dark:bg-gray-200 rounded-full"></div>
          )}
        </span>
      </div>
    </main>
  );
};

export const AddPost = (props) => {
  return (
    <main className="sidebar-home text-xs font-semibold text-gray-200 rounded-full bg-blue-500 w-fit px-2 py-1">
      <div className="flex w-fit items-center gap-2 p-1">
        {props.component}
        <span>{props.title}</span>
      </div>
    </main>
  );
};

export const UserProfile = () => {
  const [email , firstName , lastName] = protectRoute();
  return (
    <Link to="/u/user">
      <div className="flex items-center gap-2">
        <div className="rounded-full bg-black w-fit overflow-hidden">
          <img
            className="object-cover h-10 w-10"
            src="/Images/profile.jpeg"
            alt="the profile image"
          />
        </div>
        <span className="text-lg text-gray-800 dark:text-gray-200">
          {firstName} {lastName}
        </span>
      </div>
    </Link>
  );
};
