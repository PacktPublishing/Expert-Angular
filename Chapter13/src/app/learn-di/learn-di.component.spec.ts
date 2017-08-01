import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnDiComponent } from './learn-di.component';

describe('LearnDiComponent', () => {
  let component: LearnDiComponent;
  let fixture: ComponentFixture<LearnDiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnDiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnDiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
