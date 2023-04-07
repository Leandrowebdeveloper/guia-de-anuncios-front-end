import { IsUserStatePipe } from './is-user-state.pipe';

describe('IsUserStatePipe', () => {
  it('create an instance', () => {
    const pipe = new IsUserStatePipe();
    expect(pipe).toBeTruthy();
  });
});
