import { FactoryPage } from './app.po';

describe('factory App', () => {
  let page: FactoryPage;

  beforeEach(() => {
    page = new FactoryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
