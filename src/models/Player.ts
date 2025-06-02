import { Item } from "./item";
import { Enemy } from "./enemy";

import { useAttack, useDefense } from "../utils/combatUtils";
const prompt = require('prompt-sync')();

export class Player {
    name: string;
    health: number;
    attack: number;
    defense: number;
    items: Item[];

    constructor(name: string, health: number = 100, attack: number = 10, defense: number = 5, items: Item[] = []) {
        this.name = name;
        this.health = health;
        this.defense = defense;
        this.items = items;
        this.attack = attack;
    }

    getPlayerInfo() {
        console.log(`
            👤 PLAYER: ${this.name} | 💓 HEALTH: ${this.health}
        `);
    }

    actionsMenu(enemy: Enemy) {
        console.log(' WHAT DO YOU WANT TO DO IN THIS ROUND 🤔 ? ');
        console.log(' 🔪 1. ATTACK? ');
        console.log(' 🔰 2. USE DEFENSE? ');
        console.log(' ⚡ 3. USE ITEMS? ');

        const option: string = prompt(' 🖲️  CHOOSE AN OPTION: ');
        switch (option) {
            case '1':
                useAttack(this, enemy);
                break;
            case '2':
                useDefense(enemy, this);
                break;
            case '3':
                this.useItem()
                break;
            default:
                console.log(' ❌ INVALID OPTION ❌');
                break;
        }
        enemy.randomAction(this);
    }
    useItem() {
            console.log(`
                   ⬇️ OPTIONS :
                    1. HealthPotion
                    2. Shield
                    3. AttackBoost
                    4. EnergyDrink
                `);
    
            const options: string = prompt('💊 CHOOSE AN ITEM:');
            switch (options) {
                case '1':
                    this.health += 30;
                    if (this.health > 100) this.health = 100
                    console.log(`
                              ${this.name} used HealthPotion and healed 30 health points ❤️❤️❤️
                               -----------------------------------------------------------------
                                HEALTH: ${this.health} ❤️
                              `)
    
                    break;
                case '2':
                    this.defense += 10;
                    console.log(`
                            ${this.name} used Shield and increased defense by 10 points 🛡️🛡️🛡️
                            ----------------------------------------------------------------------
                            DEFENSE: ${this.defense} 🛡️
                            `);
                    break;
                case '3':
                    this.attack += 10;
                    console.log(`
                            ${this.name} used AttackBoost and increased attack by 10 points ⚔️⚔️⚔️
                            ------------------------------------------------------------------------
                            ATTACK: ${this.attack} ⚔️
                            `);
                    break;
                case '4':
    
                    this.health += 10;
                    if (this.health > 100) this.health = 100
                    this.attack += 5;
                    console.log(`
                            ${this.name} used EnergyDrink and increased health by 10 points and attack by 5 points 💪💪💪
                            -------------------------------------------------------------------------------------------------
                            HEALTH: ${this.health} ❤️
                            ATTACK: ${this.attack} ⚔️
                            `);
                    break;
                default:
                    console.log(' ❌ INVALID ITEM ❌');
                    break;
            }
    
        }
    
    } 
    
    
    


    
