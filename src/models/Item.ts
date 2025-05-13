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

    useItem(player: Player) {
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
                player.health += 30; // Corregido para modificar la salud del jugador
                console.log(`${player.name} used HealthPotion and healed 30 health points ❤️❤️❤️`);
                break;
            case '2':
                player.defense += 10; // Corregido para modificar la defensa del jugador
                console.log(`${player.name} used Shield and increased defense by 10 points 🛡️🛡️🛡️`);
                break;
            case '3':
                player.attack += 10; // Corregido para modificar el ataque del jugador
                console.log(`${player.name} used AttackBoost and increased attack by 10 points ⚔️⚔️⚔️`);
                break;
            case '4':
                player.health += 10; // Corregido para modificar la salud y ataque del jugador
                player.attack += 5;
                console.log(`${player.name} used EnergyDrink and increased health by 10 points and attack by 5 points 💪💪💪`);
                break;
            default:
                console.log('Invalid Item');
                break;
        }
    }

    getDescription() {
        console.log(`Item: ${this.name}, Duration: ${this.duration} rounds`);
    }
}
