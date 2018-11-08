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
import TaxonomyChildrenDefinitionCard from 'components/TaxonomyChildrenDefinitionCard';
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
        name={node.nodeName}
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
        {node.childNodes &&
          node.childNodes.map((childNode, index) => (
            <TaxonomyChildrenDefinitionCard
              node={childNode}
              key={childNode.nodeName}
              index={index}
              parentIndex={this.props.index}
              saveChildNodeName={this.props.saveChildNodeName}
            />
          ))}
        <TaxonomyChildrenDefinitionCard
          node={{}}
          index={null}
          saveChildNodeName={this.props.saveChildNodeName}
          parentIndex={this.props.index}
        />
      </Grid>
    );
  }
}

NodeDescriptionCard.propTypes = {
  node: PropTypes.object,
  nodeOptions: PropTypes.object,
  onSaveNodeName: PropTypes.func,
  index: PropTypes.number,
  saveChildNodeName: PropTypes.func,
};

export default NodeDescriptionCard;
