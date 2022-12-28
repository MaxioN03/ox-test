import React from "react";
import styles from "./CardImage.module.css";

const PICTURES_LINK = "https://picsum.photos/50";

export const CardImage: React.FC = () => {
  return (
    <div className={styles.card_image}>
      <img src={PICTURES_LINK}></img>
    </div>
  );
};
