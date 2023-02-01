import { Controller, Get } from '@nestjs/common';
import { ApiExcludeController } from '@nestjs/swagger';

@ApiExcludeController()
@Controller('')
export class AppController {
  @Get()
  sendResponse() {
    return 'Server is up';
  }
  // constructor(private readonly appService: AppService) {}
  // @Get()
  // dumpDataIntoDb(): Promise<string> {
  //   return this.appService.dumpDataIntoDb();
  // }
}
