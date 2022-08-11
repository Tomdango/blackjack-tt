import { Card } from "./deck";

const pictureCardValueMap = {
  J: 10,
  Q: 10,
  K: 10,
  A: 11,
};

export const calculateCardValue = (card: Card): number => {
  if (typeof card.rank === "number") {
    return card.rank;
  }

  if (card.rank in pictureCardValueMap) {
    return pictureCardValueMap[card.rank];
  }

  throw new Error(
    `Unable to calculate value for card ${card.suit}${card.rank}`
  );
};
