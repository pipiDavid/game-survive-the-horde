
type Enemies = 'Venom' | 'Lizard' | 'blackLion' | 'UglyClown' | 'GiantSpider' | 'BigKong' | 'ElectricMan' | 'FireMan' | 'IceMan' | 'WaterMan' | 'EarthMan'
export class Enemy {
    name: Enemies;
    health: number;
    attack: number;
    powerPerRound: number;
    defense: number;

    constructor(name: Enemies, health: number, attack: number, defense: number) {
        this.name = name;
        this.health = health
        this.attack = attack
        this.defense = defense
    }
    static getRandomEnemy() {
        const names: Enemies[] = [
            'Venom', 'Lizard', 'blackLion', 'UglyClown', 'GiantSpider',
            'BigKong', 'ElectricMan', 'FireMan', 'IceMan', 'WaterMan', 'EarthMan']
            const nameEnemy = names[Math.floor(Math.random() * names.length)]
            const health = Math.floor(Math.random() * 100) + 1
            const attack = Math.floor(Math.random() * 10) + 1
            const defense = Math.floor(Math.random() * 10) + 1
            console.log(`Enemy: ${nameEnemy}, Health: ${health}, Attack: ${attack}, Defense: ${defense}`)
            return new Enemy(nameEnemy, health, attack,defense)
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
