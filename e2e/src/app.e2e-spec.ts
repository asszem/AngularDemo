import { AppPage } from './app.po';
import { browser, protractor } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    browser.get('http://index.hu');
    expect(page.getParagraphText()).toEqual('Angular Demo Site');
  });
});
