import { Controller, Get } from '@nestjs/common';

@Controller('test')
export class TestController {
  @Get()
  getAll() {
    return { status: 'hello world' };
  }
}
