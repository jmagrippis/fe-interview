import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import { Transaction } from '../../../types';
import { Loading } from '../../../Loading/Loading';
import styled from 'styled-components';

const Container = styled.ul`
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid black;
`;
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

interface Props {
  billId: string;
}
export const Transactions = ({ billId }: Props) => (
  <Query query={GET_BILL} variables={{ id: billId }}>
    {({ loading, error, data }) => {
      if (loading) return <Loading />;
      if (error) return <div>Error :(</div>;

      return (
        <Container data-qa={`transactions-${billId}`}>
          {data.bill.transactions.map(({ id, amount, date }: Transaction) => (
            <li key={id}>
              £{amount} on {getFormattedDate(date)}
            </li>
          ))}
        </Container>
      );
    }}
  </Query>
);
