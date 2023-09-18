import React from "react";
import styles from "./SubjectCard.module.scss";
import { Card, MainText, SimpleIcon } from "../../../ui";
import {IconJournal, IconLessons, IconEdit, IconDelete} from '../../../assets/icons';

const SubjectCard = ({subject}) => {
  return (
    <Card>
      <MainText>{subject}Subject name</MainText>
      <div className={styles.iconsContainer}>
        <SimpleIcon icon={IconJournal} />
        <SimpleIcon icon={IconLessons} />
        <SimpleIcon icon={IconEdit} />
        <SimpleIcon icon={IconDelete} />
      </div>
    </Card>
  );
};

export default SubjectCard;
