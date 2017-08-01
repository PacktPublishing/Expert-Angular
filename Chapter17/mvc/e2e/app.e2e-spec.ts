import { MvcPage } from './app.po';

describe('mvc App', () => {
  let page: MvcPage;

  beforeEach(() => {
    page = new MvcPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
