import React from "react";
import styles from './UserInfo.module.scss';
import { MainText, TextSign } from "../../ui";

const UserInfo = ({user}) => {
  return (
    <div className={styles.userInfo}>
      <div className={styles.logo}>BU</div>
      <div className={styles.user}>
        <MainText>{user.name}</MainText>
        <TextSign>{user.role}</TextSign>
      </div>
    </div>
  );
};

export default UserInfo;
