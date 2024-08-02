import Phaser from 'phaser';
import MainScene from './scenes/MainScene';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: MainScene,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    }
};

const game = new Phaser.Game(config);
