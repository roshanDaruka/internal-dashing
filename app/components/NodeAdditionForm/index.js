/**
 *
 * NodeAdditionForm
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Grid, Button, Dropdown, Icon, Input } from 'semantic-ui-react';
/* eslint-disable react/prefer-stateless-function */
class NodeAdditionForm extends React.PureComponent {
  render() {
    const options = [{ text: 'A' }, { text: 'b' }, { text: 'c' }];

    return (
      <Grid>
        <Grid.Row relaxed>
          <Button size="mini">
            <Icon size="small" color="grey" name="add" /> Image
          </Button>
          <Input
            size="mini"
            label={
              <Dropdown placeholder="Product Listing Node" options={options} />
            }
            labelPosition="left"
            placeholder="Add Node Name"
          />
        </Grid.Row>
        <Grid.Row>
          <Button>Save</Button>
          <Button>Cancel</Button>
        </Grid.Row>
      </Grid>
    );
  }
}

NodeAdditionForm.propTypes = {};

export default NodeAdditionForm;
