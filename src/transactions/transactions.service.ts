import { Injectable } from '@nestjs/common';
import { Transaction } from './transaction.entity';
import { AccountsService } from '../accounts/accounts.service';
import { v4 as uuid } from 'uuid';

@Injectable()
export class TransactionsService {
  private transactions: Transaction[] = [];

  constructor(private readonly accountsService: AccountsService) {}

  createTransaction(
    accountId: string,
    type: 'entrada' | 'saida',
    amount: number,
  ): Transaction {
    if (type === 'saida') {
      const balance = this.accountsService.getAccountBalance(accountId);
      if (balance < amount) {
        throw new Error('Saldo insuficiente');
      }
      this.accountsService.updateBalance(accountId, -amount);
    } else {
      this.accountsService.updateBalance(accountId, amount);
    }

    const transaction: Transaction = { id: uuid(), accountId, type, amount };
    this.transactions.push(transaction);
    return transaction;
  }
}
