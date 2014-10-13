import 'traceur';
import { reduce } from '../src/lib';

describe('reduce', () => {
  it('curries reduce and splat magic', () => {
    var sum = reduce((memo, el) => memo + el, 0);
    expect(sum([ 1,2 ])).toEqual(3);
  });
});
