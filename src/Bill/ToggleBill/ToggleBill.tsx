import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

const UPDATE_BILL = gql`
  mutation UpdateBill($id: String!, $isBill: Boolean!) {
    updateBill(id: $id, isBill: $isBill) {
      id
      isBill
    }
  }
`;

interface Props {
  id: string;
  isBill: boolean;
}

export const ToggleBill = ({ id, isBill }: Props) => (
  <Mutation mutation={UPDATE_BILL}>
    {updateBill => (
      <button
        onClick={event => {
          event.preventDefault();
          event.stopPropagation();
          updateBill({ variables: { id, isBill: !isBill } });
        }}
      >
        X
      </button>
    )}
  </Mutation>
);
