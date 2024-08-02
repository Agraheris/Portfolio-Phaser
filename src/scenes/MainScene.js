import Phaser from 'phaser';
import Player from '../classes/player';
import Wall from '../classes/wall';
import spritesheet from '/assets/spritesheet.png';

export default class MainScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MainScene' });
    }

    preload() {
        console.log('Preloading assets...');
        this.load.spritesheet('player', spritesheet, { frameWidth: 16, frameHeight: 24 });
    }

    create() {
        console.log('Creating scene...');
        

        if (!this.physics) {
            console.error('Physics is not initialized.');
            return;
        }

        this.player = new Player(this, 400, 300, 'player');
        console.log('Creation in progress ...');

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
        this.walls = this.physics.add.staticGroup();
        this.walls.add(new Wall(this, 400, 300, 50, 50, 0x00ff00));

        this.physics.add.collider(this.player, this.walls);
    }

    update() {
        if (this.player) {
            this.player.update();
            this.physics.world.collide(this.player, this.walls, handleCollision, null, this);
        }
        
        function handleCollision(player, wall) {
            console.log('Collision détectée !');
            }
        }
    }