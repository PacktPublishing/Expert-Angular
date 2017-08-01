import { Chap10Page } from './app.po';

describe('chap10 App', () => {
  let page: Chap10Page;

  beforeEach(() => {
    page = new Chap10Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
