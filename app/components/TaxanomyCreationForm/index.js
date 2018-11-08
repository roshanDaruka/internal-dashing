/**
 *
 * TaxanomyCreationForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
// import Tabs from 'components/Tabs';
// import TaxanomyHeader from 'components/TaxanomyHeader';
import { Map } from 'immutable';
import TaxanomyBasicInformationForm from 'components/TaxanomyBasicInformationForm/Loadable';
import TaxanomyEditTaxanomyDefinitionForm from 'components/TaxanomyEditTaxanomyDefinitionForm/Loadable';
import TaxanomyReviewAndPublishForm from 'components/TaxanomyReviewAndPublishForm/Loadable';
import { Tab } from 'semantic-ui-react';

/* eslint-disable react/prefer-stateless-function */
class TaxanomyCreationForm extends React.PureComponent {
  render() {
    const { createTaxanomyData } = this.props;
    return (
      <Tab
        onTabChange={(e, data) => this.props.stepChange(data.activeIndex)}
        menu={{ secondary: true, pointing: true }}
        activeIndex={createTaxanomyData.step}
        panes={[
          {
            menuItem: 'Basic Information',
            render: () => (
              <Tab.Pane>
                <TaxanomyBasicInformationForm
                  changeTaxanomyName={this.props.changeTaxanomyName}
                  initialName={
                    createTaxanomyData.taxanomyCreationForm.displayName
                  }
                />
              </Tab.Pane>
            ),
          },
          {
            menuItem: 'View Taxanomy Definition',
            render: () => (
              <Tab.Pane>
                <TaxanomyEditTaxanomyDefinitionForm
                  taxanomyCreationForm={createTaxanomyData.taxanomyCreationForm}
                  saveChildNodeName={this.props.saveChildNodeName}
                  saveNodeName={this.props.saveNodeName}
                />
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

TaxanomyCreationForm.propTypes = {
  changeTaxanomyName: PropTypes.func,
  stepChange: PropTypes.func,
  createTaxanomyData: PropTypes.instanceOf(Map),
  saveChildNodeName: PropTypes.func,
  saveNodeName: PropTypes.func,
};

export default TaxanomyCreationForm;
