export default class Wall extends Phaser.GameObjects.Rectangle {
    constructor(scene, x, y, width, height, color) {
        super(scene, x, y, width, height, color);
        scene.add.existing(this);
    }
}