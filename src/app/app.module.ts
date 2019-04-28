import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { simpleReducer } from 'src/app/simple.reducer';

import { AppComponent } from './app.component';
import { SceneComponent } from './components/scene/scene.component';
import { Object3dComponent } from './components/object3d/object3d.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    SceneComponent,
    Object3dComponent,
    MyNavComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ message: simpleReducer }),
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
