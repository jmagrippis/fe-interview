import React from 'react';
import styled from 'styled-components';

import loader from '../assets/loader.gif';

const Container = styled.img`
  max-width: 100%;
`;

export const Loading = () => (
  <Container src={loader} alt="Loading..." title="Loading..." />
);
