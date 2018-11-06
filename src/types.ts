export interface Transaction {
  id: number;
  amount: number;
  date: string;
}

export interface Bill {
  id: string;
  categoryId: number;
  iconUrl: string;
  isBill: boolean;
  name: string;
  transactions: Transaction[];
  transactionCount: number;
}
