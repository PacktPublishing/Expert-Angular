import {element, by, browser} from 'protractor';

describe('dashboard App', () => {
  beforeEach(function () {
    browser.get('http://localhost:4200/#/test-app');
  });

  it('should display message saying app works', () => {
    browser.get('http://localhost:4200/#/test-app');
    const title = element(by.tagName('h1')).getText();
    expect(title).toEqual('Learning Angular - Packt Way');
  });

  it('should display message saying app works', () => {
    browser.get('http://localhost:4200/#/test-app');
    element(by.tagName('button')).click();
    const title = element(by.css('.afterClick')).getText();
    expect(title).toEqual('Element is clicked');
  });

  it('should display message saying app works', () => {
    browser.get('http://localhost:4200/#/test-app');
    const title = element(by.tagName('h1')).getText();
    expect(title).toEqual('Learning Angular - Packt Way');
  });

  it('Get element by css :', function () {
    const countelement = element(by.css('.packtHeading'));
  });
});

