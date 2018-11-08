/**
 *
 * NodeAdditionForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Form } from 'semantic-ui-react';
/* eslint-disable react/prefer-stateless-function */

class NodeAdditionForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      type: props.type,
      name: props.name,
    };
  }

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    const { type, name } = this.state;

    this.props.handleSubmit(type, name);
  };

  handleCancel = e => {
    this.props.handleCancel();
    e.stopPropagation();
    e.preventDefault();
  };

  render() {
    return (
      <Grid>
        <Grid.Row>
          {/* <Grid.Column width={4}>
            <Button size="mini">
              <Icon size="small" color="grey" name="add" /> Image
            </Button>
          </Grid.Column> */}
          <Grid.Column>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group>
                {/* <Label htmlFor="taxanomyName">
            <Header as="h5">Taxanomy Name</Header>
          </Label> */}
                <Form.Dropdown
                  placeholder="Product Listing Node"
                  options={this.props.options}
                  button
                  name="type"
                  size="mini"
                  onChange={this.handleChange}
                />
                <Form.Input
                  id="addNewNode"
                  type="text"
                  fluid={false}
                  value={this.state.name}
                  name="name"
                  onChange={this.handleChange}
                  size="mini"
                  placeholder="Add Node Name"
                />
              </Form.Group>
              <Form.Button type="submit" content="Save" />
              <Form.Button content="Cancel" onClick={this.handleCancel} />
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

NodeAdditionForm.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  handleSubmit: PropTypes.func,
  options: PropTypes.object,
  handleCancel: PropTypes.func,
};

export default NodeAdditionForm;
