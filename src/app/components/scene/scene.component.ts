// import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  Component,
  OnInit,
  Input,
  ViewChild,
  forwardRef,
  AfterViewInit,
  ElementRef,
  TemplateRef
} from '@angular/core';

import { Scene } from '../../classes/Scene';

// interface AppState {
//   message: string;
// }

@Component({
  selector: 'scene-3d',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.css']
})
export class SceneComponent implements OnInit, AfterViewInit {
  @Input() color: string;
  @ViewChild('scene', 
    { read: ElementRef, static: false }
  ) sceneTag: ElementRef;

  message$: Observable<string>;
  sceneContainer: HTMLElement;
  scene: Scene;

  constructor() {}

  ngOnInit() {

  }

  setupHtml() {
    document.body.style.margin = '0px';
    const sceneStyle: CSSStyleDeclaration =
      this.sceneTag.nativeElement.style;
    sceneStyle.backgroundColor = this.color;
    this.sceneContainer = this.sceneTag.nativeElement;
  }

  setupThreeScene(container, color) {
    this.scene = new Scene(container, color);
  }

  ngAfterViewInit(): void {
    this.setupHtml();
    this.setupThreeScene(this.sceneContainer, this.color);
    this.scene.onWindowResize();
  }
}
