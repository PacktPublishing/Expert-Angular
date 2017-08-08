import { AngularPromisePage } from './app.po';

describe('angular-promise App', () => {
  let page: AngularPromisePage;

  beforeEach(() => {
    page = new AngularPromisePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
