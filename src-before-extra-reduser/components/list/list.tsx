import { TOfferCard } from '../../types';
import PlaceCard from '../place-card/place-card';
import React, { useState } from 'react';

type ListProps = {
  classOfList: string;
  classOfCard: string;
  cards:TOfferCard[];
  onListCardHover: (id:number | undefined) => void;
}

export default function List({classOfList, classOfCard, cards, onListCardHover}:ListProps): JSX.Element {
  const [activeCardId, setActiveCardId] = useState<number | undefined>(0);

  const onCardHover = (idCard:number) => {
    setActiveCardId(idCard);
    onListCardHover(activeCardId);
  };

  // /* eslint-disable */ console.log(activeCardId);

  return (
    <div className={`${classOfList} places__list`}>
      {/* {cards.map((card) => <PlaceCard {...card} key={card.id} onCardHover={onCardHover} />)} */}
      {cards.map((card) => <PlaceCard card={card} classCard={classOfCard} onCardHover={onCardHover} key={card.id}/>)}
    </div>
  );
}
