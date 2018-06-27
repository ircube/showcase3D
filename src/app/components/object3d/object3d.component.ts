import { Component, OnInit } from '@angular/core';
import { Injector, Input } from '@angular/core';


import * as THREE from 'three';
import { SceneComponent } from '../scene/scene.component';

@Component({
  selector: 'object3D',
  templateUrl: './object3d.component.html',
  styleUrls: ['./object3d.component.css']
})
export class Object3dComponent implements OnInit {
  @Input() color:string;
  scene;
  constructor(private inj:Injector) { }
  
  ngOnInit() {
    let parentComponent = this.inj.get(SceneComponent);
    this.scene = parentComponent.scene;

    let geometry = new THREE.BoxGeometry( 1, 1, 1 );

    let material = new THREE.MeshBasicMaterial( { color: this.color } );
    let cube = new THREE.Mesh( geometry, material );
    cube.position.set(
      this.randInt(-3,3), 
      this.randInt(-3,3), 
      this.randInt(-3,3)
    );
    
    this.scene.scene.add( cube );


    console.log(parentComponent);
  }

  randInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

}
