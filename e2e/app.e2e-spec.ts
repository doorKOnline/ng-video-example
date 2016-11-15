import { VideoExamplePage } from './app.po';

describe('video-example App', function() {
  let page: VideoExamplePage;

  beforeEach(() => {
    page = new VideoExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
