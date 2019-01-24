/**
 * Shuffle an array in place
 * @param a Array to shuffle
 */
function shuffleArray(a: any[]) {
  // Iterate over the array
  for (let i = a.length; i; i--) {
    // Get next index
    let j = Math.floor(Math.random() * i);
    // Swap positions
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
}

export enum Suit{
  Clubs,
  Spades,
  Hearts,
  Diamonds
}

export enum CardNumber{
  Ace, Two, Three, Four, Five, Six,
  Seven, Eight, Nine, Ten, Jack, Queen, King
}

type Card = [Suit, CardNumber];
export class Dealer {

  deck: Array<Card> = [];
  
  constructor(){
    this.createDeck();
    shuffleArray(this.deck);
  }

  readCard(card: number[]): string{
    return `${CardNumber[card[1]]} of ${Suit[card[0]]}`
  }

  getLength():number{
    return this.deck.length;
  }

  dealHand(numCards: number){
    if(numCards > this.deck.length)
      throw Error(`There aren't ${numCards} in the deck`);
    if(numCards < 0)
      throw Error(`You want to get ${numCards} cards, number of cards cannot be negative`);
    return this.deck.splice(0, numCards);
  }

  createDeck(){
    const suits:number[] = [0, 1, 2, 3];
    const cards:number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    for(let suit of suits){
      for(let card of cards)
        this.deck.push([suit, card]);
    }
  }
}

let dealer = new Dealer();
let cards = dealer.dealHand(52);
let numberCounts = new Array(13).fill(0, 0);
let suitCounts = new Array(4).fill(0, 0);
cards.forEach(([suit, number]) => {
  numberCounts[number]++;
  suitCounts[suit]++;
});

numberCounts.forEach((count, num) => {
  console.log(`${count} cards in the deck for number ${CardNumber[num]}`);
});
suitCounts.forEach((count, suit) => {
  console.log(`${suitCounts[suit]} cards in the deck for suit ${Suit[suit]}`)
});
