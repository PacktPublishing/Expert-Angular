import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAppComponent } from './test-app.component';

describe('Testing App Component', () => {
   it('Test learning component', () => {
    let component = new TestAppComponent();
    expect(component).toBeTruthy();
   });
});

describe('AppComponent', () => {
 beforeEach(function() {
  this.app = new TestAppComponent();
 });

 it('Component should have Packt property', function() {
  expect(this.app.publisherName).toBe('Packt');
 });
});

describe('TestAppComponent', () => {

  it('Testing App component', () => {
    let component = new TestAppComponent();
    expect(component.authorName).toMatch('Sridhar');
  });

  it('Testing Component Method', () => {
    let component = new TestAppComponent();
    expect(component.hiPackt()).toBe("Hello Packt");
  });

  describe('JavaScript addition operator', function () {
    it('adds two numbers together', function () {
    expect(1 + 2).toEqual(3); });
  });

});
