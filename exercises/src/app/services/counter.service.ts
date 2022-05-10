import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private counter: number = 0;

  public getCounter() {

    if(this.counter < 0) {
     return console.warn('This counter cannot be negative')
    } else {
      return this.counter
    }
  }

  public increaseCounter(value: number) {
    let defaultValue = 1

    if (!value) {
      this.counter += defaultValue
    } else {
      this.counter += value;
    }
    console.log(this.counter)
  }

  public decreaseCounter(value: number) {
    let deafultValue = 1;

    if(!value) {
      this.counter -= deafultValue
      console.log(this.counter)
    } else if (this.counter < 0){
      console.error('Error: Negative Value!')
    } else {
      this.counter -= value
      console.log(this.counter)
    }
  }

  constructor() { }
}
