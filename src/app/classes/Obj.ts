import * as THREE from 'three';
// import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';

// import { OBJLoader } from '../libs/three/OBJLoader';


import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';

export default class Obj3D {

    private mesh3D: THREE.Mesh;
    // private loader: any;
    // private modelUrl: string;
    constructor(
        private scene: THREE.Scene,
        private modelUrl?: string
    ) {
        this.scene = scene;
        // var loader = new OBJLoader();
        
        
        
        const oBJLoader2 = new OBJLoader();
        
        console.log('THREE:',
            this.scene,
            // modelUrl,
            oBJLoader2
        );
        
        const scenea = this.scene;



        
        oBJLoader2.load(
            'assets/3dModel/cube/3d.obj',
            (event)=>{
                console.log("oBJLoader2",event);
                // const root = event.detail.loaderRootNode;
                scenea.add(event);
            },null
        )


        // // function called on successful load
        // const callbackOnLoad = function (event) {
        //     console.log("** callbackOnLoad:",event);
        //     console.log("** scene:",this.scene);
        //     // this.scene.add(event.);
        // };

        // // load a resource from provided URL synchronously


        // loader.load(
        //     'assets/3dModel/cube/3d.obj',
        //     callbackOnLoad,
        //     null,
        //     (e)=>{console.log('error',e)}
        // );

        // this.scene.add(this.mesh3D);
    }
    // load = () => {

    // }
}
