import React, { PureComponent } from 'react';

import welcomeIcon from './assets/welcome.jpg';

class App extends PureComponent {
  render() {
    return <img src={welcomeIcon} alt="Welcome!" />;
  }
}

export default App;
