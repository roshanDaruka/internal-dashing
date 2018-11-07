/**
 *
 * TaxanomyBasicInformationForm
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Button, Checkbox, Form, Dropdown, Header } from 'semantic-ui-react';
/* eslint-disable react/prefer-stateless-function */
class TaxanomyBasicInformationForm extends React.PureComponent {
  render() {
    const options = [{ text: 'a' }, { text: 'b' }, { text: 'c' }];
    return (
      <Form>
        <Form.Field>
          <label htmlFor="taxanomyName">
            <Header as="h5">Taxanomy Name</Header>
          </label>
          <input id="taxanomyName" placeholder="Taxanomy Name" fluid={false} />
        </Form.Field>
        <Form.Field>
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
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}

TaxanomyBasicInformationForm.propTypes = {};

export default TaxanomyBasicInformationForm;
