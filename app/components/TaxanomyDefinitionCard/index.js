/**
 *
 * TaxanomyDefinitionCard
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Grid, Header } from 'semantic-ui-react';
import NodeAdditionForm from 'components/NodeAdditionForm/Loadable';
import NodeDescriptionCard from 'components/NodeDescriptionCard';
import AddNewNode from 'components/AddNewNode';
import ChildNodeDescriptionCard from 'components/ChildNodeDescriptionCard';
/* eslint-disable react/prefer-stateless-function */
class TaxanomyDefinitionCard extends React.PureComponent {
  render() {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={1} padded={false}>
            <Header as="span">A</Header>
          </Grid.Column>
          <Grid.Column width={15}>
            <NodeAdditionForm />
            <NodeDescriptionCard />
            <AddNewNode />
            <ChildNodeDescriptionCard />
            <ChildNodeDescriptionCard />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

TaxanomyDefinitionCard.propTypes = {};

export default TaxanomyDefinitionCard;
