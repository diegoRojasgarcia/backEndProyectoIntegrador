import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from './../users/entities/user.entity';
import { loginUserInput } from './../users/dto/login-user-input';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  login(user: User): { access_token: string } {
    const payload = {
      email: user.userEmail,
      password: user.userPassword,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async validate(userEmail: string, userPassword: string): Promise<any> {
    const user = await this.usersService.findByEmail(userEmail);
    if (user) {
      const valid = await bcrypt.compare(userPassword, user.userPassword);
      if (valid) {
        const { userPassword, ...result } = user;
        return result;
      }
    }
    return null;
  }

  async singup(loginUserInput: loginUserInput) {
    const user = await this.usersService.findByEmail(loginUserInput.userEmail);
    if (user) {
      throw new Error('User already exist!');
    }
  }
}
