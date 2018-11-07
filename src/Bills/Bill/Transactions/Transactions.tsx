import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import { Transaction } from '../../../types';
import { Loading } from '../../../Loading/Loading';

interface Props {
  billId: string;
}

const GET_BILL = gql`
  query Bill($id: String!) {
    bill(id: $id) {
      transactions {
        id
        amount
        date
      }
    }
  }
`;

const getFormattedDate = (date: string): string =>
  new Date(date).toLocaleDateString('en-GB');

export const Transactions = ({ billId }: Props) => (
  <Query query={GET_BILL} variables={{ id: billId }}>
    {({ loading, error, data }) => {
      if (loading) return <Loading />;
      if (error) return <div>Error :(</div>;

      return (
        <ul data-qa={`transactions-${billId}`}>
          {data.bill.transactions.map(({ id, amount, date }: Transaction) => (
            <li key={id}>
              £{amount} on {getFormattedDate(date)}
            </li>
          ))}
        </ul>
      );
    }}
  </Query>
);
