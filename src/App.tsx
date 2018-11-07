import React, { PureComponent, Fragment } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import DocumentTitle from 'react-document-title';
import { ApolloProvider } from 'react-apollo';
import styled from 'styled-components';

import { Tabs } from './Tabs/Tabs';
import { Home } from './Home/Home';
import { Potential } from './Potential/Potential';
import { apolloClient } from './apolloClient';

const Body = styled.main`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  > * {
    max-width: 600px;
    width: 100%;
  }
`;

class App extends PureComponent {
  render() {
    return (
      <DocumentTitle title="Cleo: Bills">
        <ApolloProvider client={apolloClient}>
          <BrowserRouter>
            <Fragment>
              <Tabs />
              <Body>
                <Route path="/" exact component={Home} />
                <Route path="/potential/" component={Potential} />
              </Body>
            </Fragment>
          </BrowserRouter>
        </ApolloProvider>
      </DocumentTitle>
    );
  }
}

export default App;
