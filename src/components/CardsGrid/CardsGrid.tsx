import React, { useCallback, useEffect, useState } from "react";
import { Card } from "./Card/Card";
import ErrorLabel from "../ui/ErrorLabel/ErrorLabel";
import Loader from "../ui/Loader/Loader";
import styles from "./CardsGrid.module.css";

const CARDS_URL = "https://jsonplaceholder.typicode.com/albums";

type Card = { title: string; id: number; userId: number };

export const CardsGrid: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = () => {
    setLoading(true);
    setError(null);

    fetch(CARDS_URL)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(response);
      })
      .then(setCards)
      .catch(setError)
      .finally(() => {
        setLoading(false);
      });
  };

  const onCardClick = useCallback((id: string, selected: boolean) => {
    //here we can get id of (un)selected card
  }, []);

  return (
    <div className={styles.cards_grid}>
      {loading ? (
        <Loader />
      ) : error ? (
        <ErrorLabel
          title={"Error while loading cards"}
          retryText={"Try again"}
          onRetry={fetchCards}
        />
      ) : cards?.length ? (
        cards?.map(({ id, title }) => (
          <Card key={id} title={title} onClick={onCardClick.bind(null, id)} />
        ))
      ) : (
        <span>No cards founded</span>
      )}
    </div>
  );
};
