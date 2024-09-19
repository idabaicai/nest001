import { Controller, Get, Query, Req } from '@nestjs/common';
import { Request } from 'express';
// import { Response } from '@types/express'

@Controller('user')
export class UserController {
  @Get('test')
  userList(@Req() req: Request, @Query() params: any): string[] {
    console.log(params, req);
    return ['AAA', 'BBB'];
  }
}
