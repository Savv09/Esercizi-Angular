import { Component, OnInit } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-show-counter',
  templateUrl: './show-counter.component.html',
  styleUrls: ['./show-counter.component.css']
})
export class ShowCounterComponent implements OnInit {

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
