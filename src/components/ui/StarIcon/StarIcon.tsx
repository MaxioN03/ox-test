import React from "react";
import styles from "./StarIcon.module.css";

export const StarIcon: React.FC<{ selected: boolean }> = ({ selected }) => {
  return (
    <div className={[styles.star, selected ? styles.selected : ""].join(" ")} />
  );
};
