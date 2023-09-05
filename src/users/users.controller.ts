import { Controller, Get, Post, Body, Param } from '@nestjs/common';

import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/create')
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get('/all')
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':userEmail')
  findUserbyEmail(@Param('userEmail') userEmail: string) {
    const user = this.usersService.findByEmail(userEmail);
    return user;
  }

  // @Post(':id')
  // findOne(@Param('id') id: number) {
  //   return this.usersService.findById(+id);
  // }
}
