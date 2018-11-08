/**
 *
 * NodeDescriptionCard
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Grid, Header, Button } from 'semantic-ui-react';
import NodeAdditionForm from 'components/NodeAdditionForm';
/* eslint-disable react/prefer-stateless-function */
class NodeDescriptionCard extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showEditForm: false,
    };
  }

  showEditForm = () => {
    this.setState({ showEditForm: true });
  };

  onFormCancel = () => {
    this.setState({ showEditForm: false });
  };

  render() {
    const { node } = this.props;
    return this.state.showEditForm ? (
      <NodeAdditionForm
        handleCancel={this.onFormCancel}
        handleSubmit={this.props.onSaveNodeName}
        options={this.props.nodeOptions}
      />
    ) : (
      <Grid>
        <Grid.Row>
          {/* <Grid.Column width={2}>
              <Image src="https://via.placeholder.com/150" size="" />
            </Grid.Column> */}
          <Grid.Column width={12}>
            <Header as="h4">{node.nodeName}</Header>
          </Grid.Column>
          <Grid.Column width={4}>
            <Button size="mini" onClick={this.showEditForm}>
              Edit
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

NodeDescriptionCard.propTypes = {
  node: PropTypes.object,
  nodeOptions: PropTypes.object,
  onSaveNodeName: PropTypes.func,
};

export default NodeDescriptionCard;
