import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const userPassword = await bcrypt.hash(createUserDto.userPassword, 10);
    return this.usersRepository.save(
      this.usersRepository.create({
        ...createUserDto,
        userPassword,
      }),
    );
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  // async findById(id: number): Promise<User> {
  //   return await this.usersRepository.findOne({ where:{
  //     userId: id
  //   } });
  // }

  findByEmail(userEmail: string): Promise<User | null> {
    return this.usersRepository.findOne({ where: { userEmail } });
  }
}
