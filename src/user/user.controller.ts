import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UserController {
  @Get()
  getUsers(): string[] {
    return ['user1', 'user2'];
  }
}
