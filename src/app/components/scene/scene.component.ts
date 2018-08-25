import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { 
  Component, 
  OnInit, 
  Input,
  ViewChild,
  forwardRef 
} from '@angular/core';

import { Scene } from '../../classes/Scene';

interface AppState {
  message: string;
}

@Component({
  selector: 'scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.css']
})
export class SceneComponent implements OnInit {
  @Input() color:string;
  @ViewChild('scene') sceneTag:any;

  message$: Observable<string>;
  sceneContainer: HTMLElement;
  scene:Scene;
  
  constructor(private store:Store<AppState>) {
    this.message$ = this.store.select('message');
  }

  spanishMessage() {
    this.store.dispatch({type: 'SPANISH'})
  }
   frenchMessage() {
    this.store.dispatch({type: 'FRENCH'})
  }


  ngOnInit() {
    this.setupHtml();
    this.setupThreeScene(this.sceneContainer,this.color);
  }

  setupHtml(){
    document.body.style.margin = '0px';
    let sceneStyle: CSSStyleDeclaration =  
      this.sceneTag.nativeElement.style;
    sceneStyle.backgroundColor = this.color;

    this.sceneContainer = this.sceneTag.nativeElement;
  }

  setupThreeScene(container, color){
    this.scene = new Scene(container,color);
  }
}
