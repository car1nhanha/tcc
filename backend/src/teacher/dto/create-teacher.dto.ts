import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateTeacherDto {
  @ApiProperty({
    description: 'nome do professor',
    example: 'teacher da silva',
  })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'email do professor',
    example: 'teacher@email.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'senha',
    example: '123456',
  })
  @IsNotEmpty()
  password: string;
}
