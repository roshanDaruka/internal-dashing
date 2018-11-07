/**
 *
 * ChildNodeDescriptionCard
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Grid, Button, Header, Label } from 'semantic-ui-react';
/* eslint-disable react/prefer-stateless-function */
class ChildNodeDescriptionCard extends React.PureComponent {
  render() {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={10}>
            <Header as="h4">Himalaya Personal Care Products</Header>
            <Label>Category is a sfsdf is b</Label>
          </Grid.Column>
          <Grid.Column width={6}>
            <Button size="mini">Add Listing Rules</Button>
            <Button size="mini">Edit</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

ChildNodeDescriptionCard.propTypes = {};

export default ChildNodeDescriptionCard;
