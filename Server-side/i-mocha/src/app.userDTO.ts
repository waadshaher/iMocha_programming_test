import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  dob: Date;

  @ApiProperty()
  address: string;

  @ApiProperty()
  postcode: string;

  @ApiProperty()
  state: string;
}
