import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class SignInDto {
  @ApiProperty({
    description: 'email do professor',
    example: 'teacher@email.com',
  })
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'senha',
    example: '123456',
  })
  @IsNotEmpty()
  password: string;
}
