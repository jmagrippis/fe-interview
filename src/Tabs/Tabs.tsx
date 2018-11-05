import React from 'react';
import styled from 'styled-components';

import { Tab } from './Tab/Tab';
import { styles } from '../constants';

const Container = styled.nav`
  background-color: ${styles.colors.blue};
  margin-bottom: 20px;
  box-shadow: 0 2px 5px 5px rgba(0, 0, 0, 0.15);

  ul {
    display: flex;
  }
`;

export const Tabs = () => (
  <Container>
    <ul>
      <Tab path="/" label="Home" />
      <Tab path="/potential/" label="Potential" />
    </ul>
  </Container>
);
