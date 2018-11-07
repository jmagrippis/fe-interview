import React, { PureComponent } from 'react';
import styled from 'styled-components';

import { Bill as BillType } from '../../types';
import { Transactions } from './Transactions/Transactions';
import { ToggleBill } from './ToggleBill/ToggleBill';
import { ReactComponent as QuestionMark } from './questionMark.svg';

const getTransactionCountCopy = (count: number) =>
  `${count} transaction${count > 1 && 's'}`;

const Container = styled.li`
  background-color: #93b7be;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 15px;
  box-shadow: 0 2px 5px 5px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Icon = styled.div`
  max-width: 48px;
  margin-right: 10px;

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;

const Info = styled.div`
  flex: 1;
`;

interface State {
  isExpanded: boolean;
}

export class Bill extends PureComponent<BillType, State> {
  state = {
    isExpanded: false
  };

  toggleExpanded = () => {
    this.setState(({ isExpanded }) => ({ isExpanded: !isExpanded }));
  };

  render() {
    const { id, name, transactionCount, isBill, iconUrl } = this.props;
    const { isExpanded } = this.state;

    return (
      <Container onClick={this.toggleExpanded}>
        <Icon>
          {iconUrl ? (
            <img src={iconUrl} alt="bill icon" />
          ) : (
            <QuestionMark width="100%" fill="rgba(0,0,0,0.5)" />
          )}
        </Icon>
        <Info>
          <div>{name}</div>
          <div>{getTransactionCountCopy(transactionCount)}</div>
          {isExpanded && <Transactions billId={id} />}
        </Info>
        <ToggleBill id={id} isBill={isBill} />
      </Container>
    );
  }
}
