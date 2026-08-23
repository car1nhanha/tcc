import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { CreateTeacherDto } from '../teacher/dto/create-teacher.dto';
import { Teacher } from '../teacher/schema/teacher.schema';
import { TeacherService } from '../teacher/teacher.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly teacherService: TeacherService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, password: string) {
    console.log(process.env.JWT_SECRET);
    const teacher = await this.teacherService.findOne(email);

    if (!teacher) throw new NotFoundException('email não encontrado');

    const isAuthenticated = await this.comparePassword(
      password,
      teacher.password,
    );

    if (!isAuthenticated) throw new UnauthorizedException();

    const payload = { sub: teacher.id, email: teacher.email };
    console.log({ payload });
    delete (teacher as Partial<Teacher>).password;
    console.log('passou aqui');

    const token = {
      access_token: await this.jwtService.signAsync(payload, {
        secret: process.env.JWT_SECRET,
      }),
    };

    return token;
  }

  async register(createTeacherDto: CreateTeacherDto) {
    const hashedPassword = await bcrypt.hash(createTeacherDto.password, 10);

    // todo - verificar se já há usuário registrado
    // todo - verificar se a senha é forte

    const newTeacher = await this.teacherService.create({
      ...createTeacherDto,
      password: hashedPassword,
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...rest } = newTeacher;

    return rest;
  }

  async comparePassword(password: string, hash: string): Promise<boolean> {
    const result = await bcrypt.compare(password, hash);
    return result;
  }
}
