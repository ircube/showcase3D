import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { simpleReducer } from 'src/app/simple.reducer';

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
    BrowserModule,
    StoreModule.forRoot({ message: simpleReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
