import Deck, { Card } from "../deck";

describe("Deck", () => {
  it("initialising the object returns an unshuffled deck with all expected cards", () => {
    const deck = new Deck();

    /**
     * This is a little long, but we want to ensure that all the cards are in the deck without worrying about
     * shuffle logic reading to an intermittennt test. Also, I personally don't feel comfortable writing a function to
     * generate some test data without also then having to write a test for that data generation function.
     */
    const expectedCards = [
      { rank: "A", suit: "♠" },
      { rank: "A", suit: "♥" },
      { rank: "A", suit: "♦" },
      { rank: "A", suit: "♣" },
      { rank: 2, suit: "♠" },
      { rank: 2, suit: "♥" },
      { rank: 2, suit: "♦" },
      { rank: 2, suit: "♣" },
      { rank: 3, suit: "♠" },
      { rank: 3, suit: "♥" },
      { rank: 3, suit: "♦" },
      { rank: 3, suit: "♣" },
      { rank: 4, suit: "♠" },
      { rank: 4, suit: "♥" },
      { rank: 4, suit: "♦" },
      { rank: 4, suit: "♣" },
      { rank: 5, suit: "♠" },
      { rank: 5, suit: "♥" },
      { rank: 5, suit: "♦" },
      { rank: 5, suit: "♣" },
      { rank: 6, suit: "♠" },
      { rank: 6, suit: "♥" },
      { rank: 6, suit: "♦" },
      { rank: 6, suit: "♣" },
      { rank: 7, suit: "♠" },
      { rank: 7, suit: "♥" },
      { rank: 7, suit: "♦" },
      { rank: 7, suit: "♣" },
      { rank: 8, suit: "♠" },
      { rank: 8, suit: "♥" },
      { rank: 8, suit: "♦" },
      { rank: 8, suit: "♣" },
      { rank: 9, suit: "♠" },
      { rank: 9, suit: "♥" },
      { rank: 9, suit: "♦" },
      { rank: 9, suit: "♣" },
      { rank: 10, suit: "♠" },
      { rank: 10, suit: "♥" },
      { rank: 10, suit: "♦" },
      { rank: 10, suit: "♣" },
      { rank: "J", suit: "♠" },
      { rank: "J", suit: "♥" },
      { rank: "J", suit: "♦" },
      { rank: "J", suit: "♣" },
      { rank: "Q", suit: "♠" },
      { rank: "Q", suit: "♥" },
      { rank: "Q", suit: "♦" },
      { rank: "Q", suit: "♣" },
      { rank: "K", suit: "♠" },
      { rank: "K", suit: "♥" },
      { rank: "K", suit: "♦" },
      { rank: "K", suit: "♣" },
    ];

    expect(deck.cards).toHaveLength(52);

    expectedCards.forEach((card) => {
      expect(deck.cards).toContainEqual(card);
    });
  });

  it("dealCard returns a single card from the top of the deck", () => {
    const deck = new Deck();
    const expectedCard: Card = { suit: "♠", rank: "A" };

    expect(deck.cards).toHaveLength(52);
    expect(deck.dealCard()).toEqual(expectedCard);
    expect(deck.cards).toHaveLength(51);
  });
});
