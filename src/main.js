import Phaser from "phaser";
import spritesheet from '/assets/spritesheet.png'
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
    this.load.spritesheet('player', spritesheet, { frameWidth: 16, frameHeight: 24 });
}
    console.log('Preloading assets...');

function create() {
    console.log('Creating scene...');
    this.player = new player(this, 400, 300, 'player');
    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('player', { start: 9, end: 11 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('player', { start: 3, end: 5 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'up',
        frames: this.anims.generateFrameNumbers('player', { start: 0, end: 2 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'down',
        frames: this.anims.generateFrameNumbers('player', { start: 6, end: 8 }),
        frameRate: 10,
        repeat: -1
    });
}


function update() {
    this.player.update();

}
