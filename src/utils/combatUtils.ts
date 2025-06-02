

export function useAttack(attacker: any, defender: any): void {
    const damage = attacker.attack - defender.defense;
    if (damage > 0) {
        defender.health -= damage;
        console.log(`💥 ${attacker.name} attacked ${defender.name} and dealt ${damage} damage!`);
    } else {
        console.log(`🛡️ ${attacker.name} attacked ${defender.name} but it was not effective...`);
    }
}

export function useDefense(attacker: any, defender: any): void {
    const damage = attacker.attack - defender.defense;
    if (damage > 0) {
        defender.health -= damage;
        console.log(`🩸 ${defender.name} defended and took ${damage} damage`);
    } else {
        console.log(`🛡️ ${defender.name} defended successfully!`);
    }
}
