import { BlackjackValue, BustedValue } from "./constants";
import { Card } from "./deck";
import { calculateCardValue } from "./utils";

class Hand {
  public name: string;
  public cards: Array<Card> = [];

  constructor(name: string) {
    this.name = name;
  }

  public addCard(card: Card) {
    this.cards.push(card);
  }

  public get value() {
    return this.cards.reduce(
      (rollingTotal, card) => rollingTotal + calculateCardValue(card),
      0
    );
  }

  public get isBlackjack() {
    return this.cards.length === 2 && this.value === BlackjackValue;
  }

  public get isBusted() {
    return this.value >= BustedValue;
  }
}

export default Hand;
