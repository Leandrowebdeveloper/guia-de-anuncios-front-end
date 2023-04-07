import { IsErrosPipe } from './is-erros.pipe';

describe('IsErrosPipe', () => {
  it('create an instance', () => {
    const pipe = new IsErrosPipe();
    expect(pipe).toBeTruthy();
  });
});
