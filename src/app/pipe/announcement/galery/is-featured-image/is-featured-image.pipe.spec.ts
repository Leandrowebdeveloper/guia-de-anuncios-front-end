import { IsFeaturedImagePipe } from './is-featured-image.pipe';

describe('IsFeaturedImagePipe', () => {
  it('create an instance', () => {
    const pipe = new IsFeaturedImagePipe();
    expect(pipe).toBeTruthy();
  });
});
