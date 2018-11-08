/**
 *
 * TaxanomyBasicInformationForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Form } from 'semantic-ui-react';
/* eslint-disable react/prefer-stateless-function */
class TaxanomyBasicInformationForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: props.initialName,
    };
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = () => {
    const { name } = this.state;

    this.props.changeTaxanomyName(name);
  };

  render() {
    // const options = [{ text: 'a' }, { text: 'b' }, { text: 'c' }];
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          {/* <Label htmlFor="taxanomyName">
            <Header as="h5">Taxanomy Name</Header>
          </Label> */}
          <Form.Input
            id="taxanomyName"
            type="text"
            placeholder="Taxanomy Name"
            fluid={false}
            value={this.state.name}
            name="name"
            label="Taxanomy Name"
            onChange={this.handleChange}
            size="mini"
          />
        </Form.Group>
        {/* <Form.Field>
          <Header as="h5">Clone From Existing</Header>
          <Checkbox toggle />
        </Form.Field>
        <Form.Field>
          <label htmlFor="Select Parent Taxanomy">
            <Header as="h5">Select Parent Taxanomy</Header>
          </label>
          <Dropdown
            placeholder="Select Parent Taxanomy"
            selection
            options={options}
          />
        </Form.Field> */}
        <Form.Button content="Submit" />
      </Form>
    );
  }
}

TaxanomyBasicInformationForm.propTypes = {
  changeTaxanomyName: PropTypes.func,
  initialName: PropTypes.string,
};

export default TaxanomyBasicInformationForm;
