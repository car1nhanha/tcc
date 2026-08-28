import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length } from 'class-validator';

export class AccessStudentDto {
  @ApiProperty({ example: '123456' })
  @IsString()
  @Length(6, 6)
  accessCode: string;
}
