import { MementoPage } from './app.po';

describe('memento App', () => {
  let page: MementoPage;

  beforeEach(() => {
    page = new MementoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
