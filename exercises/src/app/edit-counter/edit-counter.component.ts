import { Component, Input, OnInit } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-edit-counter',
  templateUrl: './edit-counter.component.html',
  styleUrls: ['./edit-counter.component.css']
})
export class EditCounterComponent implements OnInit {
  @Input() counter: number = 0;

  constructor(private counterServices: CounterService) { }

  ngOnInit(): void {
  }

  

}
