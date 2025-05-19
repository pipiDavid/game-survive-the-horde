import { Player } from "./player";

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
            this.useDefenseEnemy(player)
        } else if (action < 0.6) {
            this.attackPlayer(player)
        } else {
            console.log(`${this.name} is not doing anything 🤡`)
        }
    }

    attackPlayer(player: Player) {
        const damage = this.attack
        player.health -= this.attack
        console.log(`${this.name} attacked ${player.name} and dealt ${damage} damage`)



        if (player.health <= 0) {
            console.log(` 💀 ${player.name} has died! 💀`);
        }
    }


    useDefenseEnemy(player: Player) {
        let damage = player.attack - this.defense

        if (damage < 0) {
            damage = 0
        }
        this.health -= damage
        console.log(`${this.name} used defense and took ${damage} damage 🤕`)

        if (damage > 0) {
            console.log(`${this.name} took ${damage} damage 🤕`)
        } else {
            console.log(`${this.name} blocked the attack 🛡️`)
        }


        if (this.health <= 0) {
            console.log(` 💀${this.name} is dead! 💀`)
        }

    }
}
