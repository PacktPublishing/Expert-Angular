import { AngularObservablePage } from './app.po';

describe('angular-observable App', () => {
  let page: AngularObservablePage;

  beforeEach(() => {
    page = new AngularObservablePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
