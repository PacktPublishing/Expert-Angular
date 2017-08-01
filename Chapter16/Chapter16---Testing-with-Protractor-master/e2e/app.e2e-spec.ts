import { browser, by, element } from 'protractor';

describe('Form automation Example', function() {
  beforeEach(function () {
    browser.get('/testing');
  });
  
  it('Should enter name and click submit', function() {

    element(by.css('#firstName')).sendKeys("test1");
    element(by.css('#sendMail')).click();

    var updatedVal = element(by.id("notification")).getText();
    expect(updatedVal).toEqual('Thanks test1');
   
  });

  it('Should check is radio button is selected or deselected', function() {
    var mailCopy = element(by.id('sendEmailCopy'));
    expect(mailCopy.isSelected()).toBe(false);
    mailCopy.click();
    expect(mailCopy.isSelected()).toBe(true);
  });

  it('Check paragraphs inner text', function() {
    browser.get('/testing');
    var s = element(by.css('#firstPara')).getText();
    expect(s).toEqual('first-test works!');
  });

  it('Should check for getAttribute - class', function() {
    browser.get('/testing');
    var foo = element(by.id('firstPara'));
    expect(foo.getAttribute('class')).toEqual('custom-style');
  });

  it('Should check element for isDisplayed method', function() {
    browser.get('/testing');
    var ele = element(by.css('#firstPara')).isDisplayed();
    expect(ele).toBeTruthy();
  });

  it('Check the applications current URL', function() {
    var curUrl = browser.getCurrentUrl();
    expect(curUrl).toBe('http://localhost:49152/testing');
  });


 


});


