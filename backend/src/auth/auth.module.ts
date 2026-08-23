import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TeacherModule } from '../teacher/teacher.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1d' },
    }),
    TeacherModule,
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
