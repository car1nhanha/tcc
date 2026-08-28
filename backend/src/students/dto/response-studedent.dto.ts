import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { ClassroomResponseDTO } from '../../classrooms/dto/classroom-response.dto';

export class ResponseStudentDTO {
  @IsString()
  @ApiProperty({ example: 'dec429f3-0dc6-4f8b-b9b3-a90eab52f44f' })
  id: string;

  @IsString()
  @ApiProperty({ example: 'ac30a8e4-e6c2-486b-aa11-e4bbe77f78d3' })
  classroomId: string;

  @IsString()
  @ApiProperty({ example: 'aluno' })
  name: string;

  @IsString()
  @ApiProperty({ example: 'z08ct9' })
  accessCode: string;

  // todo acho que o padrão é snake_case
  @IsString()
  @ApiProperty({ example: '1781651227' })
  createdAt: string;

  @IsString()
  @ApiProperty({ example: '1781651227' })
  updatedAt: string;

  @ApiProperty({ example: ClassroomResponseDTO })
  classroom: ClassroomResponseDTO;
}
