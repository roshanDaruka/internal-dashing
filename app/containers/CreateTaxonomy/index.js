/**
 *
 * CreateTaxonomy
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import TaxanomyCreationForm from 'components/TaxanomyCreationForm';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { Grid } from 'semantic-ui-react';
import { Map } from 'immutable';
import makeSelectCreateTaxonomy from './selectors';
import { Container, IconAsButton } from '../../styles/commons';
import reducer from './reducer';
import saga from './saga';
import {
  changeTaxanomyName,
  stepBack,
  stepChange,
  saveNodeName,
  saveChildNodeName,
} from './actions';

/* eslint-disable react/prefer-stateless-function */
export class CreateTaxonomy extends React.Component {
  render() {
    const { createTaxanomyData } = this.props;
    return (
      <Container>
        <Helmet>
          <title>CreateTaxonomy</title>
          <meta name="description" content="Description of CreateTaxonomy" />
        </Helmet>
        <Grid>
          <Grid.Row>
            <Grid.Column width={2} textAlign="center">
              <IconAsButton
                onClick={this.props.stepBack}
                size="large"
                color="black"
                name="arrow left"
              />
            </Grid.Column>
            <Grid.Column width={12}>
              <TaxanomyCreationForm
                changeTaxanomyName={this.props.changeTaxanomyName}
                createTaxanomyData={createTaxanomyData}
                stepChange={this.props.stepChange}
                saveNodeName={this.props.saveNodeName}
                saveChildNodeName={this.props.saveChildNodeName}
              />
            </Grid.Column>
            <Grid.Column width={2} />
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

CreateTaxonomy.propTypes = {
  changeTaxanomyName: PropTypes.func,
  createTaxanomyData: PropTypes.instanceOf(Map),
  stepBack: PropTypes.func,
  saveNodeName: PropTypes.func,
  stepChange: PropTypes.func,
  saveChildNodeName: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  createTaxanomyData: makeSelectCreateTaxonomy(),
});

function mapDispatchToProps(dispatch) {
  return {
    changeTaxanomyName: (e, d) => dispatch(changeTaxanomyName(e, d)),
    stepChange: index => dispatch(stepChange(index)),
    stepBack: () => dispatch(stepBack()),
    saveNodeName: (nodeType, name, index) =>
      dispatch(saveNodeName(nodeType, name, index)),
    saveChildNodeName: (nodeType, name, parentIndex, index) =>
      dispatch(saveChildNodeName(nodeType, name, parentIndex, index)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'createTaxonomy', reducer });
const withSaga = injectSaga({ key: 'createTaxonomy', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(CreateTaxonomy);
