/**
 *
 * TaxanomyCreationForm
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
// import Tabs from 'components/Tabs';
// import TaxanomyHeader from 'components/TaxanomyHeader';
import TaxanomyBasicInformationForm from 'components/TaxanomyBasicInformationForm/Loadable';
import TaxanomyEditTaxanomyDefinitionForm from 'components/TaxanomyEditTaxanomyDefinitionForm/Loadable';
import TaxanomyReviewAndPublishForm from 'components/TaxanomyReviewAndPublishForm/Loadable';
import { Tab } from 'semantic-ui-react';

/* eslint-disable react/prefer-stateless-function */
class TaxanomyCreationForm extends React.PureComponent {
  render() {
    return (
      <Tab
        menu={{ secondary: true, pointing: true }}
        panes={[
          {
            menuItem: 'Basic Information',
            render: () => (
              <Tab.Pane>
                <TaxanomyBasicInformationForm />
              </Tab.Pane>
            ),
          },
          {
            menuItem: 'View Taxanomy Definition',
            render: () => (
              <Tab.Pane>
                <TaxanomyEditTaxanomyDefinitionForm />
              </Tab.Pane>
            ),
          },
          {
            menuItem: 'Review & Publish',
            render: () => (
              <Tab.Pane>
                <TaxanomyReviewAndPublishForm />
              </Tab.Pane>
            ),
          },
        ]}
      />
    );
  }
}

TaxanomyCreationForm.propTypes = {};

export default TaxanomyCreationForm;
