import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Transaction {
    id: Int!
    amount: Float!
    date: String!
  }

  type Bill {
    id: ID!
    categoryId: Int!
    isBill: Boolean!
    name: String!
    transactions: [Transaction]!
    transactionCount: Int!
    iconUrl: String
  }

  type Query {
    bills: [Bill]!
    bill(id: String!): Bill
  }

  type Mutation {
    updateBill(id: String!, isBill: Boolean): Bill
  }
`;
