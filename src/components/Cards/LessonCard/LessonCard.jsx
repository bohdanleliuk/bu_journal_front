import React, { useState } from "react";
import styles from "./LessonCard.module.scss";
import { Card, MainText, TextSign} from "../../../ui";
import AdditionalInfo from "./AdditionalInfo/AdditionalInfo";
import CardDate from "./CardDate/CardDate";
import IconsController from "../../IconsController/IconsController";

const LessonCard = ({ lesson }) => {

  lesson = {
    "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "name": "Culture of speaking",
    "type": "lecture",
    "date": "2023-09-16T14:56:26.597Z",
    "subject": {
      "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "name": "Nature Science",
      "teacher": {
        "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "lastName": "Leliuk",
        "firstName": "Bohdan",
        "patronymic": "Petrovich"
      },
      "group": {
        "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "name": "KM-501",
        "currator": {
          "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          "lastName": "Leliuk",
          "firstName": "Bohdan",
          "patronymic": "Petrovich"
        }
      }
    }
  }

  const iconsHandler = {
    handleEdit: () => {},
    handleDelete: () => {},
    handleDropDown: handleDropDown,
  };

  const [isOpen, setIsOpen] = useState(false);

  function handleDropDown() {
    setIsOpen((prev) => !prev);
  }

  return (
    <Card colunm>
      <CardDate date={lesson.date}/>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <MainText>{lesson.name}</MainText>
          <TextSign>{lesson.type}</TextSign>
        </div>
        <IconsController iconsHandler={iconsHandler}/>
      </div>
      {isOpen && (
        <AdditionalInfo lesson={lesson}/>
      )}
    </Card>
  );
};

export default LessonCard;
