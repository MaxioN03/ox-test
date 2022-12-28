import React, { useState } from "react";
import { StarIcon } from "../../ui/StarIcon/StarIcon";
import styles from "./Card.module.css";
import { CardImage } from "./CardImage/CardImage";

export const Card: React.FC<{
  title: string;
  onClick?: (selected: boolean) => void;
}> = ({ title, onClick }) => {
  const [selected, setSelected] = useState<boolean>(false);

  const onCardClick = () => {
    setSelected(!selected);
    onClick(!selected);
  };

  return (
    <div className={styles.card} onClick={onCardClick}>
      <div>
        <CardImage />
      </div>
      <div className={styles.title} title={title}>
        {title}
      </div>
      <div>
        <StarIcon selected={selected} />
      </div>
    </div>
  );
};
