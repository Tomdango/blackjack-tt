import Deck, { Card } from "../deck";

/**
 * This is a little long, but we want to ensure that all the cards are in the deck without worrying about
 * shuffle logic reading to an intermittennt test. Also, I personally don't feel comfortable writing a function to
 * generate some test data without also then having to write a test for that data generation function.
 */
const unshuffledDeck = [
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

describe("Deck", () => {
  it("initialising the object returns an unshuffled deck with all expected cards", () => {
    const deck = new Deck();

    expect(deck.cards).toHaveLength(52);

    unshuffledDeck.forEach((card) => {
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

  it("dealCard always returns a unique card", () => {
    const previouslyDealtCards: Array<Card> = [];

    const deck = new Deck();

    Array.from(Array(52)).forEach(() => {
      const dealtCard = deck.dealCard();
      expect(previouslyDealtCards).not.toContainEqual(dealtCard);
      previouslyDealtCards.push(dealtCard);
    });

    expect(previouslyDealtCards).toEqual(unshuffledDeck);
  });

  it("dealCard throws an error when trying to deal from an empty deck", () => {
    const deck = new Deck();

    // Deal 52 cards from the deck
    const dealtCards = Array.from(Array(52)).map(() => deck.dealCard());

    expect(dealtCards).toHaveLength(52);
    expect(() => deck.dealCard()).toThrowError(
      "Every card have been dealt from the deck"
    );
  });
});
