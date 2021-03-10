"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printDeck = exports.creatDeck = void 0;
const enums_1 = require("./enums");
function creatDeck() {
    let deck = [];
    let mark = Object.values(enums_1.Mark);
    let color = Object.values(enums_1.Color);
    for (const m of mark) {
        for (const c of color) {
            deck.push({
                color: c,
                mark: m
            });
        }
    }
    return deck;
}
exports.creatDeck = creatDeck;
function printDeck(decK) {
    let result = "\n";
    decK.forEach((item, index) => {
        let str;
        str = item.mark + item.color + '\t';
        if ((index + 1) % 6 == 0) {
            str += '\n';
        }
        result += str;
    });
    console.log(result);
}
exports.printDeck = printDeck;
