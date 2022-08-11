import Deck from "./deck";
import Hand from "./hand";

type GameResult = {
  winner: string;
  reason: string;
};

export const exampleOnePlayerGame = (deck: Deck): GameResult => {
  const playerHand = new Hand("Macs");
  const dealerHand = new Hand("Dealer");

  playerHand.addCard(deck.dealCard());
  dealerHand.addCard(deck.dealCard());
  playerHand.addCard(deck.dealCard());
  dealerHand.addCard(deck.dealCard());

  if (playerHand.isBlackjack && dealerHand.isBlackjack) {
    return { winner: "Tie", reason: "Both players drew blackjack" };
  }

  if (dealerHand.isBlackjack) {
    return { winner: dealerHand.name, reason: "Dealer drew blackjack" };
  }

  if (playerHand.isBlackjack) {
    return { winner: playerHand.name, reason: "Player drew blackjack" };
  }

  while (playerHand.value < 17) {
    playerHand.addCard(deck.dealCard());
  }

  if (playerHand.isBusted) {
    return { winner: dealerHand.name, reason: "Player bust" };
  }

  while (playerHand.value > dealerHand.value) {
    dealerHand.addCard(deck.dealCard());
  }

  if (dealerHand.isBusted) {
    return { winner: playerHand.name, reason: "Dealer bust" };
  }

  return playerHand.value > dealerHand.value
    ? { winner: playerHand.name, reason: "Player wins on score" }
    : { winner: dealerHand.name, reason: "Dealer wins on score" };
};

if (require.main === module) {
  const deck = new Deck();
  deck.shuffle();

  exampleOnePlayerGame(deck);
}
