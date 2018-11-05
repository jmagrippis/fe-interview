import React, { PureComponent } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';

import { styles } from '../../constants';

const Container = styled<{ isActive: boolean }, 'a'>('a')`
  color: #ffffff;
  text-decoration: none;
  padding: 20px;
  flex: 1;
  text-align: center;
  border-bottom: 5px solid ${styles.colors.blue};
  transition: border-color 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);

  ${({ isActive }) => isActive && `border-color: ${styles.colors.yellow}`};
`;

interface Props extends RouteComponentProps {
  path: string;
  label: string;
}

export class DumbTab extends PureComponent<Props> {
  onClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const { path, history } = this.props;
    history.push(path);
  };

  render() {
    const { path, label, history } = this.props;

    return (
      <Container
        href={path}
        onClick={this.onClick}
        isActive={path === history.location.pathname}
      >
        {label}
      </Container>
    );
  }
}

export const Tab = withRouter(DumbTab);
