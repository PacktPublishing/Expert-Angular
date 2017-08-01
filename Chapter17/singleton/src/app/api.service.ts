import { Injectable } from '@angular/core';

@Injectable()
export class APIService {

  private increment: number = 0;

  constructor() {
    this.increment++;
  }

  public toString(): string {
    return "Current instance:" + this.increment;
  }

}
