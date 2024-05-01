import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { Logger } from '../../common/decorators';
import { NotFound } from "../../common/exceptions";
import { User } from "../../entities";

@Injectable()
export class UsersService {
  @Logger() private readonly logger: Logger;


  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) { }

  async findByEmail(email: string): Promise<User> {
    this.logger.log(`looking for User with email "${email}".`);

    const user = await this.usersRepository.findOne({ where: { email } });

    if (!user) throw new NotFound(`User with email: "${email}" does not exist`);

    return user;
  }

  async create(dto: User): Promise<User> {
    this.logger.log(`creating new User with email "${dto.email}".`);

    return this.usersRepository.create(dto);
  }

  async update(userId: number, updateUserDto: Partial<User>): Promise<User> {
    this.logger.log(`Updating User with id "${userId}".`);

    await this.usersRepository.update(userId, updateUserDto);

    return this.usersRepository.findOneBy({ id: userId });
  }

  async remove(userId: number): Promise<void> {
    this.logger.log(`Removing User with id "${userId}".`);

    await this.update(userId, { status: 'inactive' });
  }
}
