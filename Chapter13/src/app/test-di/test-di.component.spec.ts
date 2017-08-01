import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDiComponent } from './test-di.component';

describe('TestDiComponent', () => {
  let component: TestDiComponent;
  let fixture: ComponentFixture<TestDiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestDiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
