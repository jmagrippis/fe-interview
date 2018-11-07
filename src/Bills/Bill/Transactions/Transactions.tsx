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
      }
    }
  }
`;

export const Transactions = ({ billId }: Props) => (
  <Query query={GET_BILL} variables={{ id: billId }}>
    {({ loading, error, data }) => {
      if (loading) return <Loading />;
      if (error) return <div>Error :(</div>;

      return (
        <ul data-qa={`transactions-${billId}`}>
          {data.bill.transactions.map(({ id }: Transaction) => (
            <li key={id}>I am a transaction</li>
          ))}
        </ul>
      );
    }}
  </Query>
);