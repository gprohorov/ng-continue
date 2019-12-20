import { Injectable } from '@angular/core';

@Injectable()
export class MyServiceService {

  constructor() { }

  toConsole(arg) {
    console.log(arg);
  }

}
