export default class Player extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);
        scene.add.existing(this);
        this.cursors = scene.input.keyboard.createCursorKeys();
    }

    update() {
        if (this.cursors.left.isDown) {
            this.x -= 2;
        }
        if (this.cursors.right.isDown) {
            this.x += 2;
        }
        if (this.cursors.up.isDown) {
            this.y -= 2;
        }
        if (this.cursors.down.isDown) {
            this.y += 2;
        }
    }
}