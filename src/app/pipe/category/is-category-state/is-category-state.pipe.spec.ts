import { categoryStatePipe } from './is-category-state.pipe';

describe('categoryStatePipe', () => {
  it('create an instance', () => {
    const pipe = new categoryStatePipe();
    expect(pipe).toBeTruthy();
  });
});
