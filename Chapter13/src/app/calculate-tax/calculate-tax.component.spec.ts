import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateTaxComponent } from './calculate-tax.component';

describe('CalculateTaxComponent', () => {
  let component: CalculateTaxComponent;
  let fixture: ComponentFixture<CalculateTaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculateTaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculateTaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
