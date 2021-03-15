// import { Mark, Color } from "./enums";
// import { Card, Deck } from "./types";

// export function creatDeck(): Deck {
//     let deck: Deck = [];
//     let mark = Object.values(Mark)
//     let color = Object.values(Color)
//     for (const m of mark) {
//         for (const c of color) {
//             deck.push({
//                 color: c,
//                 mark: m,
//                 getString(){
//                     return this.color + this.mark;
//                 }
//             })
//         }
//     }
//     deck.push({
//         type:'big',
//         getString(){
//             return "JO"
//         }
//     })
//     deck.push({
//         type:"small",
//         getString(){
//             return "jo"
//         }
//     })

//     return deck
// }

// export function printDeck(decK: Deck) {
//     let result: string = "\n";
//     decK.forEach((item, index) => {
//         let str: string;
//         str = item.getString() + '\t';
//         if ((index + 1) % 6 == 0) {
//             str += '\n'
//         }
//         result += str;
//     })
//     console.log(result);

// }