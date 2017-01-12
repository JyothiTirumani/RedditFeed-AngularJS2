import { RedditFeedAngular2Page } from './app.po';

describe('reddit-feed-angular2 App', function() {
  let page: RedditFeedAngular2Page;

  beforeEach(() => {
    page = new RedditFeedAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
