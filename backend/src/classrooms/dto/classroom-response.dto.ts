import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { ResponseTeacherDTO } from '../../teacher/dto/response-teacher.dto';

export class ClassroomResponseDTO {
  // todo id do mongo
  @IsString()
  @ApiProperty({ example: 'dec429f3-0dc6-4f8b-b9b3-a90eab52f44f' })
  id: string;

  @IsString()
  @ApiProperty({ example: 'ac30a8e4-e6c2-486b-aa11-e4bbe77f78d3' })
  teacherId: string;

  @IsString()
  @ApiProperty({ example: 'Sala 01' })
  name: string;

  @IsString()
  @ApiProperty({ example: 'eeqvge' })
  code: string;

  @IsString()
  @ApiProperty({ example: '1781651227' })
  createdAt: string;

  @IsString()
  @ApiProperty({ example: '1781651227' })
  updatedAt: string;

  @ApiProperty({ example: ResponseTeacherDTO })
  teacher: ResponseTeacherDTO;
}
