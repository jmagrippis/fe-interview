import { db } from './db';

const bills = () =>
  db
    .get('bills')
    .map(bill => ({
      ...bill,
      transactionCount: bill.transactions.length
    }))
    .value();

const bill = (_, { id }) => {
  const b = db
    .get('bills')
    .find(['id', id])
    .value();

  return { ...b, transactionCount: b.transactions.length };
};

const updateBill = (_, { id, ...update }) =>
  db
    .get('bills')
    .find(['id', id])
    .assign(update)
    .write();

export const resolvers = {
  Query: {
    bills,
    bill
  },
  Mutation: {
    updateBill
  }
};
