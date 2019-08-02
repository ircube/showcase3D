import * as THREE from 'three';

import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';

export default class Obj3D {
    constructor(
        private scene: any,
        private modelUrl?: string
    ) {
        console.log('obj3d scene: ',scene);
        
        const oBJLoader = new OBJLoader();
        oBJLoader.load(
            this.modelUrl,
            (event) => {
                this.scene.add(event);
            }, null
        )
    }
}
