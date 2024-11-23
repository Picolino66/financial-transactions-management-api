import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { CreateAccountDto } from './create-account.dto';

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Post()
  createAccount(@Body() createAccountDto: CreateAccountDto) {
    return this.accountsService.createAccount(createAccountDto.name);
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
