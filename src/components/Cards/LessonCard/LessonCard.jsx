import React, { useState } from "react";
import "./LessonCard.scss";
import Card from "../../../ui/Crad/Card";
import AdditionalInfo from "./AdditionalInfo/AdditionalInfo";
import CardDate from "./CardDate/CardDate";
import MainText from '../../../ui/Text/MainText/MainText';
import TextSign from "../../../ui/Text/TextSign/TextSign";
import IconsController from "../../IconsController/IconsController";

const LessonCard = ({ lesson, editAccess }) => {

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

  const [isOpen, setIsOpen] = useState(false);

  function handleDropDown() {
    setIsOpen((prev) => !prev);
  }

  return (
    <Card colunm>
      <CardDate date={lesson.date}/>
      <div className="lesson-card-wrapper">
        <div className="lesson-card-title-container">
          <MainText>{lesson.name}</MainText>
          <TextSign>{lesson.type}</TextSign>
        </div>
        <IconsController lesson={lesson} handleDropDown={handleDropDown} isOpen={isOpen}/>
      </div>
      {isOpen && (
        <AdditionalInfo lesson={lesson}/>
      )}
    </Card>
  );
};

export default LessonCard;
