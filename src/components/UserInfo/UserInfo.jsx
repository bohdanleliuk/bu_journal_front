import React from "react";
import './UserInfo.scss';

const UserInfo = ({user}) => {
  return (
    <div className="user-info">
      <div className="logo">BU</div>
      <div className="user">
        <div className="user-name">{user.name}</div>
        <div className="user-role">{user.role}</div>
      </div>
    </div>
  );
};

export default UserInfo;
