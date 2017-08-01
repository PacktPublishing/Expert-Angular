import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTemplateComponent } from './my-template.component';

describe('MyTemplateComponent', () => {
  let component: MyTemplateComponent;
  let fixture: ComponentFixture<MyTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
