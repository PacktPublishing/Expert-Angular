import { PrototypePage } from './app.po';

describe('prototype App', () => {
  let page: PrototypePage;

  beforeEach(() => {
    page = new PrototypePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
