/**
 *
 * TaxanomyDefinitionCard
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Grid, Header } from 'semantic-ui-react';
// import NodeAdditionForm from 'components/NodeAdditionForm/Loadable';
import NodeDescriptionCard from 'components/NodeDescriptionCard';
// import AddNewNode from 'components/AddNewNode';
import NewNodeSection from 'components/NewNodeSection';
/* eslint-disable react/prefer-stateless-function */
class TaxanomyDefinitionCard extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      options: [
        {
          text: 'Product Listing Node',
          value: 'Product Listing Node',
        },
        {
          text: 'Navigational Node',
          value: 'Navigational Node',
        },
      ],
    };
  }

  onAddNewNode = () => {
    this.setState({ showForm: true });
  };

  onFormCancel = () => {
    this.setState({ showForm: false });
  };

  onSaveNodeName = (type, name) => {
    this.props.saveNodeName(type, name, this.props.index);
  };

  render() {
    const isEmpty = Object.keys(this.props.node).length === 0;
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={1} padded={false}>
            <Header as="span">A</Header>
          </Grid.Column>
          <Grid.Column width={15}>
            {isEmpty ? (
              <NewNodeSection
                showForm={this.state.showForm}
                onAddNewNode={this.onAddNewNode}
                onFormCancel={this.onFormCancel}
                nodeOptions={this.state.options}
                onSaveNodeName={this.onSaveNodeName}
              />
            ) : (
              <NodeDescriptionCard
                node={this.props.node}
                onSaveNodeName={this.onSaveNodeName}
                nodeOptions={this.state.options}
              />
            )}
            {/* <ChildNodeDescriptionCard /> */}
            {/* <ChildNodeDescriptionCard /> */}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

TaxanomyDefinitionCard.propTypes = {
  node: PropTypes.object,
  saveNodeName: PropTypes.func,
  index: PropTypes.number,
};

export default TaxanomyDefinitionCard;
