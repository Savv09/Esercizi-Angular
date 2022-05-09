import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-edit-counter',
  templateUrl: './edit-counter.component.html',
  styleUrls: ['./edit-counter.component.css']
})
export class EditCounterComponent implements OnInit {
  @Output() value: EventEmitter<number> = new EventEmitter<number>();
  
  public amount = new FormControl('');
  
  constructor(private counterServices: CounterService) { }
   
  
  ngOnInit(): void {
  }

  addValue(amount: number) {
    this.value.emit(amount)
  }

}
