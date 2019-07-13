import { 
  Component,
  OnInit,
  Injector,
  Input 
} from '@angular/core';
import { SceneComponent } from '../scene/scene.component';
import Obj3D from 'src/app/classes/Obj';


@Component({
  selector: 'obj3d',
  templateUrl: './obj3d.component.html',
  styleUrls: ['./obj3d.component.css']
})
export class Obj3dComponent implements OnInit {
  @Input() public modelUrl: string;
  public scene;
  constructor(private inj: Injector) { }

  ngOnInit() {
    this.scene = this.inj.get(SceneComponent).scene;
    let obj3D = new Obj3D(
      this.scene.scene,
      this.modelUrl
    );
  }

}
