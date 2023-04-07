import { IsAnnouncementCategoryPipe } from './is-category.pipe';

describe('IsAnnouncementCategoryPipe', () => {
  it('create an instance', () => {
    const pipe = new IsAnnouncementCategoryPipe();
    expect(pipe).toBeTruthy();
  });
});
