import React from "react";
import "./SideBar.scss";
import { Title } from "../Title/Title";
import UserInfo from "../UserInfo/UserInfo";
import MenuLinks from "../MenuLinks/MenuLinks";

const SideBar = () => {
  return (
    <div className="side-bar">
      <div className="side-bar-container">
        <div className="side-bar-top-container">
          <UserInfo user={{ name: "Bohdan Leliuk", role: "student" }} />
          <MenuLinks />
        </div>
        <div className="side-bar-buttom-container">
          <div className="button-exit">Вийти</div>
          <div className="switch" style={{'width': '60px', 'height': '32px', 'backgroundColor': 'black', 'borderRadius': '16px'}}></div>
          <div className="burger-menu"/>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
