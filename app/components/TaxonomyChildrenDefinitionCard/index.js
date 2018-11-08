/**
 *
 * TaxonomyChildrenDefinitionCard
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Grid } from 'semantic-ui-react';
import NewNodeSection from 'components/NewNodeSection';
import ChildNodeDescriptionCard from 'components/ChildNodeDescriptionCard';
/* eslint-disable react/prefer-stateless-function */
class TaxonomyChildrenDefinitionCard extends React.PureComponent {
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
    this.props.saveChildNodeName(
      type,
      name,
      this.props.parentIndex,
      this.props.index,
    );
    this.setState({ showForm: false });
  };

  render() {
    const isEmpty = Object.keys(this.props.node).length === 0;
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={16}>
            {isEmpty ? (
              <NewNodeSection
                showForm={this.state.showForm}
                onAddNewNode={this.onAddNewNode}
                onFormCancel={this.onFormCancel}
                nodeOptions={this.state.options}
                onSaveNodeName={this.onSaveNodeName}
              />
            ) : (
              <ChildNodeDescriptionCard
                node={this.props.node}
                onSaveNodeName={this.onSaveNodeName}
                nodeOptions={this.state.options}
                index={this.props.index}
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

TaxonomyChildrenDefinitionCard.propTypes = {
  node: PropTypes.object,
  parentIndex: PropTypes.number,
  index: PropTypes.number,
  saveChildNodeName: PropTypes.func,
};

export default TaxonomyChildrenDefinitionCard;
