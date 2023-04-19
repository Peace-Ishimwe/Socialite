import React from "react";
import { protectRoute } from "../components/auth/protectedRoutes";

const UserDashboard = () => {
  protectRoute();

  return <div>UserDashboard</div>;
};

export default UserDashboard;