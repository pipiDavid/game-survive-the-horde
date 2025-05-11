
type ItemName = 'HealthPotion' | 'Shield' | 'AttackBoost' | 'EnergyDrink' | 'MagicScroll';
export class Item {
    name: ItemName;
    duration: number;
    effect: string;

    constructor(name: ItemName, effect: string, duration: number = 0) {
        this.name = name;
        this.duration = duration
        this.effect = effect;
    }
    useItem() {
        console.log(`${this.name} used`)
    }
    getDescription() {
        console.log(`Item: ${this.name}, Effect: ${this.effect}, Duration: ${this.duration}`)
    }
}