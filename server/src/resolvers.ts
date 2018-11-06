import { db } from './db';

export const resolvers = {
  Query: {
    bills: () => db.get('bills').value()
  }
};
