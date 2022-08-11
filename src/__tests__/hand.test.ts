import Hand from "../hand";

describe("Hand", () => {
  it("addCard adds a card to the player hand", () => {
    const hand = new Hand();
    expect(hand.cards).toEqual([]);

    expect(hand.addCard({ rank: "A", suit: "♦" }));

    expect(hand.cards).toEqual([{ rank: "A", suit: "♦" }]);
  });

  it("value returns value of hand depending on the cards", () => {
    const hand = new Hand();

    hand.addCard({ rank: "A", suit: "♥" });
    expect(hand.value).toBe(11);

    hand.addCard({ rank: 2, suit: "♣" });
    expect(hand.value).toEqual(13);
  });
});
