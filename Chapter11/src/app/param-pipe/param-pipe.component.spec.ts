import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamPipeComponent } from './param-pipe.component';

describe('ParamPipeComponent', () => {
  let component: ParamPipeComponent;
  let fixture: ComponentFixture<ParamPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParamPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
