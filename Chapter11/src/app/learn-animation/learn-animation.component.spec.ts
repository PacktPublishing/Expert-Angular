import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnAnimationComponent } from './learn-animation.component';

describe('LearnAnimationComponent', () => {
  let component: LearnAnimationComponent;
  let fixture: ComponentFixture<LearnAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
