import {element, by, browser} from 'protractor';

describe('dashboard App', () => {
 beforeEach(function () {
   browser.get('/test-app');
 });

 it('should display message saying app works', () => {
  const title = element(by.tagName('h1')).getText();
  expect(title).toEqual('Learning Angular - Packt Way');
 });

 it('should display message saying app works', () => {
  element(by.tagName('button')).click();
  const title = element(by.css('.afterClick')).getText();
  expect(title).toEqual('Element is clicked');
 });
 
 it('Should check is radio button is selected or deselected', function() {
  var mailCopy = element(by.id('sendEmailCopy'));
  expect(mailCopy.isSelected()).toBe(false);
  mailCopy.click();
  expect(mailCopy.isSelected()).toBe(true);
 });

 it('Check the applications current URL', function() {
  var curUrl = browser.getCurrentUrl();
  expect(curUrl).toBe('http://localhost:49152/test-app');
 });

});