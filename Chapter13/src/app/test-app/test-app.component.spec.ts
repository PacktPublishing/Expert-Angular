import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAppComponent } from './test-app.component';

describe('TestAppComponent', () => {

  it('Testing App component', () => {
    let component = new TestAppComponent();
    expect(component.authorName).toMatch('Sridhar');
  });

  it('Testing Component Method', () => {
    let component = new TestAppComponent();
    expect(component.hiPackt()).toBe("Hello Packt");
  });

});
