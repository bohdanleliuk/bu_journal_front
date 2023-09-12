import React from "react";
import "./SideBar.scss";
import { Title } from "../Title/Title";
import UserInfo from "../UserInfo/UserInfo";
import MenuLinks from "../MenuLinks/MenuLinks";
import DayNightSwitch from "../DayNightSwitch/DayNightSwitch";
import ButtonIcon from "../Buttons/ButtonIcon/ButtonIcon";
import ExitIcon from "../../assets/icons/Icon_exit.svg";

const SideBar = () => {
  return (
    <div className="side-bar">
      <div className="side-bar-container">
        <div className="side-bar-top-container">
          <UserInfo user={{ name: "Bohdan Leliuk", role: "student" }} />
          <MenuLinks />
        </div>
        <div className="side-bar-buttom-container">
          <div className="button-exit">
            <ButtonIcon text="Вийти" icon={ExitIcon} />
          </div>
          <DayNightSwitch />
          <div className="burger-menu" />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
