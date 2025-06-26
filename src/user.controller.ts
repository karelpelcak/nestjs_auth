import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(
    @Body() userData: Partial<User>,
  ): Promise<Omit<User, 'password'>> {
    const user = await this.userService.create(userData);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...result } = user;
    return result;
  }

  @Get(':id')
  async getUser(
    @Param('id') id: number,
  ): Promise<Omit<User, 'password'> | null> {
    const user = await this.userService.findById(id);
    if (!user) return null;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...result } = user;
    return result;
  }
}
