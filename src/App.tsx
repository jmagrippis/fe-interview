import React, { PureComponent, Fragment } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import DocumentTitle from 'react-document-title';

import { Tabs } from './Tabs/Tabs';
import { Home } from './Home/Home';
import { Potential } from './Potential/Potential';

class App extends PureComponent {
  render() {
    return (
      <DocumentTitle title="Cleo: Bills">
        <BrowserRouter>
          <Fragment>
            <Tabs />
            <Route path="/" exact component={Home} />
            <Route path="/potential/" component={Potential} />
          </Fragment>
        </BrowserRouter>
      </DocumentTitle>
    );
  }
}

export default App;
