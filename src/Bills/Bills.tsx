import React from 'react';
import { Query } from 'react-apollo';

import { Loading } from '../Loading/Loading';
import { Bill } from './Bill/Bill';
import { Bill as BillType } from '../types';
import { GET_BILLS } from '../gql';

interface Props {
  filter: (bills: BillType[]) => BillType[];
}

export const Bills = ({ filter }: Props) => (
  <Query query={GET_BILLS}>
    {({ loading, error, data }) => {
      if (loading) return <Loading />;
      if (error) return <div>Error :(</div>;

      return (
        <ul>
          {filter(data.bills).map((bill: BillType) => (
            <Bill key={bill.id} {...bill} />
          ))}
        </ul>
      );
    }}
  </Query>
);
