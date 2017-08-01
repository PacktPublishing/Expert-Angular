import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateSyntaxComponent } from './template-syntax.component';

describe('TemplateSyntaxComponent', () => {
  let component: TemplateSyntaxComponent;
  let fixture: ComponentFixture<TemplateSyntaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateSyntaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateSyntaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
