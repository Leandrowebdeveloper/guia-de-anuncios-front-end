import { IsUsersPipe } from './is-users.pipe';

describe('IsUsersPipe', () => {
  it('create an instance', () => {
    const pipe = new IsUsersPipe();
    expect(pipe).toBeTruthy();
  });
});
