import { Mark, Color } from "./enums";
import { Deck } from "./types";

export function creatDeck(): Deck {
    let deck: Deck = [];
    let mark = Object.values(Mark)
    let color = Object.values(Color)
    for (const m of mark) {
        for (const c of color) {
            deck.push({
                color: c,
                mark: m
            })
        }
    }
    return deck
}

export function printDeck(decK: Deck) {
    let result: string = "\n";
    decK.forEach((item, index) => {
        let str: string;
        str = item.mark + item.color + '\t';
        if ((index + 1) % 6 == 0) {
            str += '\n'
        }
        result += str;
    })
    console.log(result);

}