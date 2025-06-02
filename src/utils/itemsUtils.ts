const prompt = require('prompt-sync')();

import { Player } from '../models/player'


export function useItem(player: Player) {
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
                    player.health += 30;
                    if (player.health > 100) player.health = 100
                    console.log(`
                              ${player.name} used HealthPotion and healed 30 health points ❤️❤️❤️
                               -----------------------------------------------------------------
                                HEALTH: ${player.health} ❤️
                              `)
    
                    break;
                case '2':
                    player.defense += 10;
                    console.log(`
                            ${player.name} used Shield and increased defense by 10 points 🛡️🛡️🛡️
                            ----------------------------------------------------------------------
                            DEFENSE: ${player.defense} 🛡️
                            `);
                    break;
                case '3':
                    player.attack += 10;
                    console.log(`
                            ${player.name} used AttackBoost and increased attack by 10 points ⚔️⚔️⚔️
                            ------------------------------------------------------------------------
                            ATTACK: ${player.attack} ⚔️
                            `);
                    break;
                case '4':
    
                    player.health += 10;
                    if (player.health > 100) player.health = 100
                    player.attack += 5;
                    console.log(`
                            ${player.name} used EnergyDrink and increased health by 10 points and attack by 5 points 💪💪💪
                            -------------------------------------------------------------------------------------------------
                            HEALTH: ${player.health} ❤️
                            ATTACK: ${player.attack} ⚔️
                            `);
                    break;
                default:
                    console.log(' ❌ INVALID ITEM ❌');
                    break;
            }
    
        }
    
    
    


    


