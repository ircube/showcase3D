import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SceneComponent } from './components/scene/scene.component';
import { Object3dComponent } from './components/object3d/object3d.component';

@NgModule({
  declarations: [
    AppComponent,
    SceneComponent,
    Object3dComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
