import { Controller, Get, Post, Query } from '@nestjs/common';
import { ApiQuery } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  // q4
  // @Post()
  // createUser(): string{
    
  // }

  // question 2
  @Get()
  @ApiQuery({ name: 'postcode',type: String })
  getPostcode(@Query() query: { postcode: string }): string{
    // return the state name
    return this.appService.getPostcode(query.postcode);
  }
}
