import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Object3dComponent } from './object3d.component';

describe('Object3dComponent', () => {
  let component: Object3dComponent;
  let fixture: ComponentFixture<Object3dComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Object3dComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Object3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
