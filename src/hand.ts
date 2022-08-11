import { Card } from "./deck";
import { calculateCardValue } from "./utils";

class Hand {
  public cards: Array<Card> = [];

  public addCard(card: Card) {
    this.cards.push(card);
  }

  public get value() {
    return this.cards.reduce(
      (rollingTotal, card) => rollingTotal + calculateCardValue(card),
      0
    );
  }
}

export default Hand;
