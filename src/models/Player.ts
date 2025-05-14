import { Item } from "./item"
import { Enemy } from "./enemy";


type ItemName = 'HealthPotion' | 'Shield' | 'AttackBoost' | 'EnergyDrink' | 'MagicScroll';

const prompt = require('prompt-sync')();



export class Player {
    name: string;
    health: number;
    attack: number;
    defense: number;
    items: Item[]

    constructor(name: string, health: number = 100, attack: number = 10, defense: number = 5, items: Item[] = []) {
        this.name = name
        this.health = health
        this.defense = defense
        this.items = items
        this.attack = attack
    }
    getPlayerInfo() {
        const item: ItemName[] = ['HealthPotion', 'Shield', 'AttackBoost', 'EnergyDrink', 'MagicScroll']
        console.log(`Player: ${this.name}, Health: ${this.health}, Attack: ${this.attack}, defense: ${this.defense}, Items: ${item.join(', ')} `)

    }
    actionsMenu(enemy: Enemy) {
        console.log(`
            What do you want to do in this round?
            1. Attack?
            2. Use defense?
            3. Use item?   
            `)
        const option: string = prompt('Choose an option:')
        switch (option) {
            case '1':
                this.UseAttack(enemy)
                break;
            case '2':
                this.useDefense(enemy)
                break;
            case '3':
                this.useItem()
                break;
            default:
                console.log('Invalid option')
                break;
        }
        enemy.randomAction(this)
    }
    UseAttack(enemy: Enemy) {
        const damage = this.attack - enemy.defense
        if(damage > 0) {
            enemy.health -= damage
            console.log(`${this.name} attacked ${enemy.name} and dealt ${damage} damage`)
        } else {
            console.log(`${this.name} attacked ${enemy.name} but it was not effective`)
        }
    }
    useDefense(enemy: Enemy) {
        const damage = enemy.attack - this.defense
        if (damage > 0) {
            this.health -= damage
            console.log(`${this.name} used defense and took ${damage} damage`)
        }
    }
    useItem() {
            console.log(`
                Options:
                1. HealthPotion
                2. Shield
                3. AttackBoost
                4. EnergyDrink
            `);
    
            const options: string = prompt('Choose an item:');
            switch (options) {
                case '1':
                    this.health += 30; 
                    console.log(`
                          ${this.name} used HealthPotion and healed 30 health points ❤️❤️❤️
                           -----------------------------------------------------------------
                            Health: ${this.health} ❤️
                          `)

                    break;
                case '2':
                    this.defense += 10; 
                    console.log(`${this.name} used Shield and increased defense by 10 points 🛡️🛡️🛡️`);
                    break;
                case '3':
                    this.attack += 10; 
                    console.log(`${this.name} used AttackBoost and increased attack by 10 points ⚔️⚔️⚔️`);
                    break;
                case '4':
                    this.health += 10; 
                    this.attack += 5;
                    console.log(`${this.name} used EnergyDrink and increased health by 10 points and attack by 5 points 💪💪💪`);
                    break;
                default:
                    console.log('Invalid Item');
                    break;
            }
            
        }
    
    }
