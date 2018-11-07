import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the createTaxonomy state domain
 */

const selectCreateTaxonomyDomain = state =>
  state.get('createTaxonomy', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by CreateTaxonomy
 */

const makeSelectCreateTaxonomy = () =>
  createSelector(selectCreateTaxonomyDomain, substate => substate.toJS());

export default makeSelectCreateTaxonomy;
export { selectCreateTaxonomyDomain };
