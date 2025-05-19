import { Enemy } from "./enemy";
import { Item } from "./item";
import { Player } from "./player";



const prompt = require('prompt-sync')();

export class Game {
    player: Player | null
    enemy: Enemy[]
    items: Item[]
    round: number
    maxRounds: number
    gameOver: boolean
    constructor(player?: Player) {
        this.player = player || null
        this.enemy = []
        this.items = []
        this.round = 0
        this.maxRounds = 5
        this.gameOver = false
    }
    showMenu(): void {
        console.log(' 👤 1. CREATE PLAYER')
        console.log(' 🎮 2. START GAME')
        console.log(' 🔙 3. EXIT')
        const option: string = prompt(' 🖲️  CHOOSE AN OPTION: ')

        switch (option) {
            case '1':
                console.log(' 👤 CREATE A PLAYER: ')
                const playerName: string = prompt(' 👤 ENTER NAME: ')
                this.player = new Player(playerName)
                this.showMenu()
                break;
            case '2':
                if (!this.player) {
                    console.log('YOU NEED TO CREATE A PLAYER FIRST')
                    return this.showMenu()
                    break;
                }
                this.startGame()
                break;
            case '3':
                console.log('EXITING GAME')
                break;
            default:
                console.log('INVALID OPTION')
                this.showMenu()
                break
        }

    }
    startGame() {
        console.log(`
                🎮 WELCOME TO THE GAME SURVIVE THE HORDE 🎮
                    YOU HAVE TO SURVIVE 10 ROUNDS
                          GOOD LUCK HERO 🦸🏼‍♂️🦸🏼‍♂️🦸🏼
                           `)
        this.rounds()
    }
    rounds() {
        if (this.player.health > 0 && this.round < this.maxRounds) {
            this.round++
            console.log(` 🔰🔪 ROUND: ${this.round} 
                `)

            const enemy = Enemy.getRandomEnemy()
            this.enemy.push(enemy)
            enemy.getEnemyInfo()
            this.player.getPlayerInfo()


            while (this.player.health > 0 && enemy.health > 0) {
                this.player.actionsMenu(enemy)
                this.player.getPlayerInfo()
                enemy.getEnemyInfo()
            }
            if (this.player.health > 0 && enemy.health <= 0) {
                console.log(' YOU WIN THE ROUND ⭐')
                this.rounds()

            }
        }
        this.checkGameOver()
    }
    checkGameOver() {
        if (this.player.health <= 0) {
            console.log(' GAME OVER ❌')
            this.gameOver = true
        } else if (this.round === this.maxRounds) {
            console.log(' 🏆🥇 YOU WIN ')
            this.gameOver = true
        }
    }
}
const game = new Game()
game.showMenu()
