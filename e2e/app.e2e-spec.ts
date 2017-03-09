import { NestedFormSamplePage } from './app.po';

describe('nested-form-sample App', function() {
  let page: NestedFormSamplePage;

  beforeEach(() => {
    page = new NestedFormSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
