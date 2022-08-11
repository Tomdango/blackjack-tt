import type { Card } from "../deck";
import { calculateCardValue } from "../utils";

describe("calculateCardValue", () => {
  it.each<[Card, number]>([
    [{ rank: 2, suit: "♠" }, 2],
    [{ rank: 3, suit: "♠" }, 3],
    [{ rank: 4, suit: "♠" }, 4],
    [{ rank: 5, suit: "♠" }, 5],
    [{ rank: 6, suit: "♠" }, 6],
    [{ rank: 7, suit: "♠" }, 7],
    [{ rank: 8, suit: "♠" }, 8],
    [{ rank: 9, suit: "♠" }, 9],
    [{ rank: 10, suit: "♠" }, 10],
    [{ rank: "J", suit: "♠" }, 10],
    [{ rank: "Q", suit: "♠" }, 10],
    [{ rank: "K", suit: "♠" }, 10],
    [{ rank: "A", suit: "♠" }, 11],
  ])("returns value $1 for card with rank $0.rank", (card, expectedValue) => {
    expect(calculateCardValue(card)).toBe(expectedValue);
  });

  it("throws an error if given an unexpected card", () => {
    const dodgyCard = { rank: "B", suit: "♠" } as unknown as Card;
    expect(() => calculateCardValue(dodgyCard)).toThrowError(
      "Unable to calculate value for card ♠B"
    );
  });
});
