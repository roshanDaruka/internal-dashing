/**
 *
 * NewNodeSection
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import AddNewNode from 'components/AddNewNode';
import NodeAdditionForm from 'components/NodeAdditionForm';
/* eslint-disable react/prefer-stateless-function */
class NewNodeSection extends React.PureComponent {
  render() {
    return this.props.showForm ? (
      <NodeAdditionForm
        handleCancel={this.props.onFormCancel}
        handleSubmit={this.props.onSaveNodeName}
        options={this.props.nodeOptions}
      />
    ) : (
      <AddNewNode onClick={this.props.onAddNewNode} />
    );
  }
}

NewNodeSection.propTypes = {
  showForm: PropTypes.bool,
  onAddNewNode: PropTypes.func,
  onSaveNodeName: PropTypes.func,
  onFormCancel: PropTypes.func,
  nodeOptions: PropTypes.array,
};

export default NewNodeSection;
