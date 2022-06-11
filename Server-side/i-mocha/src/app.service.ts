import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  // question 2
  getPostcode(postcode: string): string {
    // return the state name
    switch (postcode) {
      case '35000':
        return 'Perak';
      case '50000':
        return 'Kuala Lumpur';
      case '80000':
        return 'Johor';
      default:
        return 'NA';
    }
  }
}
