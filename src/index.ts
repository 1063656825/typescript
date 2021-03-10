
type Deck = NormalCard[]
type Color = "♥" | "♠" | "♣" | "♦"
type NormalCard = {
    color: Color
    mark:number
}

function createDeck():Deck{
    let deck:Deck = [];
    for (let i = 1; i <= 13; i++) {
        deck.push({
            color:"♠",
            mark:i
        })
        deck.push({
            color: "♣",
            mark: i
        })
        deck.push({
            color: "♥",
            mark: i
        })
        deck.push({
            color: "♦",
            mark: i
        })
        
    }
    return deck
}

function printDeck(deck:Deck){
    for (let item of deck) {
        let str = item.color;
        if(item.mark == 1){
            str += 'A'
        }else if(item.mark <=10){
            str += item.mark
        }else if(item.mark == 11){
            str+="J"
        } else if (item.mark == 12) {
            str += "Q"
        } else if (item.mark == 13) {
            str += "K"
        }
        console.log("这是一张"+str);
    }
}
let result = createDeck();
printDeck(result)
function findCardsByColor(color:Color){
    
}