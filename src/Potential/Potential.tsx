import React from 'react';
import memoize from 'memoize-one';

import { Bills } from '../Bills/Bills';
import { Bill as BillType } from '../types';
import DocumentTitle from 'react-document-title';

const getPotentialBills = memoize(
  (bills: BillType[]): BillType[] => bills.filter(({ isBill }) => !isBill)
);

export const Potential = () => (
  <DocumentTitle title="Cleo: Potential Bills">
    <Bills filter={getPotentialBills} />
  </DocumentTitle>
);
