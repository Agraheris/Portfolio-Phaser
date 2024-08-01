import Phaser from "phaser";
import playerSprite from '/assets/player.png'
import player from '/src/classes/player'

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

function preload() {
    this.load.image('player', playerSprite);
    console.log('Preloading assets...');
}

function create() {
    console.log('Creating scene...');
    this.player = new player(this, 400, 300, 'player');
}

function update() {
    this.player.update();
}