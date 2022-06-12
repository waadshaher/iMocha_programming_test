import { ApiProperty } from '@nestjs/swagger';

export class queryDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  age: number;

  @ApiProperty()
  address: string;

  @ApiProperty()
  postcode: string;

  @ApiProperty()
  state: string;
}
