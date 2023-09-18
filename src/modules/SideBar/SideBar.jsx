import React from "react";
import styles from "./SideBar.module.scss";
import { DayNightSwitch, MenuLinks, UserInfo } from "../../components";
import {ButtonIcon} from "../../ui";
import { IconExit } from "../../assets/icons";

const SideBar = () => {
  return (
    <div className={styles.sideBar}>
      <div className={styles.container}>
        <div className={styles.topContainer}>
          <UserInfo user={{ name: "Bohdan Leliuk", role: "student" }} />
          <MenuLinks />
        </div>
        <div className={styles.buttomContainer}>
          <div className={styles.buttonExit}>
            <ButtonIcon text="Вийти" icon={IconExit} />
          </div>
          <DayNightSwitch />
          <div className={styles.burgerMenu} />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
