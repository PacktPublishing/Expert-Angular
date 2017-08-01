import { async, ComponentFixture, TestBed  } from '@angular/core/testing';
import { ChangeDetectTestComponent } from './change-detect-test.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('ChangeDetectTestComponent', () => {

  let comp:ChangeDetectTestComponent;
  let fixture: ComponentFixture<ChangeDetectTestComponent>;
  let de:DebugElement;
  let el:HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeDetectTestComponent ]
    });

    fixture = TestBed.createComponent(ChangeDetectTestComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;
  });

 it(`should have as title 'Packt Testing works!'`, async(() => {
  const fixture = TestBed.createComponent(ChangeDetectTestComponent);
  const app = fixture.debugElement.componentInstance;
  expect(app.title).toEqual('Packt Testing works');
 }));

 it('should render title in a h1 tag', async(() => {
  const fixture = TestBed.createComponent(ChangeDetectTestComponent);
  fixture.detectChanges();
  const compiled = fixture.debugElement.nativeElement;
 expect(compiled.querySelector('h1').textContent).toContain('Packt Testing works');
 }));
});