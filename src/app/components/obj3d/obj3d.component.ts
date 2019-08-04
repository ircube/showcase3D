import { 
  Component,
  OnInit,
  Injector,
  Input, 
  AfterViewInit
} from '@angular/core';
import { SceneComponent } from '../scene/scene.component';
import Obj3D from 'src/app/classes/Obj';


@Component({
  selector: 'obj3d',
  templateUrl: './obj3d.component.html',
  styleUrls: ['./obj3d.component.css']
})
export class Obj3dComponent implements OnInit, AfterViewInit {
  @Input() public modelUrl: string='';
  public sceneComponent;
  constructor(private inj: Injector) { }
  async ngOnInit() {
    // this.setupHtml();
    // this.setupThreeScene(this.sceneContainer, this.color);
    // this.scene.onWindowResize();
    this.sceneComponent = await this.inj.get(SceneComponent);
    let obj3D = new Obj3D(
      this.sceneComponent.scene.scene,
      this.modelUrl
    );

  }
  ngAfterViewInit(): void {
  }

}
