import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
// import { AuthGuard } from './auth.guard';
import { CreateTeacherDto } from '../teacher/dto/create-teacher.dto';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto.email, signInDto.password);
  }

  // @UseGuards(AuthGuard)
  // @Get('profile')
  // getProfile(@Request() req) {
  //   return req.teacher;
  // }

  @Post('register')
  register(@Body() createTeacherDto: CreateTeacherDto) {
    return this.authService.register(createTeacherDto);
  }
}
