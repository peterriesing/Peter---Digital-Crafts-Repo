import React from "react";
import { useSelector } from "react-redux";
import UserProfile from "./UserProfile";

const UserDash = () => {
  const user = useSelector((state) => state.user.value);
  return (
    <div>
      <h1>User Dash</h1>
      <h3>{user.name}</h3>
      <UserProfile />
    </div>
  );
};

export default UserDash;
