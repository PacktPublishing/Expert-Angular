import { SingletonPage } from './app.po';

describe('singleton App', () => {
  let page: SingletonPage;

  beforeEach(() => {
    page = new SingletonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
