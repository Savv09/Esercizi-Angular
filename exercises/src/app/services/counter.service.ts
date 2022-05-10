import { Injectable } from '@angular/core';
import { BehaviorSubject, reduce, map, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private counter = new BehaviorSubject<number>(0);

  public getCounter() {

    if (this.counter.value >= 0) {
      return this.counter.getValue()
    } else {
      return console.error('Counter cannot be negative!')
    }
  }


  public increaseCounter(value: number) {
    let defaultValue = 1;

    if (!value) {
      this.counter.next(this.counter.value + defaultValue)
    } else {
      this.counter.next(this.counter.value + value)
    }
  }

public decreaseCounter(value: number) {
  let defaultValue = 1;

  
  
  if(!value) {
    this.counter.next(this.counter.value - defaultValue)
    console.log(this.counter.value)
   } else {
      this.counter.next(this.counter.value - value) 
      console.log(this.counter)
    }
 }

  constructor() { }
}
