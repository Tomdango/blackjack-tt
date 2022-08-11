import lodashShuffle from "lodash.shuffle";
import { CardRank, CardSuit } from "./constants";

export type Card = {
  rank: typeof CardRank[number];
  suit: typeof CardSuit[number];
};

class Deck {
  public cards: Array<Card>;

  constructor() {
    this.cards = this.createAllCards();
  }

  public dealCard() {
    const card = this.cards.shift();
    if (!card) {
      throw new Error("Every card have been dealt from the deck");
    }

    return card;
  }

  public shuffle() {
    this.cards = lodashShuffle([...this.cards]);
  }

  private createAllCards() {
    return CardRank.flatMap((rank) =>
      CardSuit.map((suit) => ({
        rank,
        suit,
      }))
    );
  }
}

export default Deck;
