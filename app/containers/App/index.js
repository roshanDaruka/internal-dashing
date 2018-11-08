/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
// import HomePage from 'containers/HomePage/Loadable';
// import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import CreateTaxonomy from 'containers/CreateTaxonomy/Loadable';
// import Header from 'components/Header';
// import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  margin: 0 auto;
  min-height: 100%;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet titleTemplate="Create.Taxonomy" defaultTitle="Create.Taxonomy">
        <meta name="description" content="Creating Taxonomy Application" />
      </Helmet>
      {/* <Header /> */}
      <Switch>
        {/* <Route exact path="/" component={HomePage} /> */}
        <Route exact path="/create-taxonomy" component={CreateTaxonomy} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      {/* <Footer /> */}
      <GlobalStyle />
    </AppWrapper>
  );
}
