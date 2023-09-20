import React from "react";
import styles from "./SubjectCard.module.scss";
import { Card, MainText, SimpleIcon } from "../../../ui";
import IconsController from "../../IconsController/IconsController";

const SubjectCard = ({subject}) => {

  const iconsHandler = {
    handleJournal: () => {},
    handleLessons: () => {},
    handleEdit: () => {},
    handleDelete: () => {},
  };

  return (
    <Card>
      <MainText>{subject?.name}</MainText>
      <div className={styles.iconsContainer}>
        <IconsController iconsHandler={iconsHandler}/>
      </div>
    </Card>
  );
};

export default SubjectCard;
