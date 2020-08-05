import { Controller,Get,Post,Req } from '@nestjs/common';
import { PostHelloService } from './post-hello.service'
import { Request } from 'express';

@Controller('post-hello')
export class PostHelloController {
    constructor(private readonly postHelloService: PostHelloService) {}

  @Get('test')
  postHello(@Req() req: Request): object {
     
    return this.postHelloService.postHello(req.query);
  }
}
