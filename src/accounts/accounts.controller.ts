import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { AccountsService } from './accounts.service';

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Post()
  createAccount(@Body('name') name: string) {
    return this.accountsService.createAccount(name);
  }

  @Get(':id/balance')
  getBalance(@Param('id') id: string) {
    return { balance: this.accountsService.getAccountBalance(id) };
  }

  @Get()
  getAllAccounts() {
    return this.accountsService.getAllAccounts();
  }
}
