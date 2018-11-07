/**
 *
 * TaxanomyEditTaxanomyDefinitionForm
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import TaxanomyDefinitionCard from 'components/TaxanomyDefinitionCard';
import { Grid } from 'semantic-ui-react';
import CatalogPreview from 'components/CatalogPreview';
/* eslint-disable react/prefer-stateless-function */
class TaxanomyEditTaxanomyDefinitionForm extends React.PureComponent {
  render() {
    return (
      <Grid>
        <Grid.Column width={10}>
          <TaxanomyDefinitionCard />
          <TaxanomyDefinitionCard />
          <TaxanomyDefinitionCard />
        </Grid.Column>
        <Grid.Column width={6}>
          <CatalogPreview />
        </Grid.Column>
      </Grid>
    );
  }
}

TaxanomyEditTaxanomyDefinitionForm.propTypes = {};

export default TaxanomyEditTaxanomyDefinitionForm;
