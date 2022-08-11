import Deck from "../deck";
import { exampleOnePlayerGame } from "../game";

describe("exampleOnePlayerGame", () => {
  it("both players are dealt blackjack on the first hand", () => {
    const deck = new Deck();

    deck.cards = [
      { rank: "A", suit: "♣" },
      { rank: "A", suit: "♥" },
      { rank: "J", suit: "♥" },
      { rank: "K", suit: "♥" },
    ];

    const expectedResult = {
      winner: "Tie",
      reason: "Both players drew blackjack",
    };

    expect(exampleOnePlayerGame(deck)).toEqual(expectedResult);
  });

  it("the player is dealt blackjack on the first hand", () => {
    const deck = new Deck();

    deck.cards = [
      { rank: "A", suit: "♣" },
      { rank: 2, suit: "♥" },
      { rank: "J", suit: "♥" },
      { rank: 10, suit: "♥" },
    ];

    const expectedResult = {
      winner: "Macs",
      reason: "Player drew blackjack",
    };

    expect(exampleOnePlayerGame(deck)).toEqual(expectedResult);
  });

  it("the dealer is dealt blackjack on the first hand", () => {
    const deck = new Deck();

    deck.cards = [
      { rank: 2, suit: "♥" },
      { rank: "A", suit: "♣" },
      { rank: 10, suit: "♥" },
      { rank: "J", suit: "♥" },
    ];

    const expectedResult = {
      winner: "Dealer",
      reason: "Dealer drew blackjack",
    };

    expect(exampleOnePlayerGame(deck)).toEqual(expectedResult);
  });

  it("the player busts after the first draw", () => {
    const deck = new Deck();

    deck.cards = [
      { rank: 2, suit: "♥" },
      { rank: 3, suit: "♣" },
      { rank: 10, suit: "♥" },
      { rank: 7, suit: "♥" },
      { rank: 10, suit: "♥" },
    ];

    const expectedResult = {
      winner: "Dealer",
      reason: "Player bust",
    };

    expect(exampleOnePlayerGame(deck)).toEqual(expectedResult);
  });

  it("the dealer busts after the player", () => {
    const deck = new Deck();

    deck.cards = [
      { rank: 2, suit: "♥" },
      { rank: 3, suit: "♣" },
      { rank: 10, suit: "♥" },
      { rank: 7, suit: "♥" },
      { rank: 8, suit: "♥" },
      { rank: 3, suit: "♦" },
      { rank: 10, suit: "♣" },
    ];

    const expectedResult = {
      winner: "Macs",
      reason: "Dealer bust",
    };

    expect(exampleOnePlayerGame(deck)).toEqual(expectedResult);
  });

  it("the dealer wins on score", () => {
    const deck = new Deck();

    deck.cards = [
      { rank: 2, suit: "♥" },
      { rank: 3, suit: "♣" },
      { rank: 10, suit: "♥" },
      { rank: 7, suit: "♥" },
      { rank: 8, suit: "♥" },
      { rank: 10, suit: "♣" },
    ];

    const expectedResult = {
      winner: "Dealer",
      reason: "Dealer wins on score",
    };

    expect(exampleOnePlayerGame(deck)).toEqual(expectedResult);
  });

  /**
   * This condition is impossible to test. The rule conditions are such that the dealer will always
   * attempt to draw another card until the dealers score is either 1. higher than the players or 2. the dealer busts.
   * This means that there is not a scenario given these requirements where the player can win on score alone.
   */
  it.todo("the player wins on score");
});
