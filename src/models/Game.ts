import { Enemy } from "./Enemy"
import { Item } from "./Item"
import { Player } from "./Player"

type nameEnemy = 'Venom' | 'Lizard' | 'blackLion' | 'UglyClown' | 'GiantSpider' | 'BigKong' | 'ElectricMan' | 'FireMan' | 'IceMan' | 'WaterMan' | 'EarthMan' 

export class Game {
    player: Player
    enemy: Enemy[]
    items: Item[]
    round: number
    maxRounds: number
    gameOver: boolean
    constructor(player: Player) {
        this.player = player
        this.enemy = []
        this.items = []
        this.round = 0
        this.maxRounds = 10
        this.gameOver = false
    }
    startGame() {
        console.log(`Welcome to the game ${this.player.name}`)
        const enemyNames:  nameEnemy[] = [
            'Venom',
            'Lizard',
            'blackLion',
            'UglyClown',
            'GiantSpider',
            'BigKong',
            'ElectricMan',
            'FireMan',
            'IceMan',
            'WaterMan',
            'EarthMan'
        ];
        for (let i = 0; i < this.maxRounds; i++) {
            const randomEnemy = enemyNames[Math.floor(Math.random() * enemyNames.length)]
            console.log(randomEnemy)
        }
         
    }
    nextRound() {
        console.log('Next round')
    }
    checkGameOver() {
        console.log('checking game over')
    }
}

const player = new Player('Player1')
const game = new Game(player)
game.startGame()