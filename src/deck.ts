import { Mark, Color } from "./enums";
import { Card, Joker } from "./types";

interface publishResult {
    player1: Deck,
    player2: Deck,
    player3: Deck,
    left: Deck
}

export class Deck {
    cards: Card[] = [];


    constructor(cards?: Card[]) {
        if (cards) {
            this.cards = cards;
        } else {
            this.creatDeck()
        }
        this.shuffle()
    }

    private creatDeck() {
        let mark = Object.values(Mark)
        let color = Object.values(Color)
        for (const m of mark) {
            for (const c of color) {
                this.cards.push({
                    color: c,
                    mark: m,
                    getString() {
                        return this.color + this.mark;
                    }
                } as Card)
            }
        }
        this.cards.push({
            type: 'big',
            getString() {
                return "JO"
            }
        } as Joker)
        this.cards.push({
            type: "small",
            getString() {
                return "jo"
            }
        } as Joker)
    }

    printDeck() {
        let result: string = "\n";
        this.cards.forEach((item, index) => {
            let str: string;
            str = item.getString() + '\t';
            if ((index + 1) % 6 == 0) {
                str += '\n'
            }
            result += str;
        })
        console.log(result);

    }

    private shuffle() {
        this.cards.forEach((item, index) => {
            let templateIndex = this.random(0, this.cards.length);
            let template = this.cards[templateIndex];
            this.cards[templateIndex] = item;
            this.cards[index] = template
        })
    }

    publish(): publishResult {
        let player1: Deck, player2: Deck, player3: Deck, left: Deck;
        player1 = this.takeDeck(17);
        player2 = this.takeDeck(17);
        player3 = this.takeDeck(17);
        left = new Deck(this.cards);
        return {
            player1,
            player2,
            player3,
            left
        }

    }
    private takeDeck(n: number): Deck {
        let cards: Card[] = [];
        for (let i = 0; i < n; i++) {
            cards.push(this.cards.shift() as Card)

        }
        return new Deck(cards)
    }

    /**
     *这是一个随机数方法
     *该方法取不到最大值
     * @private
     * @param {number} min
     * @param {number} max
     * @return {*}  {number}
     * @memberof Deck
     */
    private random(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min) + min)
    }
}