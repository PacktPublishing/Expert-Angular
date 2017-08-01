import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomStructureDirectiveComponent } from './custom-structure-directive.component';

describe('CustomStructureDirectiveComponent', () => {
  let component: CustomStructureDirectiveComponent;
  let fixture: ComponentFixture<CustomStructureDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomStructureDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomStructureDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
