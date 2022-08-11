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

  public dealCard() {}

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
