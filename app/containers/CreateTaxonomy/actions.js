/*
 *
 * CreateTaxonomy actions
 *
 */

import {
  DEFAULT_ACTION,
  CHANGE_TAXANOMY_NAME,
  STEP_BACK,
  STEP_CHANGE,
  SAVE_NODE_NAME,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function changeTaxanomyName(name) {
  return {
    type: CHANGE_TAXANOMY_NAME,
    name,
  };
}

export function stepBack() {
  return {
    type: STEP_BACK,
  };
}

export function stepChange(index) {
  return {
    type: STEP_CHANGE,
    index,
  };
}

export function saveNodeName(nodeType, name, index) {
  return {
    type: SAVE_NODE_NAME,
    nodeType,
    name,
    index,
  };
}
