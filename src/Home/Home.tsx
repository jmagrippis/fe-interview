import React from 'react';
import memoize from 'memoize-one';

import { Bills } from '../Bills/Bills';
import { Bill } from '../types';

const getActiveBills = memoize(
  (bills: Bill[]): Bill[] => bills.filter(({ isBill }) => isBill)
);

export const Home = () => <Bills filter={getActiveBills} />;
