import {
  Controller,
  Get,
  Param,
  Post,
  Query,
  Redirect,
  Req,
  Body,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';
import { Request, Response } from 'express';

@Controller('user')
export class UserController {
  @Get('test')
  userList(@Req() req: Request, @Query() params: any): string[] {
    console.log(params, req);
    return ['AAA', 'BBB'];
  }
  @Get('all')
  @Redirect('http://www.qq.com')
  all() {
    return 'ok';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log(id); // user/1 -> 1
    return 'AAA';
  }

  @Post('create')
  create(@Body() user: CreateUserDto, @Res() res: Response) {
    console.log(user);
    // return 'ok';
    res.status(HttpStatus.OK).json({ msg: 'ok', code: 200 });
  }
}
