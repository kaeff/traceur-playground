import 'traceur';
import { flatten } from '../../src/es5/flatten';

describe('flatten', () => {
  it('leaves simple values as-is', () => {
    expect(flatten( [1] )).toEqual( [1] );
  });

  it('removes 1 level of nested arrays', () => {
    expect(flatten( [1, [2]] )).toEqual( [1, 2] );
  });
});
