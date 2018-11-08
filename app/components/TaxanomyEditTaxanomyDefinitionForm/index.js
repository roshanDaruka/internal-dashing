/**
 *
 * TaxanomyEditTaxanomyDefinitionForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import TaxanomyDefinitionCard from 'components/TaxanomyDefinitionCard';
import { Grid } from 'semantic-ui-react';
import CatalogPreview from 'components/CatalogPreview';
/* eslint-disable react/prefer-stateless-function */
class TaxanomyEditTaxanomyDefinitionForm extends React.PureComponent {
  render() {
    const { taxanomyCreationForm } = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          {taxanomyCreationForm.nodes &&
            taxanomyCreationForm.nodes.map((node, index) => (
              <TaxanomyDefinitionCard
                node={node}
                key={node.nodeName}
                index={index}
                saveNodeName={this.props.saveNodeName}
              />
            ))}
          <TaxanomyDefinitionCard
            saveNodeName={this.props.saveNodeName}
            node={{}}
            index={null}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          <CatalogPreview />
        </Grid.Column>
      </Grid>
    );
  }
}

TaxanomyEditTaxanomyDefinitionForm.propTypes = {
  taxanomyCreationForm: PropTypes.object,
  saveNodeName: PropTypes.func,
};

export default TaxanomyEditTaxanomyDefinitionForm;
