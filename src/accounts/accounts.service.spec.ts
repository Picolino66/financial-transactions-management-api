import { AccountsService } from './accounts.service';

describe('AccountsService', () => {
  let accountsService: AccountsService;

  beforeEach(() => {
    accountsService = new AccountsService();
  });

  it('deve criar uma nova conta com saldo inicial 0', () => {
    const account = accountsService.createAccount('Conta Teste');
    expect(account.name).toBe('Conta Teste');
    expect(account.balance).toBe(0);
  });

  it('deve retornar o saldo da conta existente', () => {
    const account = accountsService.createAccount('Conta Teste');
    const balance = accountsService.getAccountBalance(account.id);
    expect(balance).toBe(0);
  });

  it('deve lançar erro ao tentar acessar saldo de conta inexistente', () => {
    expect(() => accountsService.getAccountBalance('id-invalido')).toThrowError(
      'Conta não encontrada',
    );
  });

  it('deve atualizar o saldo da conta', () => {
    const account = accountsService.createAccount('Conta Teste');
    accountsService.updateBalance(account.id, 100);
    expect(accountsService.getAccountBalance(account.id)).toBe(100);
  });
});
