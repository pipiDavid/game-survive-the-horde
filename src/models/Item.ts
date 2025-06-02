import { Player } from './player';

type ItemName = 'HealthPotion' | 'Shield' | 'AttackBoost' | 'EnergyDrink';
const prompt = require('prompt-sync')();

export class Item {
    name: ItemName;
    duration: number;

    constructor(name: ItemName) {
        this.name = name;
    }

    getDescription() {
        console.log(`Item: ${this.name}`);
    }
}