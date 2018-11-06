import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import memoize from 'memoize-one';

import { Loading } from '../Loading/Loading';
import { Bill } from '../types';

const GET_BILLS = gql`
  {
    bills {
      id
      name
      isBill
    }
  }
`;

const getActiveBills = memoize(
  (bills: Bill[]): Bill[] => bills.filter(({ isBill }) => isBill)
);

export const Home = () => (
  <Query query={GET_BILLS}>
    {({ loading, error, data }) => {
      if (loading) return <Loading />;
      if (error) return <div>Error :(</div>;

      return (
        <ul>
          {getActiveBills(data.bills).map(({ id, name }: Bill) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      );
    }}
  </Query>
);
