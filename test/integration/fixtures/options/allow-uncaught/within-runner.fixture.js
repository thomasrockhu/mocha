'use strict';

describe('Uncaught exception within runner', () => {
  it('test1', () => {
    setTimeout(() => {
      throw new Error('Uncaught error after test1');
    }, 1);
  });
  it('test2', function () { });
  it('test3', function () { });
  it('test4', function () { });
});