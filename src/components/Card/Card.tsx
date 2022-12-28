import React from "react";
import styles from "./Card.module.css";

export const Card: React.FC<{ title: string }> = ({ title }) => (
  <div className={styles.card}>
    <div>
      <CardImage />
    </div>
    <div>{title}</div>
    <div>
      <StarIcon />
    </div>
  </div>
);

const CardImage: React.FC = () => {
  return (
    <div className={styles.card_image}>
      <img src="https://picsum.photos/200"></img>
    </div>
  );
};

const StarIcon: React.FC = () => {
  return <div className={styles.star} />;
};
