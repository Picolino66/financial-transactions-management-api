import { IsNotEmpty, IsUUID, IsNumber, IsIn, Min } from 'class-validator';

export class CreateTransactionDto {
  @IsUUID(undefined, { message: 'O ID da conta deve ser um UUID.' })
  accountId: string;

  @IsNotEmpty({ message: 'O tipo de transação não pode estar vazio.' })
  @IsIn(['entrada', 'saida'], {
    message: 'O tipo de transação deve ser entrada ou saida.',
  })
  type: 'entrada' | 'saida';

  @IsNumber({}, { message: 'O valor da transação deve ser um número.' })
  @Min(0.01, {
    message: 'O valor da transação deve ser maior ou igual a 0.01.',
  })
  amount: number;
}
