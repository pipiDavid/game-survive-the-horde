import { Player } from './player';

type ItemName = 'HealthPotion' | 'Shield' | 'AttackBoost' | 'EnergyDrink';
const prompt = require('prompt-sync')();

export class Item {
    name: ItemName;
    duration: number;

    constructor(name: ItemName) {
        this.name = name;
        this.duration = Math.floor(Math.random() * 10) + 1;
    }

    getDescription() {
        console.log(`Item: ${this.name}, Duration: ${this.duration} rounds`);
    }
}