import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-edit-counter',
  templateUrl: './edit-counter.component.html',
  styleUrls: ['./edit-counter.component.css']
})
export class EditCounterComponent implements OnInit {
  @Input() counter: number = 0;
  @Output() value: EventEmitter<number> = new EventEmitter<number>();

  constructor(private counterServices: CounterService) { }

  ngOnInit(): void {
  }

  useValue(value: number) {
    this.value.emit(value)
  }

}
