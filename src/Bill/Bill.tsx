import React, { PureComponent } from 'react';

import { Bill as BillType } from '../types';
import { Transactions } from './Transactions/Transactions';

const getTransactionCountCopy = (count: number) =>
  `${count} transaction${count > 1 && 's'}`;

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
    const { id, name, transactionCount } = this.props;
    const { isExpanded } = this.state;

    return (
      <li onClick={this.toggleExpanded}>
        <div>{name}</div>
        <div>{getTransactionCountCopy(transactionCount)}</div>
        {isExpanded && <Transactions billId={id} />}
      </li>
    );
  }
}
