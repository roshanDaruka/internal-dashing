/**
 *
 * AddNewNode
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Header, Grid } from 'semantic-ui-react';
/* eslint-disable react/prefer-stateless-function */
class AddNewNode extends React.PureComponent {
  render() {
    return (
      <Grid>
        <Grid.Row>
          <Header onClick={this.props.onClick} as="Button">
            Add New Node
          </Header>
        </Grid.Row>
      </Grid>
    );
  }
}

AddNewNode.propTypes = {
  onClick: PropTypes.func,
};

export default AddNewNode;
