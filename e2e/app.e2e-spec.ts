import { DaniellePage } from './app.po';

describe('danielle App', function() {
  let page: DaniellePage;

  beforeEach(() => {
    page = new DaniellePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
