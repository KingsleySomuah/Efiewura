// components/UserAvatar.jsx
import React from "react";
import { getInitials } from "../services/getinitials";

const UserAvatar = ({ userName }) => {
  const initials = getInitials(userName);

  return (
    <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
      {initials}
    </div>
  );
};

export default UserAvatar;
