import { Controller, Post, Body } from '@nestjs/common';
import { TransactionsService } from './transactions.service';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post()
  createTransaction(
    @Body('accountId') accountId: string,
    @Body('type') type: 'entrada' | 'saida',
    @Body('amount') amount: number,
  ) {
    return this.transactionsService.createTransaction(accountId, type, amount);
  }
}
