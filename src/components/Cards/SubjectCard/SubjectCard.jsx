import React from "react";
import styles from "./SubjectCard.module.scss";
import { Card, MainText, SimpleIcon } from "../../../ui";
import IconsController from "../../IconsController/IconsController";
import { useNavigate } from "react-router-dom";

const SubjectCard = ({subject}) => {

  const navigate = useNavigate();

  const iconsHandler = {
    handleJournal: () => navigate(`/subjects/journal/${subject.id}`),
    handleLessons: () => navigate(`/subjects/lessons/${subject.id}`),
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
