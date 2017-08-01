import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureDirectiveComponent } from './structure-directive.component';

describe('StructureDirectiveComponent', () => {
  let component: StructureDirectiveComponent;
  let fixture: ComponentFixture<StructureDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StructureDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructureDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
