import { Enemy } from "./Enemy"
import { Item } from "./Item"
import { Player } from "./Player"

import promptSync from 'prompt-sync'
const prompt = promptSync()



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
        console.log(`Welcome ${this.player?.name} to the game!`)
        console.log('You have 10 round to defeat the enemies')
        console.log('good Luck!')
        this.enemy.push(Enemy.getRandomEnemy())

    }
    nextRound() {
        console.log('Next round')
    }
    checkGameOver() {
        console.log('checking game over')
    }
}

const game = new Game()
game.showMenu()

