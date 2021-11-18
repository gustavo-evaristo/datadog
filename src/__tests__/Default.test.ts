import { Test } from '@services';

describe('Default test', () => {
  it('Should be able to say Hello World', () => {
    const say = Test.say();

    expect(say).toEqual('Hello World');
  });
});
