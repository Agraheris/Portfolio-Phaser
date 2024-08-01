import Phaser from "phaser";
import player from '/assets/player.png'

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
    this.load.image('player', player);
    console.log('Preloading assets...');
}

function create() {
    console.log('Creating scene...');
    this.player = this.add.sprite(400, 300, 'player');
}

function update() {
    // Logique de mise à jour du jeu ici
}