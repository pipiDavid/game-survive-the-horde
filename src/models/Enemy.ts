import { Player } from "./player";


import { useAttack, useDefense } from "../utils/combatUtils";

type Enemies = 'Venom' | 'Lizard' | 'BlackLion' | 'UglyClown' | 'GiantSpider' | 'BigKong' | 'ElectricMan' | 'FireMan' | 'IceMan' | 'WaterMan' | 'EarthMan'
export class Enemy {
    name: Enemies;
    health: number;
    attack: number;
    defense: number;

    constructor(name: Enemies, health: number, attack: number, defense: number) {
        this.name = name;
        this.health = health
        this.attack = attack
        this.defense = defense
    }
    static getRandomEnemy() {
        const names: Enemies[] = [
            'Venom', 'Lizard', 'BlackLion', 'UglyClown', 'GiantSpider',
            'BigKong', 'ElectricMan', 'FireMan', 'IceMan', 'WaterMan', 'EarthMan']
        const nameEnemy = names[Math.floor(Math.random() * names.length)]
        const health = Math.floor(Math.random() * 100) + 1
        const attack = Math.floor(Math.random() * 10) + 1
        const defense = Math.floor(Math.random() * 10) + 1
        return new Enemy(nameEnemy, health, attack, defense)
    }
    getEnemyInfo(): void {
        console.log(`
            
            👺 ENEMY: ${this.name} | 💥 HEALTH: ${this.health}`)
    }

    randomAction(player: Player) {
        const action = Math.random()
        if (action < 0.3) {
            useDefense(player, this)
        } else if (action < 0.6) {
            useAttack(this, player)
        } else {
            console.log(`${this.name} is not doing anything 🤡`)
        }
    }

}