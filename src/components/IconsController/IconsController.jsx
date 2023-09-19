import React from "react";
import styles from "./IconsController.module.scss";
import {
  IconJournal,
  IconLessons,
  IconEdit,
  IconDelete,
  DownButton,
} from "../../assets/icons";
import { SimpleIcon } from "../../ui";

const IconsController = ({ iconsHandler }) => {
  return (
    <div className={styles.iconsController}>
      {iconsHandler?.handleJournal && (
        <div onClick={iconsHandler.handleJournal}>
          <SimpleIcon icon={IconJournal} />
        </div>
      )}
      {iconsHandler?.handleLessons && (
        <div onClick={iconsHandler.handleLessons}>
          <SimpleIcon icon={IconLessons} />
        </div>
      )}
      {iconsHandler?.handleEdit && (
        <div onClick={iconsHandler.handleEdit}>
          <SimpleIcon icon={IconEdit} />
        </div>
      )}
      {iconsHandler?.handleDelete && (
        <div onClick={iconsHandler.handleDelete}>
          <SimpleIcon icon={IconDelete} />
        </div>
      )}
      {iconsHandler?.handleDropDown && (
        <div onClick={iconsHandler.handleDropDown}>
          <SimpleIcon icon={DownButton} />
        </div>
      )}
    </div>
  );
};

export default IconsController;
