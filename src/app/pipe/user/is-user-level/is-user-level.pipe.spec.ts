import { IsUserLevelPipe } from './is-user-level.pipe';

describe('IsUserLevelPipe', () => {
  it('create an instance', () => {
    const pipe = new IsUserLevelPipe();
    expect(pipe).toBeTruthy();
  });
});
