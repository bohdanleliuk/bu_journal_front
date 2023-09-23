import React, { useState } from "react";
import styles from "./SideBar.module.scss";
import { DayNightSwitch, UserInfo } from "../../components";
import MenuLinks from "./MenuLinks/MenuLinks";
import {ButtonIcon, SimpleIcon} from "../../ui";
import { IconExit, MenuIcon, CloseIcon } from "../../assets/icons";

const SideBar = () => {


  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleBurgerMenu = () => {
    setTimeout(() => {
      setIsMenuOpen(prev => !prev);
    }, 200)
  }

  return (
    <div className={styles.sideBar}>
      <div className={styles.container}>
        <div className={styles.topContainer}>
          <UserInfo user={{ name: "Bohdan Leliuk", role: "student" }} />
          <div className={styles.menuLinks}>
             <MenuLinks />
          </div>
         
        </div>
        <div className={styles.buttomContainer}>
          <div className={styles.buttonExit}>
            <ButtonIcon text="Вийти" icon={IconExit} />
          </div>
          {false && <DayNightSwitch />}
          <div className={styles.burgerMenu} onClick={handleBurgerMenu}>
            {isMenuOpen ? <SimpleIcon icon={CloseIcon}/> :<SimpleIcon icon={MenuIcon}/>}
          </div>
          {isMenuOpen && <div className={styles.sideMenu}>
            <div className={styles.containerSide}>
            <div onClick={handleBurgerMenu}>
              <MenuLinks/>
            </div>
              <ButtonIcon text="Вийти" icon={IconExit} />
            </div>
          </div>}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
