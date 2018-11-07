/**
 *
 * CreateTaxonomy
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
// import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import TaxanomyCreationForm from 'components/TaxanomyCreationForm';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
// import makeSelectCreateTaxonomy from './selectors';
import { Grid, Icon } from 'semantic-ui-react';
import { Container } from '../../styles/commons';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class CreateTaxonomy extends React.Component {
  render() {
    return (
      <Container>
        <Helmet>
          <title>CreateTaxonomy</title>
          <meta name="description" content="Description of CreateTaxonomy" />
        </Helmet>
        <Grid>
          <Grid.Row>
            <Grid.Column width={2} textAlign="center">
              <Icon size="large" color="black" name="arrow left" />
            </Grid.Column>
            <Grid.Column width={12}>
              <TaxanomyCreationForm />
            </Grid.Column>
            <Grid.Column width={2} />
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

CreateTaxonomy.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

// const mapStateToProps = createStructuredSelector({
//   createTaxonomy: makeSelectCreateTaxonomy(),
// });

// function mapDispatchToProps(dispatch) {
//   return {
//     // dispatch,
//   };
// }

// const withConnect = connect(
//   mapStateToProps,
//   mapDispatchToProps,
// );

const withReducer = injectReducer({ key: 'createTaxonomy', reducer });
const withSaga = injectSaga({ key: 'createTaxonomy', saga });

export default compose(
  withReducer,
  withSaga,
  // withConnect,
)(CreateTaxonomy);
