import React from "react";
import "./SubjectCard.scss";
import Icon_lessons from "../../../assets/icons/Icon_lessons.svg";
import Icon_journal from "../../../assets/icons/Icon_journal.svg";
import Icon_edit from "../../../assets/icons/Icon_edit.svg";
import Icon_delete from "../../../assets/icons/Icon_delete.svg";
import ButtonIcon from "../../../ui/ButtonIcon/ButtonIcon";
import Card from "../../../ui/Crad/Card";
import MainText from "../../../ui/Text/MainText/MainText";
import SimpleIcon from "../../../ui/SimpleIcon/SimpleIcon";

const SubjectCard = ({subject}) => {
  return (
    <Card>
      <MainText>{subject}Subject name</MainText>
      <div className="icons-container">
        <SimpleIcon icon={Icon_journal} />
        <SimpleIcon icon={Icon_lessons} />
        <SimpleIcon icon={Icon_edit} />
        <SimpleIcon icon={Icon_delete} />
      </div>
    </Card>
  );
};

export default SubjectCard;
