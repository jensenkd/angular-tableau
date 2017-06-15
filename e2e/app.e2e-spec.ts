import { AngularTableauPage } from './app.po';

describe('angular-tableau App', () => {
  let page: AngularTableauPage;

  beforeEach(() => {
    page = new AngularTableauPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
