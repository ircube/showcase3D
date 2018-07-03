import * as THREE from 'three';
import { debug } from 'util';


export default class Object3D {
    mesh3D
    color
    scene
    constructor(scene:THREE.Scene, color) {
        this.scene = scene;
        let geometry = new THREE.BoxGeometry( 1, 1, 1 );
        
        let material = new THREE.MeshBasicMaterial( { color: color } );
        let mesh3D = new THREE.Mesh( geometry, material );
        mesh3D.position.set(
          this.randInt(-3,3), 
          this.randInt(-3,3), 
          this.randInt(-3,3)
        );
        this.scene.add( mesh3D );
    }
    public setPosition(){}
    public setColor(color){
        this.color = color;
    }

    randInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
}