import { TabNgPage } from './app.po';

describe('tab-ng App', () => {
  let page: TabNgPage;

  beforeEach(() => {
    page = new TabNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
