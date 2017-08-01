import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetectComponent } from './change-detect.component';

describe('ChangeDetectComponent', () => {
  let component: ChangeDetectComponent;
  let fixture: ComponentFixture<ChangeDetectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeDetectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeDetectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
