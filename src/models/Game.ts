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
        this.maxRounds = 10
        this.gameOver = false
    }
    showMenu(): void {
        console.log('1. create Player')
        console.log('2. create Start Game')
        console.log('3. exit')
        const option: string = prompt('choose an option: ')

        switch (option) {
            case '1':
                console.log('create Player')
                const playerName: string = prompt('Enter player name: ')
                this.player = new Player(playerName)
                return this.showMenu()
                break;
            case '2':
                if (!this.player) {
                    console.log('You need to create a player first')
                    return this.showMenu()
                    break;
                }
                this.startGame()
                break;
            case '3':
                console.log('Exiting game')
                break;
            default:
                console.log('Invalid option')
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
        while (this.player.health > 0 && this.round < this.maxRounds) {
            this.round++
            console.log(`Round ${this.round}`)

            this.enemy.push(Enemy.getRandomEnemy())
            this.player.getPlayerInfo()
            this.player.actionsMenu()
            this.checkGameOver()

            
        }
    }
    checkGameOver() {
        if (this.player.health <= 0) {
            console.log('Game Over')
            this.gameOver = true
        } else if (this.player.health > 0 && this.round === this.maxRounds)
            console.log('You WIN')
        this.gameOver = true
    }
}
const game = new Game()
game.showMenu()                             