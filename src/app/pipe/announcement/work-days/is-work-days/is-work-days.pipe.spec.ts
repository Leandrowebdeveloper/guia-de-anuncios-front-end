import { IsWorkDaysPipe } from './is-work-days.pipe';

describe('IsWorkDaysPipe', () => {
  it('create an instance', () => {
    const pipe = new IsWorkDaysPipe();
    expect(pipe).toBeTruthy();
  });
});
