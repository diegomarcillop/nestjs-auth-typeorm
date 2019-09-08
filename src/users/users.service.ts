import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { users } from './users.entity';
import {  Repository, getRepository } from 'typeorm';
export type User = any;

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(users)
    private readonly userRepositorio: Repository<users>,
  ) { 
  }

  async findOne(name: string): Promise<User | undefined> {
    const usuario = await this.userRepositorio.
               createQueryBuilder(users.name).
               where(`${users.name}.username= :usersname`, {usersname:name}).
               getOne();
           return usuario;
  }
}