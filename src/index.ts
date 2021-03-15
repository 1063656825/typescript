// import { creatDeck, printDeck } from "./funcs"

import { Deck } from "./deck";

// let result = creatDeck()
// printDeck(result)

let deck = new Deck;
console.log("====洗牌之后====");

deck.printDeck();
const result = deck.publish()
console.log("====发牌之后====");
// 第一个人的扑克牌
console.log("====第一个人的牌====");
result.player1.printDeck()

console.log("====第二个人的牌====");
result.player2.printDeck()

console.log("====第三个人的牌====");
result.player3.printDeck()

console.log("====剩下的牌====");
result.left.printDeck()

