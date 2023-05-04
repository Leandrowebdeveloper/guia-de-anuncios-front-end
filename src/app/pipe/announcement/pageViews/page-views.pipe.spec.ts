import { pageViewsPipe } from './page-views.pipe';

describe('pageViewsPipe', () => {
  it('create an instance', () => {
    const pipe = new pageViewsPipe();
    expect(pipe).toBeTruthy();
  });
});
