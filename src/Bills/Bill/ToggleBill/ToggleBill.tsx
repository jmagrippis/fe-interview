import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import styled from 'styled-components';

import { ReactComponent as Archive } from './archive.svg';
import { ReactComponent as Unarchive } from './unarchive.svg';

const UPDATE_BILL = gql`
  mutation UpdateBill($id: String!, $isBill: Boolean!) {
    updateBill(id: $id, isBill: $isBill) {
      id
      isBill
    }
  }
`;

const Button = styled.button`
  cursor: pointer;
  svg {
    fill: #ee4266;
    width: 32px;
    filter: drop-shadow(0 2px 10px rgba(0, 0, 0, 0.3));
  }
`;

interface Props {
  id: string;
  isBill: boolean;
}

export const ToggleBill = ({ id, isBill }: Props) => (
  <Mutation mutation={UPDATE_BILL}>
    {updateBill => (
      <Button
        onClick={event => {
          event.preventDefault();
          event.stopPropagation();
          updateBill({ variables: { id, isBill: !isBill } });
        }}
      >
        {isBill ? <Archive /> : <Unarchive />}
      </Button>
    )}
  </Mutation>
);
