import Hand from "../hand";

describe("Hand", () => {
  it("constructor takes the player name and sets into the class", () => {
    const hand = new Hand("Test Player");
    expect(hand.name).toBe("Test Player");
  });

  it("addCard adds a card to the player hand", () => {
    const hand = new Hand("Test Player");
    expect(hand.cards).toEqual([]);

    expect(hand.addCard({ rank: "A", suit: "♦" }));

    expect(hand.cards).toEqual([{ rank: "A", suit: "♦" }]);
  });

  it("value returns value of hand depending on the cards", () => {
    const hand = new Hand("Test Player");

    hand.addCard({ rank: "A", suit: "♥" });
    expect(hand.value).toBe(11);

    hand.addCard({ rank: 2, suit: "♣" });
    expect(hand.value).toEqual(13);
  });

  it("isBlackjack return true if the hand value is 21 with 2 cards", () => {
    const hand = new Hand("Test Player");

    hand.addCard({ rank: "A", suit: "♦" });
    hand.addCard({ rank: "J", suit: "♣" });

    expect(hand.value).toBe(21);
    expect(hand.isBlackjack).toBe(true);
  });

  it("isBlackjack returns false is the hand value is 21 but with more than 2 cards", () => {
    const hand = new Hand("Test Player");

    hand.addCard({ rank: "K", suit: "♦" });
    hand.addCard({ rank: 9, suit: "♣" });
    hand.addCard({ rank: 2, suit: "♥" });

    expect(hand.value).toBe(21);
    expect(hand.isBlackjack).toBe(false);
  });

  it("isBlackjack returns false is there is less than 2 cards in the hand", () => {
    const hand = new Hand("Test Player");

    hand.addCard({ rank: "K", suit: "♦" });

    expect(hand.value).toBe(10);
    expect(hand.isBlackjack).toBe(false);
  });

  it("isBlackjack returns false is there is more than 2 cards in the hand", () => {
    const hand = new Hand("Test Player");

    hand.addCard({ rank: 4, suit: "♦" });
    hand.addCard({ rank: 9, suit: "♣" });
    hand.addCard({ rank: 2, suit: "♥" });

    expect(hand.value).toBe(15);
    expect(hand.isBlackjack).toBe(false);
  });

  it("isBusted returns true if the hand value is above 21", () => {
    const hand = new Hand("Test Player");

    hand.addCard({ rank: 10, suit: "♦" });
    hand.addCard({ rank: "J", suit: "♣" });
    hand.addCard({ rank: 2, suit: "♥" });

    expect(hand.value).toBe(22);
    expect(hand.isBusted).toBe(true);
  });

  it("isBusted returns false if the hand value is exactly 21", () => {
    const hand = new Hand("Test Player");

    hand.addCard({ rank: 10, suit: "♦" });
    hand.addCard({ rank: 9, suit: "♣" });
    hand.addCard({ rank: 2, suit: "♥" });

    expect(hand.value).toBe(21);
    expect(hand.isBusted).toBe(false);
  });

  it("isBusted returns false if the hand value is under 21", () => {
    const hand = new Hand("Test Player");

    hand.addCard({ rank: 10, suit: "♦" });
    hand.addCard({ rank: 7, suit: "♣" });
    hand.addCard({ rank: 3, suit: "♥" });

    expect(hand.value).toBe(20);
    expect(hand.isBusted).toBe(false);
  });
});
