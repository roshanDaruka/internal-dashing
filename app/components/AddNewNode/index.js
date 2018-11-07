/**
 *
 * AddNewNode
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Header, Button } from 'semantic-ui-react';
/* eslint-disable react/prefer-stateless-function */
class AddNewNode extends React.PureComponent {
  render() {
    return (
      <div>
        <Button>+</Button>
        <Header as="span">Add New Node</Header>
      </div>
    );
  }
}

AddNewNode.propTypes = {};

export default AddNewNode;
