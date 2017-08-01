import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoPipeComponent } from './demo-pipe.component';

describe('DemoPipeComponent', () => {
  let component: DemoPipeComponent;
  let fixture: ComponentFixture<DemoPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
