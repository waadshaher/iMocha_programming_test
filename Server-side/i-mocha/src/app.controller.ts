import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiQuery } from '@nestjs/swagger';
import { User } from '@prisma/client';
import { AppService } from './app.service';
import { UserDto } from './app.userDTO';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // question 2
  @Get('getState')
  @ApiQuery({ name: 'postcode',type: String })
  getPostcode(@Query() query: { postcode: string }): string{
    // return the state name
    return this.appService.getPostcode(query.postcode);
  }

  // question 3
  @Post('createUser')
  postCreateNewUser(@Body() user: UserDto): Promise<User>{
    // return JSON.stringify(user);
    user.dob = new Date(user.dob);
    return this.appService.createUser(user);
  }
}
