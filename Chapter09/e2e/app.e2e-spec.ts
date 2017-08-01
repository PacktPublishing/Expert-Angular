import { Chap9Page } from './app.po';

describe('chap9 App', () => {
  let page: Chap9Page;

  beforeEach(() => {
    page = new Chap9Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
