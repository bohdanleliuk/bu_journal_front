import React from "react";
import styles from "./AdditionalInfo.module.scss";
import FileTab from "../../../FileTab/FileTab";

const AdditionalInfo = ({lesson}) => {
  return (
    <div className={styles.info}>
      <div className={styles.prop}>
        <div style={{ minWidth: "120px", opacity: "0.5" }}>Викладач</div>
        <div style={{ flex: "1", minWidth: "120px" }}>
        {`${lesson.subject.teacher.lastName} ` + `${lesson.subject.teacher.firstName} ` + `${lesson.subject.teacher.patronymic} `}
        </div>
      </div>
      <div className={styles.files}>
        <FileTab />
        <FileTab />
        <FileTab />
        <FileTab />
      </div>
    </div>
  );
};

export default AdditionalInfo;
