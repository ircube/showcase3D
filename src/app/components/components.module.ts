import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyNavComponent } from './my-nav/my-nav.component';
import { Obj3dComponent } from './obj3d/obj3d.component';
import { Object3dComponent } from './object3d/object3d.component';
import { SceneComponent } from './scene/scene.component';
import { MaterialModule } from '../material/material.module';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    MyNavComponent,
    Obj3dComponent,
    Object3dComponent,
    SceneComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MaterialModule,
  ],
  exports: [
    MyNavComponent,
    Obj3dComponent,
    Object3dComponent,
    SceneComponent
  ]
})
export class ComponentsModule { }
