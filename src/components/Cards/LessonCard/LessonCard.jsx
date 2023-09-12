import React, { useState } from "react";
import "./LessonCard.scss";
import ButtonIcon from "../../Buttons/ButtonIcon/ButtonIcon";
import Icon_lessons from "../../../assets/icons/Icon_lessons.svg";
import Icon_journal from "../../../assets/icons/Icon_journal.svg";
import Icon_edit from "../../../assets/icons/Icon_edit.svg";
import Icon_delete from "../../../assets/icons/Icon_delete.svg";
import Down_button from "../../../assets/icons/Down_button.svg";
import FileTab from "../../FileTab/FileTab";

const LessonCard = ({ lesson, type, dateStart, timeStart, editAccess }) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleDropDown() {
    setIsOpen((prev) => !prev);
  }

  return (
    <div className="lesson-card-block">
      <div className="lesson-card-date">
        <div>{dateStart}</div>
        <div>{timeStart}</div>
      </div>
      <div className="lesson-card-wrapper">
        <div className="lesson-card-title-container">
          <div className={!isOpen ? "lesson-card-main-text" : "lesson-card-main-text main-text-opened"}>{lesson}</div>
          {type && <div className="lesson-card-sign">{type}</div>}
        </div>
        <div className="lesson-card-icons-container">
          {editAccess && <ButtonIcon icon={Icon_edit} />}
          {editAccess && <ButtonIcon icon={Icon_delete} />}
          <div
            className={
              !isOpen
                ? "lesson-card-down-button"
                : "lesson-card-down-button-opened"
            }
            onClick={handleDropDown}
          >
            <ButtonIcon icon={Down_button} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="lesson-card-additional-info">
          <div className="lesson-card-additional-info-prop">
            <div style={{'minWidth': '120px', 'opacity': '0.5'}}>Викладач</div>
            <div style={{'flex': '1', 'minWidth': '120px'}}>Расщектаєв Антон Володимирович</div>
          </div>
          <div className="lesson-card-additional-info-prop">
            <div style={{'minWidth': '120px', 'opacity': '0.5'}}>Тема заняття</div>
            <div style={{'flex': '1', 'minWidth': '120px'}}>Основи кастомки</div>
          </div>
          <div className="lesson-card-additional-info-files">
            <FileTab/>
            <FileTab/>
            <FileTab/>
            <FileTab/>
          </div>
        </div>
      )}
    </div>
  );
};

export default LessonCard;
