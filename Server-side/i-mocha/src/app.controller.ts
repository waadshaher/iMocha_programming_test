import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiQuery } from '@nestjs/swagger';
import { Prisma, User } from '@prisma/client';
import { differenceInYears, isValid, parse, sub } from 'date-fns';
import { SocketAddress } from 'net';
import { queryDto } from './app.queryDTO';
import { AppService } from './app.service';
import { UserDto } from './app.userDTO';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // question 2
  @Get('getState')
  @ApiQuery({ name: 'postcode', type: String })
  getPostcode(@Query() query: { postcode: string }): string {
    // return the state name
    return this.appService.getPostcode(query.postcode);
  }

  // question 3
  @Post('createUser')
  postCreateNewUser(@Body() user: UserDto): Promise<User> {
    // return JSON.stringify(user);
    user.dob = new Date(user.dob);
    return this.appService.createUser(user);
  }

  // question 6
  @Post('queryUser')
  async postQueryUser(@Body() query: queryDto): Promise<User[]> {
    var endOfYear = sub(new Date(), { years: query.age });
    let beginOfYear = new Date(endOfYear);

    beginOfYear.setFullYear(endOfYear.getFullYear() - 1);
    console.log(beginOfYear, endOfYear, beginOfYear);

    const isValidDate = isValid(beginOfYear);
    var whereQuery: Prisma.UserWhereInput = {
      name: query.name,
      address: query.address,
      postcode: query.postcode,
      state: query.state,
    };

    if (isValidDate) {
      var myDOB: Prisma.DateTimeFilter = {
        gte: beginOfYear,
        lte: endOfYear,
      };
      whereQuery.dob = myDOB;
    }

    return await this.appService.users({
      where: {
        AND: whereQuery,
      },
    });
  }
}
