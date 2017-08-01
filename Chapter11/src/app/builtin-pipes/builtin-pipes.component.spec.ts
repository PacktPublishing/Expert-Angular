import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuiltinPipesComponent } from './builtin-pipes.component';

describe('BuiltinPipesComponent', () => {
  let component: BuiltinPipesComponent;
  let fixture: ComponentFixture<BuiltinPipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuiltinPipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuiltinPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
