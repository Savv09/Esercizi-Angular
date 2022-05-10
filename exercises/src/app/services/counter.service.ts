import { Injectable } from '@angular/core';
import { BehaviorSubject, reduce, map, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
   private counter = new BehaviorSubject<number>(0);

  public getCounter() {
    return this.counter.getValue()
  }


  public increaseCounter(value: number) {
    let defaultValue = 1;

    if (!value) {
      this.counter.pipe(
        
      )
      this.counter.subscribe(data => {return data})
    }
  }

  public decreaseCounter(value: number) {
    // let deafultValue = 1;

    // if(!value) {
    //   this.counter -= deafultValue
    //   console.log(this.counter)
    // } else if (this.counter < 0){
    //   console.error('Error: Negative Value!')
    // } else {
    //   this.counter -= value
    //   console.log(this.counter)
    // }
  }

  constructor() { }
}
