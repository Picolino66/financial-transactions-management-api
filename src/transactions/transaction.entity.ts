export class Transaction {
  id: string;
  accountId: string;
  type: 'entrada' | 'saida';
  amount: number;
}
