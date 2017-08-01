import { browser, by, element } from 'protractor';

export class Chapter1Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {

    var input = element(by.css('#someInput'));
    //input.sendKeys(protractor.Key.ENTER);

    /* var text = "password";
      this.navigateTo();
      element(by.tagName("input"));
     /*
      $("input").clear();
      $("input").sendKeys(text);
      expect($("p").getText()).toEqual(text);

    return element(by.css('#someInput')).getText();
    */
  }
}
