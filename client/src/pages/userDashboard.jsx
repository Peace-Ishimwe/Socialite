import React from "react";
import { protectRoute } from "../components/auth/protectedRoutes";

const UserDashboard = () => {
  protectRoute();

  return (
    <div>
      <div>UserDashboard</div>
      <div>UserDashboard</div>
    </div>
  );
};

export default UserDashboard;
