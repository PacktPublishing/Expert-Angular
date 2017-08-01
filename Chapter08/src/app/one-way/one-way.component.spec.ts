import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneWayComponent } from './one-way.component';

describe('OneWayComponent', () => {
  let component: OneWayComponent;
  let fixture: ComponentFixture<OneWayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneWayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
