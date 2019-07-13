import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Obj3dComponent } from './obj3d.component';

describe('Obj3dComponent', () => {
  let component: Obj3dComponent;
  let fixture: ComponentFixture<Obj3dComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Obj3dComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Obj3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
