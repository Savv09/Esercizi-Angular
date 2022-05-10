import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-show-counter',
  templateUrl: './show-counter.component.html',
  styleUrls: ['./show-counter.component.css']
})
export class ShowCounterComponent implements OnInit {
  counter$ = new Observable<number>();

  constructor(public counterServices: CounterService) { }

  ngOnInit(): void {
    
  }

  addValue(value: number) {
    return  this.counterServices.increaseCounter(value)
  }

  subValue(value: number) {
    return this.counterServices.decreaseCounter(value)
  }


}
