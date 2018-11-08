import { fromJS } from 'immutable';
import createTaxonomyReducer from '../reducer';

describe('createTaxonomyReducer', () => {
  it('returns the initial state', () => {
    expect(createTaxonomyReducer(undefined, {})).toEqual(fromJS({}));
  });
});
