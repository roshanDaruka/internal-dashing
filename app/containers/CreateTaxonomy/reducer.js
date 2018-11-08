/*
 *
 * CreateTaxonomy reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  CHANGE_TAXANOMY_NAME,
  STEP_BACK,
  STEP_CHANGE,
  SAVE_NODE_NAME,
} from './constants';

export const initialState = fromJS({
  taxanomyCreationForm: {
    displayName: '',
    nodes: [],
  },
  step: 0,
});

function createTaxonomyReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case CHANGE_TAXANOMY_NAME:
      return state
        .setIn(['taxanomyCreationForm', 'displayName'], action.name)
        .set('step', 1);
    case STEP_BACK: {
      const step = state.get('step');
      return step > 0 ? state.set('step', step - 1) : state.set('step', 0);
    }
    case STEP_CHANGE:
      return state.set('step', action.index);

    case SAVE_NODE_NAME: {
      if (action.index === null)
        return state.setIn(
          ['taxanomyCreationForm', 'nodes'],
          state
            .getIn(['taxanomyCreationForm', 'nodes'])
            .push(fromJS({ nodeType: action.nodeType, nodeName: action.name })),
        );
      return state.setIn(
        ['taxanomyCreationForm', 'nodes', action.index],
        fromJS({ nodeType: action.nodeType, nodeName: action.name }),
      );
    }
    default:
      return state;
  }
}

export default createTaxonomyReducer;
