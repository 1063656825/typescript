// type Deck = NormalCard[]
// type Color = "♥" | "♠" | "♣" | "♦"
// type NormalCard = {
//     color: Color
//     mark:number
// }
// function createDeck():Deck{
//     let deck:Deck = [];
//     for (let i = 1; i <= 13; i++) {
//         deck.push({
//             color:"♠",
//             mark:i
//         })
//         deck.push({
//             color: "♣",
//             mark: i
//         })
//         deck.push({
//             color: "♥",
//             mark: i
//         })
//         deck.push({
//             color: "♦",
//             mark: i
//         })
//     }
//     return deck
// }
// function printDeck(deck:Deck){
//     for (let item of deck) {
//         let str = item.color;
//         if(item.mark == 1){
//             str += 'A'
//         }else if(item.mark <=10){
//             str += item.mark
//         }else if(item.mark == 11){
//             str+="J"
//         } else if (item.mark == 12) {
//             str += "Q"
//         } else if (item.mark == 13) {
//             str += "K"
//         }
//         // console.log("这是一张"+str);
//     }
// }
// let result = createDeck();
// printDeck(result)
// function findCardsByColor(color:Color){
// }
// 枚举的方式
// type Deck = NormalCard[]
// type NormalCard = {
//     color: Color
//     mark: Mark
// }
// enum Color {
//     heart = "♥",
//     spade = "♠",
//     club = "♣",
//     diamond = "♦"
// }
// enum Mark {
//     A = "A",
//     two = "2",
//     three = "3",
//     four = "4",
//     five = "5",
//     six = "6",
//     seven = "7",
//     eight = "8",
//     nine = "9",
//     ten = "10",
//     jack = "J",
//     queen = "Q",
//     King = "K"
// }
// function creatDeck(): Deck {
//     let deck: Deck = [];
//     let mark = Object.values(Mark)
//     let color = Object.values(Color)
//     for (const m of mark) {
//         for (const c of color) {
//             deck.push({
//                 color: c,
//                 mark: m
//             })
//         }
//     }
//     return deck
// }
// function printDeck(decK: Deck) {
//     let result: string = "\n";
//     decK.forEach((item, index) => {
//         let str: string;
//         str = item.mark + item.color + '\t';
//         if ((index + 1) % 6 == 0) {
//             str += '\n'
//         }
//         result += str;
//     })
//     console.log(result);
// }
// let result = creatDeck()
// printDeck(result)
