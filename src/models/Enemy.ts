
type Enemies = 'Venom' | 'Lizard' | 'blackLion' | 'UglyClown' | 'GiantSpider' | 'BigKong' | 'ElectricMan' | 'FireMan' | 'IceMan' | 'WaterMan' | 'EarthMan'
export class Enemy {
    name: Enemies;
    health: number;
    attack: number;
    powerPerRound: number;
    defense: number;

    constructor(name: Enemies, health: number, attack: number, powerPerRound: number, defense: number) {
        this.name = name;
        this.health = health
        this.attack = attack
        this.powerPerRound = powerPerRound
        this.defense = defense
    }
    static getRandomEnemy() {
        const names: Enemies[] = [
            'Venom', 'Lizard', 'blackLion', 'UglyClown', 'GiantSpider',
            'BigKong', 'ElectricMan', 'FireMan', 'IceMan', 'WaterMan', 'EarthMan']
            const randomName = names[Math.floor(Math.random() * names.length)]
            const randomHealth = Math.floor(Math.random() * 100) + 1
            const randomAttack = Math.floor(Math.random() * 10) + 1
            const randomPowerPerRound = Math.floor(Math.random() * 10) + 1
            const randomDefense = Math.floor(Math.random() * 10) + 1
            console.log(`Enemy: ${randomName}, Health: ${randomHealth}, Attack: ${randomAttack}, PowerPerRound: ${randomPowerPerRound}, Defense: ${randomDefense}`)
            return new Enemy(randomName, randomHealth, randomAttack, randomPowerPerRound, randomDefense)
    }
    attackPlayer() {
        console.log(`${this.name} attacked`)
    }
    usePower() {
        console.log(`${this.name} using Power`)

    }
    useDefense() {
        console.log(`${this.name} used ${this.defense} defense`)
    }
}
