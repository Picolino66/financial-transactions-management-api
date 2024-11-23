import { TransactionsService } from './transactions.service';
import { AccountsService } from '../accounts/accounts.service';

describe('TransactionsService', () => {
  let transactionsService: TransactionsService;
  let accountsService: AccountsService;

  beforeEach(() => {
    accountsService = new AccountsService();
    transactionsService = new TransactionsService(accountsService);
  });

  it('deve criar uma transação de entrada e atualizar o saldo', () => {
    const account = accountsService.createAccount('Conta Teste');
    const transaction = transactionsService.createTransaction(
      account.id,
      'entrada',
      50,
    );
    expect(transaction.type).toBe('entrada');
    expect(transaction.amount).toBe(50);
    expect(accountsService.getAccountBalance(account.id)).toBe(50);
  });

  it('deve criar uma transação de saída e atualizar o saldo', () => {
    const account = accountsService.createAccount('Conta Teste');
    accountsService.updateBalance(account.id, 100);
    const transaction = transactionsService.createTransaction(
      account.id,
      'saida',
      30,
    );
    expect(transaction.type).toBe('saida');
    expect(transaction.amount).toBe(30);
    expect(accountsService.getAccountBalance(account.id)).toBe(70);
  });

  it('deve lançar erro ao tentar criar uma transação que resulta em saldo negativo', () => {
    const account = accountsService.createAccount('Conta Teste');
    expect(() =>
      transactionsService.createTransaction(account.id, 'saida', 50),
    ).toThrowError('Saldo insuficiente');
  });
});
