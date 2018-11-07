/**
 *
 * NodeDescriptionCard
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Grid, Image, Header, Button } from 'semantic-ui-react';
/* eslint-disable react/prefer-stateless-function */
class NodeDescriptionCard extends React.PureComponent {
  render() {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={2}>
            <Image src="" size="" />
          </Grid.Column>
          <Grid.Column width={10}>
            <Header as="h4">Health and persionla care</Header>
          </Grid.Column>
          <Grid.Column width={4}>
            <Button>Edit</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

NodeDescriptionCard.propTypes = {};

export default NodeDescriptionCard;
