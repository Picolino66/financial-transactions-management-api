import { IsNotEmpty, IsString } from 'class-validator';

export class CreateAccountDto {
  @IsNotEmpty({ message: 'O nome da conta não pode estar vazio.' })
  @IsString({ message: 'O nome da conta deve ser uma string.' })
  name: string;
}
