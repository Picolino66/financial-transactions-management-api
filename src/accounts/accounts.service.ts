import { Injectable } from '@nestjs/common';
import { Account } from './account.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class AccountsService {
  private accounts: Map<string, Account> = new Map();

  createAccount(name: string): Account {
    const account: Account = { id: uuid(), name, balance: 0 };
    this.accounts.set(account.id, account);
    return account;
  }

  getAccountBalance(id: string): number {
    const account = this.accounts.get(id);
    if (!account) {
      throw new Error('Conta não encontrada');
    }
    return account.balance;
  }

  getAllAccounts(): Account[] {
    return Array.from(this.accounts.values());
  }

  updateBalance(id: string, amount: number): void {
    const account = this.accounts.get(id);
    if (!account) {
      throw new Error('Conta não encontrada');
    }
    account.balance += amount;
    this.accounts.set(id, account);
  }
}
