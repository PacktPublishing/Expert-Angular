import { Chap15Page } from './app.po';

describe('chap15 App', () => {
  let page: Chap15Page;

  beforeEach(() => {
    page = new Chap15Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
