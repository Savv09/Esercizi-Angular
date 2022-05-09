import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private counter: number = 0;

  public getCounter() {
    return this.counter
  }

  public increaseCounter(value: number) {
    value = 1;

    this.counter += value;
    console.log(this.counter)
  }

  public decreaseCounter(value: number) {
    value = 1;

    this.counter -= value;
    
    if(this.counter < 0) {
      console.error('Error: Negative Value!')
    } else {
      console.log(this.counter)
    }
  }

  constructor() { }
}
