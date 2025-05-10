import { Item } from "./Item"

export class Player {
    name: string;
    health: number;
    attack: number;
    defense: number;
    items: Item[]

    constructor(name: string) {
        this.name = name
        this.health = 100
        this.defense = 0
        this.items = [];
        this.attack = 10
    }
    getPlayerInfo() {
        
    }
    UseAttack() {
        console.log(`${this.name} attacked`)
    }
    useDefense() {
        console.log(`${this.name} used ${this.defense} defense`)
    }
    useItem(item: Item) {
        console.log(`${this.name} used ${item.name}`)
    }
}