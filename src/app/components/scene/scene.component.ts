import { 
  Component, 
  OnInit, 
  Input,
  ViewChild,
  forwardRef 
} from '@angular/core';
import { Scene } from '../../classes/Scene';

@Component({
  selector: 'scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.css']
})
export class SceneComponent implements OnInit {
  @Input() color:string;
  @ViewChild('scene') sceneTag:any;

  sceneContainer: HTMLElement;
  scene:Scene;
  
  constructor() {

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



