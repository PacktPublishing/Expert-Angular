import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvidersExampleComponent } from './providers-example.component';

describe('ProvidersExampleComponent', () => {
  let component: ProvidersExampleComponent;
  let fixture: ComponentFixture<ProvidersExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvidersExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvidersExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
