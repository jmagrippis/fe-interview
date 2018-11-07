import gql from 'graphql-tag';

export const GET_BILLS = gql`
  {
    bills {
      id
      name
      isBill
      transactionCount
    }
  }
`;
