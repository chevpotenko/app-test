import { Injectable } from '@angular/core';

@Injectable()
export class LoggingService {

  constructor() { }

  log(val) {
    console.log(val);
  }

}
