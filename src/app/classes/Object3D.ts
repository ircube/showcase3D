import * as THREE from 'three';
import { getRandomColor } from './Tools';

export default class Object3D {

    private mesh3D: THREE.Mesh;

    constructor(
        private scene: THREE.Scene,
        private color?: string,
        // private position?: THREE.Vector3
    ) {
        this.scene = scene;
        const geometry = new THREE.BoxGeometry(1, 1, 1);

        const material = new THREE.MeshBasicMaterial({ color: this.color ? this.color : getRandomColor() });
        this.mesh3D = new THREE.Mesh(geometry, material);
        this.mesh3D.position.set(
            this.randInt(-3, 3),
            this.randInt(-3, 3),
            this.randInt(-3, 3)
        );
        this.scene.add(this.mesh3D);
    }

    public setPosition() { }

    public setColor(color:string) {
        this.color = color;
    }

    randInt(min: number, max: number) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
}
