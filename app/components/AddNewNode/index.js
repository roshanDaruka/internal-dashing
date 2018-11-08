/**
 *
 * AddNewNode
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Button, Grid } from 'semantic-ui-react';
/* eslint-disable react/prefer-stateless-function */
class AddNewNode extends React.PureComponent {
  render() {
    return (
      <Grid>
        <Grid.Row>
          <Button size="mini" onClick={this.props.onClick}>
            Add New Node
          </Button>
        </Grid.Row>
      </Grid>
    );
  }
}

AddNewNode.propTypes = {
  onClick: PropTypes.func,
};

export default AddNewNode;
