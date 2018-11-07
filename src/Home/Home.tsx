import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import memoize from 'memoize-one';

import { Loading } from '../Loading/Loading';
import { Bill } from '../Bill/Bill';
import { Bill as BillType } from '../types';
import { GET_BILLS } from '../gql';

const getActiveBills = memoize(
  (bills: BillType[]): BillType[] => bills.filter(({ isBill }) => isBill)
);

export const Home = () => (
  <Query query={GET_BILLS}>
    {({ loading, error, data }) => {
      if (loading) return <Loading />;
      if (error) return <div>Error :(</div>;

      return (
        <ul>
          {getActiveBills(data.bills).map((bill: BillType) => (
            <Bill key={bill.id} {...bill} />
          ))}
        </ul>
      );
    }}
  </Query>
);
