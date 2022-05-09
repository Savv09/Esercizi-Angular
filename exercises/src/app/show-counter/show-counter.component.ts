import { Component, OnInit } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-show-counter',
  templateUrl: './show-counter.component.html',
  styleUrls: ['./show-counter.component.css']
})
export class ShowCounterComponent implements OnInit {
  public counter: number = 0;

  constructor(private counterServices: CounterService) { }

  ngOnInit(): void {
    this.counter = this.counterServices.getCounter()
  }

}
