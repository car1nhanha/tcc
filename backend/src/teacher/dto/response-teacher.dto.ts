import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class ResponseTeacherDTO {
  // todo trocar esse id pelo id do mongodb
  @IsString()
  @ApiProperty({ example: 'dec429f3-0dc6-4f8b-b9b3-a90eab52f44f' })
  id: string;

  @IsString()
  @ApiProperty({ example: 'professor' })
  name: string;

  @IsString()
  @ApiProperty({ example: 'professor@gmail.com' })
  email: string;

  @IsString()
  @ApiProperty({ example: '1781651227' })
  createdAt: string;

  @IsString()
  @ApiProperty({ example: '1781651227' })
  updatedAt: string;
}
