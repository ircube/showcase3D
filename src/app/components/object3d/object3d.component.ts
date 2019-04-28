import { Component, OnInit } from '@angular/core';
import { Injector, Input } from '@angular/core';

import { SceneComponent } from '../scene/scene.component';
import Object3D from '../../classes/Object3D';

@Component({
  selector: 'object-3d',
  templateUrl: './object3d.component.html',
  styleUrls: ['./object3d.component.css']
})
export class Object3dComponent implements OnInit {
  @Input() public color: string;
  public scene;
  constructor(private inj: Injector) { }

  ngOnInit() {
    this.scene = this.inj.get(SceneComponent).scene;
    const object3D = new Object3D(this.scene.scene, this.color);
    object3D.setColor('green');
  }
}
