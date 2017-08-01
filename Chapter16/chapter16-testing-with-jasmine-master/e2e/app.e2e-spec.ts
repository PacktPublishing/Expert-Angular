import {element, by, browser} from 'protractor';

describe('dashboard App', () => {
  /*
let expectedMsg = 'Learning Angular - Packt Way';
  beforeEach(function () {
    browser.get('/test-app');
  });
  
  /*
   it('Should enter name and click submit', function() {

    element(by.css('#firstName')).sendKeys("test1");
    element(by.css('#sendMail')).click();

    var updatedVal = element(by.id("notification")).getText();
    expect(updatedVal).toEqual('Thanks test1');
   
  });
*/
  it('Check paragraphs inner text', function() {
    browser.get('/first-test');
    var s = element(by.css('#firstPara')).getText();
    expect(s).toEqual('Testing E2E');
  });

  it('Should check for getAttribute - class', function() {
    browser.get('/first-test');
    var foo = element(by.id('firstPara'));
    expect(foo.getAttribute('class')).toEqual('custom-style');
  });

  it('Should check element for isDisplayed method', function() {
    browser.get('/first-test');
    var ele = element(by.css('#firstPara')).isDisplayed();
    expect(ele).toBeTruthy();
  });

  it('Check the applications current URL', function() {
    var curUrl = browser.getCurrentUrl();
    expect(curUrl).toBe('http://localhost:49152/first-test');
  });

});

