import { Item } from "./item"


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
        console.log(`Player: ${this.name}, Health: ${this.attack}, Attack: ${this.attack}, defense: ${this.defense}, Items: ${item.join(', ')} `)

    }
    actionsMenu() {
        console.log(`}
            What do you want to do in this round?
            1. Attack?
            2. Use defense?
            3. Use item?   
            `)
        const option: string = prompt('Choose an option:')
        switch (option) {
            case '1':
                this.UseAttack()
                break;
            case '2':
                this.useDefense()
                break;
            case '3':
                this.useItem()
                
                break;
            default:
                console.log('Invalid option')
                this.actionsMenu()
                break;
        }
    }
    UseAttack() {
        console.log(`${this.name} attacked`)
    }
    useDefense() {
        console.log(`${this.name} used ${this.defense} defense`)
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
                    console.log(`${this.name} used HealthPotion and healed 30 health points ❤️❤️❤️`);
                    console.log('-------------------');
                    console.log(' Health: ', this.health,'❤️')
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
