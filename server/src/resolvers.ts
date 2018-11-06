import { db } from './db';

export const resolvers = {
  Query: {
    bills: () =>
      db
        .get('bills')
        .map(bill => ({
          ...bill,
          transactionCount: bill.transactions.length
        }))
        .value()
  }
};
