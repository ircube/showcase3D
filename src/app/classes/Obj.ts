import * as THREE from 'three';

import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';

export default class Obj3D {
    constructor(
        private scene: THREE.Scene,
        private modelUrl?: string
    ) {
        this.scene = scene;

        const oBJLoader = new OBJLoader();

        const scenea = this.scene;

        oBJLoader.load(
            this.modelUrl,
            (event) => {
                scenea.add(event);
            }, null
        )

    }
}
