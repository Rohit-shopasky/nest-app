import { Injectable,Req } from '@nestjs/common';
import { Request } from 'express';



@Injectable()
export class PostHelloService {

    postHello(params): object {
        //console.log("Req=>",request);
        console.log("params=>",params);
        return {xyz:true};
      }
}
